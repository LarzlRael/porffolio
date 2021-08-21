import { useContext } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { sizeDesktop, ThemeColors } from '../context/themeColors';

import { ThemeContext } from '../context/ThemeContext';
import { sizeMedia } from '../styles/mediaQuery';
import { LogoGithub, OpenOutline } from 'react-ionicons';
import { ProjectsResponse } from '../interfaces/tec.interface';


interface Props {
    formattedMessageid: string;
    idHref: string;
    projects: ProjectsResponse[],
}
export const MyProjects = ({ formattedMessageid, idHref, projects }: Props) => {
    const { themeColors } = useContext(ThemeContext)
    return (
        <MyProjectsStyles
            id={idHref}
            themeColors={themeColors}
        >
            <div className="title">
                <h2
                    style={{
                        color: themeColors.titleColor,
                    }}
                >
                    <FormattedMessage
                        id={formattedMessageid}
                    />

                </h2>
                {idHref === 'apps' ?

                    <img src="https://img.icons8.com/material-rounded/50/666666/ios-development.png" alt="" />
                    :
                    <img src="./web11.png" alt="" />
                }
            </div>


            <MyProjectsGrid projectsState={projects} />


        </MyProjectsStyles>
    )
}
interface MyProjectsGridProps {
    projectsState: ProjectsResponse[];
}
const MyProjectsGrid = ({ projectsState }: MyProjectsGridProps) => {


    return (
        <WorkGridContainer>
            {
                projectsState?.map((project) => (
                    <WorksOneGrid {...project} />
                ))
            }


        </WorkGridContainer>
    )
}


const WorksOneGrid = ({ ...project }: ProjectsResponse) => {
    const { themeColors } = useContext(ThemeContext)

    const goTo = (url: string) => {
        window.open(url, "_blank");
    }

    return (
        <WorksOneGridContainer
            themeColors={themeColors}
            className="pointer"
        >

            <div className="imageGridContainer">
                <img src={project.urlImageProject ? project.urlImageProject : 'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-no-image-available-icon-flat.jpg'} alt={project.name} loading="lazy" />

                <div className="buttonsContainer">
                    <button
                        style={{
                            background: `${themeColors.primaryColor}`
                        }}
                        onClick={() => goTo(project.urlProject)}
                    >
                        <FormattedMessage
                            id="app.go" />
                        &nbsp;
                        <OpenOutline
                            color="white"
                            width="20px"
                            height="20px"
                        />
                    </button>
                    <button
                        style={{
                            background: `${themeColors.primaryColor}`
                        }}
                        onClick={() => goTo(project.repositoryUrl)}
                    >
                        <FormattedMessage
                            id="app.repo" />

                        <LogoGithub
                            width="20px"
                            height="20px"
                            color="white"
                        />
                    </button>
                </div>
            </div>


            <h3>{project.name}</h3>
            <span>{project.technologies}</span>
        </WorksOneGridContainer>
    )
}

const WorksOneGridContainer = styled.div
    <{
        themeColors: ThemeColors,
    }>`
    width: 235px;
    height: 300px;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    text-align: center;
    @media ${sizeMedia('xs_sm')} {
        width: 90%;
        height: 100%;
        margin: auto;
    }
    
    h3{
        font-size: 1rem;
        color:${({ themeColors }) => themeColors.primaryColor};
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
    .title{
        display: flex;
        flex-direction: column-reverse;
        justify-content:center;
        align-items: center;
        padding-top: 2rem;
        padding-bottom: 2rem;
        
        h2{
            color:  ${({ themeColors }) => themeColors.titleColor};
            text-align: center;
        }
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
        margin: auto;
        width: 90%;
    }
    @media ${sizeMedia('md')} {

        width: 90%;
    }
    
`;

/* const ImageContainer = styled.div`
    width: 100%;
    height: 235px;
    position: relative;
    img{
        width: 100%;
        height: 235px;
        border-radius: 5px;
        overflow: hidden;
        transition: transform .5s, visibility .5s ease-in;
    &:hover{
        transform: scale(1.1);
        opacity: 0.4;
    }
    div{
        width: 100px;
        background:red;
    }

}
`; */