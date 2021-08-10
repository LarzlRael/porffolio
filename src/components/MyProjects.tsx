import React, { useContext } from 'react'
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { darkColorsTheme, lightColorsTheme, sizeDesktop, ThemeColors } from '../context/themeColors';

import { ThemeContext } from '../context/ThemeContext';
import { sizeMedia } from '../styles/mediaQuery';

export const MyProjects = () => {
    const { darkTheme } = useContext(ThemeContext)
    return (
        <MyProjectsStyles
            id="projects"
            themeColors={darkTheme ? darkColorsTheme : lightColorsTheme}
        >
            <h2>
                <FormattedMessage
                    id="app.projects"
                />
            </h2>
            <MyProjectsGrid />
        </MyProjectsStyles>
    )
}
const MyProjectsGrid = () => {
    return (
        <WorkGridContainer>

            <WorksOneGrid />
            <WorksOneGrid />
            <WorksOneGrid />
            <WorksOneGrid />
            <WorksOneGrid />
            <WorksOneGrid />

        </WorkGridContainer>
    )
}


const WorksOneGrid = () => {
    return (
        <WorksOneGridContainer>
            <ContainerImage src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" >

            </ContainerImage>
            <h3>Lorem ipsum dolor</h3>
            <span>Html Css Js</span>
        </WorksOneGridContainer>
    )
}

const WorksOneGridContainer = styled.div`
    width: 235px;
    height: 300px;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    text-align: center;
    @media ${sizeMedia('xs')} {
        width: 90%;
        height: 100%;
        margin: auto;
    }
    
    h3{
        font-size: 1rem;
        color:#3895EA;
        margin: 10px 0;
    }
    span{
        margin-top: 0px;
        font-size: 0.8rem;
        color: #5A5A5A;
    }

`;

const MyProjectsStyles = styled.div<{
    themeColors: ThemeColors
}>`
    transition: .3s ease all;
    
    background: ${({ themeColors }) => themeColors.backgroundGrids};
    margin-top: 90px;
    h2{
        color:  ${({ themeColors }) => themeColors.titleColor};
        padding-top: 2rem;
        padding-bottom: 2rem;
        text-align: center;
    }
`;
const WorkGridContainer = styled.div`
    width: ${sizeDesktop};
    margin:auto;
    display: grid;
    gap: 3.7rem;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    
    @media ${sizeMedia('xs')} {
        width: 100%;      
    }
    @media ${sizeMedia('sm')} {
        width: 90%;
    }
`;

const ContainerImage = styled.img`
    width: 100%;
    height: 235px;
    
    border-radius: 5px;
    

`;