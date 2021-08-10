
import { useContext } from 'react'
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import { ThemeColors, lightColorsTheme, darkColorsTheme } from '../context/themeColors';
import { sizeMedia } from '../styles/mediaQuery';
import { useWindowSize } from '../hooks/useWindowsSize';


export const LinksMenuNavigation = () => {

    const { darkTheme, toogleMenu, ChangeToogleMenu } = useContext(ThemeContext);

    const size = useWindowSize();

    const linkClickeable = () => {
        if (size.width <= 768) {
            ChangeToogleMenu();
        }
    }

    return (



        <LinkContainer
            className={toogleMenu ? 'menu-active' : 'menu-desactive'}
            darkTheme={darkTheme}
            themeColors={!darkTheme ?
                lightColorsTheme :
                darkColorsTheme}
        >

            <a
                href="#home"
                onClick={() => linkClickeable()}
            >
                <FormattedMessage
                    id="app.home" />
            </a>
            <a
                onClick={() => linkClickeable()}
                href="#tecnologies">
                <FormattedMessage
                    id="app.technologies" />
            </a>
            <a
                onClick={() => linkClickeable()}
                href="#projects">
                <FormattedMessage
                    id="app.projects" />
            </a>
            <a
                onClick={() => linkClickeable()}
                href="#contact">
                <FormattedMessage
                    id="app.contact" />
            </a>
        </LinkContainer>

    )
};

const LinkContainer = styled.div<{
    darkTheme: boolean;
    themeColors: ThemeColors;
}>`
    a{
        color:white;
        margin-left: 30px;
        font-family:'Open Sans';
    }
    @media ${sizeMedia('xs')} {
        transition: .3s ease all;
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 100vw;
        height: 100vh;
        z-index:100;
        justify-content: space-around;
        background: ${({ themeColors }) => themeColors.primaryColor};
        align-items: center;
        opacity: 0.9;
        left: 0;
        top: 0;
    }
    @media ${sizeMedia('sm')} {
        width: 100vw;
        height: 100vh;
        transition: .3s ease all;
        display: flex;
        flex-direction: column;
        position: absolute;
        z-index:100;
        justify-content: space-around;
        background: ${({ themeColors }) => themeColors.primaryColor};
        align-items: center;
        opacity: 0.9;
        left: 0;
        top: 0;
    }
`;