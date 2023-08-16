import { useContext } from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { sizeDesktop, ThemeColors } from '../context/themeColors'

import { ThemeContext } from '../context/ThemeContext'
import { sizeMedia } from '../styles/mediaQuery'

import { ProjectsResponse } from '../interfaces/tec.interface'
import { ProjectCard } from './card/ProyectCard'

interface Props {
  formattedMessageid: string
  idHref: string
  projects: ProjectsResponse[]
}
export const MyProjects = ({ formattedMessageid, idHref, projects }: Props) => {
  const { themeColors } = useContext(ThemeContext)
  return (
    <MyProjectsStyles id={idHref} themeColors={themeColors}>
      <TitleAndImage
        key={idHref}
        formattedMessageid={formattedMessageid}
        imageSrc="https://img.icons8.com/material-rounded/50/666666/ios-development.png"
        themeColors={themeColors}
      />
      <MyProjectsGrid projectsState={projects} />
    </MyProjectsStyles>
  )
}

interface PropsTitleAndImage {
  formattedMessageid: string
  imageSrc: string
  themeColors: ThemeColors
}
export const TitleAndImage = ({
  formattedMessageid,
  imageSrc,
  themeColors,
}: PropsTitleAndImage) => {
  return (
    <div className="title">
      <h2
        style={{
          color: themeColors.titleColor,
        }}
      >
        <FormattedMessage id={formattedMessageid} />
      </h2>
      <img src={imageSrc} alt="" />
    </div>
  )
}

interface MyProjectsGridProps {
  projectsState: ProjectsResponse[]
}
const MyProjectsGrid = ({ projectsState }: MyProjectsGridProps) => {
  return (
    <WorkGridContainer>
      {projectsState?.map((project) => (
        <ProjectCard
          project={project}
          key={project._id}
          onSelectedProject={(proyect) => {
            window.open(proyect.urlProject, '_blank')
          }}
        />
      ))}
    </WorkGridContainer>
  )
}

export const WorksOneGridContainer = styled.div<{
  themeColors: ThemeColors
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

  h3 {
    font-size: 1rem;
    color: ${({ themeColors }) => themeColors.primaryColor};
    margin: 10px 0;
  }
  span {
    margin-top: 0px;
    font-size: 0.8rem;
    color: #5a5a5a;
  }
`

const MyProjectsStyles = styled.div<{
  themeColors: ThemeColors
}>`
  transition: 0.3s ease all;

  background: ${({ themeColors }) => themeColors.backgroundGrids};
  margin-top: 90px;
  .title {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 2rem;

    h2 {
      color: ${({ themeColors }) => themeColors.titleColor};
      text-align: center;
    }
  }
`
export const WorkGridContainer = styled.div`
  width: ${sizeDesktop};
  margin: auto;
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
`
