import React, { useContext } from 'react'
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { GridItem } from './GridItem';
import { InfoGridsTec } from '../data/dataTec';
import { FormattedMessage } from 'react-intl';
import { ThemeColors, lightColorsTheme, darkColorsTheme, sizeDesktop } from '../context/themeColors';
import { ThemeContext } from '../context/ThemeContext';
import { sizeMedia } from '../styles/mediaQuery';

export const TecnologiesGrids = () => {
    
    const { darkTheme } = useContext(ThemeContext);
    return (
        <TecContainer id="tecnologies"
            themeColors={darkTheme ? darkColorsTheme : lightColorsTheme}
        >
            <h2>
                <FormattedMessage
                    id="app.technologies"
                />
            </h2>

            <GridContainer>

                {InfoGridsTec.map((info) => (
                    <>
                        <GridItem
                            imageRoute={info.imageRoute}
                            name={info.name}
                            key={uuidv4()}
                        />
                        
                    </>
                ))}

            </GridContainer>

        </TecContainer>
    )
}

interface Props {
    children: React.ReactNode,
}
const GridContainer = ({ children }: Props) => {
    return (
        <GridContainerSytyle >
            {children}
        </GridContainerSytyle>
    )
}


const TecContainer = styled.div<{
    themeColors: ThemeColors
}>`
    background: ${({ themeColors }) => themeColors.backgroundGrids};
    transition: .3s ease all;
    padding: 3rem 0;
    h2{
        color: ${({ themeColors }) => themeColors.titleColor};
        font-size:24px;
        text-align: center;
        padding-bottom: 30px;
    }
`;

const GridContainerSytyle = styled.div`
    width: ${sizeDesktop};
    margin: auto;
    display: grid;
    gap: 3.7rem;
    grid-template-columns: repeat(auto-fill, minmax(4.5rem, 1fr));
    
    @media ${sizeMedia('xs')} {
        width: 90%;
    }
    @media ${sizeMedia('sm')} {
        width: 90%;
    }
`;