import { useContext } from 'react'
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { sizeDesktop, ThemeColors } from '../context/themeColors';

import { ThemeContext } from '../context/ThemeContext';
import { sizeMedia } from '../styles/mediaQuery';
import { LogoGithub, OpenOutline } from 'react-ionicons';


interface Props {
    formattedMessageid: string;
    idHref: string;
}
export const MyProjects = ({ formattedMessageid, idHref }: Props) => {
    const { themeColors } = useContext(ThemeContext)
    return (
        <MyProjectsStyles
            id={idHref}
            themeColors={themeColors}
        >
            <h2>
                <FormattedMessage
                    id={formattedMessageid}
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


        </WorkGridContainer>
    )
}

interface ProjectProps {
    srcImage: string;
    urlProject: string;
    urlRepo: string;
}
const WorksOneGrid = () => {
    const { themeColors } = useContext(ThemeContext)

    return (
        <WorksOneGridContainer
            themeColors={themeColors}
            className="pointer"
        >

            <div className="imageGridContainer">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" alt="project name" />

                <div className="buttonsContainer">
                    <button
                        style={{
                            background: `${themeColors.primaryColor}`
                        }}
                    >Ir
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
                    >
                        Repositorio

                        <LogoGithub
                            width="20px"
                            height="20px"
                            color="white"
                        />
                    </button>
                </div>
            </div>


            <h3>Lorem ipsum dolor</h3>
            <span>Html Css Js</span>
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
    @media ${sizeMedia('xs')} {
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