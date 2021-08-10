import { useContext } from 'react'
import styled from 'styled-components';

import { Menu } from 'react-ionicons';


import { Switch } from './Switch';
import { FormattedMessage } from 'react-intl';
import { LangContext } from '../../context/langContext';
import { ThemeContext } from '../../context/ThemeContext';
import { LinksMenuNavigation } from '../LinksMenuNavigation';
import { sizeMedia } from '../../styles/mediaQuery';
import { sizeDesktop } from '../../context/themeColors';


export const Header = () => {

    const { changeLan } = useContext(LangContext);
    const { darkTheme, ChangeToogleMenu } = useContext(ThemeContext);

    return (

        <HeaderContainer>
            <BoxHeaderTitle>
                <div className="flagsContainer">

                    <div className="flags-groups">
                        <img
                            className="pointer"
                            onClick={() => changeLan('es-ES')}
                            src="/enFlag.png" alt="en flag" />
                        <img
                            className="pointer"
                            onClick={() => changeLan('en-US')}
                            src="/esFlag.png" alt="es Flag" />
                    </div>

                    <div
                        className="menuicon"
                        onClick={ChangeToogleMenu}
                    >
                        <Menu
                            color={'#FFFFFF'}
                            height="45px"
                            width="45px"
                        />
                    </div>
                </div>

                <LinksMenuNavigation />

            </BoxHeaderTitle>

            <NamePresentation>
                <h2>Reynaldo Larz</h2>
                <h3>
                    <FormattedMessage
                        id="app.job"
                    />
                </h3>
            </NamePresentation>
            <Switch />
            <ProfileImage size={150} blackTheme={darkTheme} >
                <img
                    src="https://i.redd.it/v0caqchbtn741.jpg" alt="porifle" />
            </ProfileImage>

        </HeaderContainer>
    )

}

const BoxHeaderTitle = styled.div`
    display:flex;
    justify-content: space-between;
    padding-top: 3rem;
    align-content:center;
    align-items:center;
    @media ${sizeMedia('xs')} {
        padding-top: 1rem;
    }
`;

const HeaderContainer = styled.div`
    width: ${sizeDesktop};
    height: 450px;
    margin:auto;
    position:relative;
    scroll-behavior: smooth;    
    @media ${sizeMedia('xs')} {
        width: 100%;
    }
    @media ${sizeMedia('sm')} {
        width: 100%;
    }
    
`;


const NamePresentation = styled.div`
    margin:auto ;
    margin-top: 70px;
    color: white;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    border-radius: 5px;
    padding: 25px;
    width: 450px;
    border: 2px solid #fff;
    
    text-align: center;

    @media ${sizeMedia('sm')} {
        width: 90%;
        padding: 1rem;
        h2{
            font-size: 36px;
        }
        h3{
            font-size: 18px;
        }
    }

    h2{
        margin-top: 0;
        margin-bottom: 0;
        font-size: 48px;
        margin-bottom: 1rem;
        
    }
    h3{
        margin-top: 0;
        margin-bottom: 0;
        font-size: 24px;

    }
`;

const ProfileImage = styled.div<{
    size: number,
    blackTheme: boolean,
}>`
    
    width: ${({ size }) => size + 'px'} ;
    height: ${({ size }) => size + 'px'} ;
    position:absolute;
    overflow: hidden;
    border-radius: 50%;
    bottom: calc(-1 * (${({ size }) => size + 'px'} / 2));
	left: calc(50% - calc(${({ size }) => size + 'px'} / 2));
    border: 5px solid ${({ blackTheme }) => blackTheme ? '#8980f5' : '#21897e'};
    img{
        width: 100%;
        height: 100%;
    }

`;