import { useContext } from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { sizeDesktop, ThemeColors } from '../context/themeColors'

import { ThemeContext } from '../context/ThemeContext'
import { sizeMedia } from '../styles/mediaQuery'
/* import { LogoGithub, OpenOutline } from 'react-ionicons'; */
import { IoLogoGithub, IoOpenOutline } from 'react-icons/io5'
import { ProjectsResponse } from '../interfaces/tec.interface'

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
        <WorksOneGrid {...project} key={project._id} />
      ))}
    </WorkGridContainer>
  )
}

const WorksOneGrid = ({
  urlImageProject,
  name,
  urlProject,
  repositoryUrl,
  technologies,
}: ProjectsResponse) => {
  const { themeColors } = useContext(ThemeContext)

  const goTo = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <WorksOneGridContainer themeColors={themeColors} className="pointer">
      <div className="imageGridContainer">
        <img
          src={
            urlImageProject
              ? urlImageProject
              : 'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-no-image-available-icon-flat.jpg'
          }
          alt={name}
          loading="lazy"
        />
        <div className="buttonsContainer">
          <button
            style={{
              background: `${themeColors.primaryColor}`,
            }}
            onClick={() => goTo(urlProject)}
          >
            <FormattedMessage id="app.go" />
            &nbsp;
            <IoOpenOutline color="white" width="20px" height="20px" />
          </button>
          <button
            style={{
              background: `${themeColors.primaryColor}`,
            }}
            onClick={() => goTo(repositoryUrl)}
          >
            <FormattedMessage id="app.repo" />

            <IoLogoGithub width="20px" height="20px" color="white" />
          </button>
        </div>
      </div>

      <h3>{name}</h3>
      <span>{technologies}</span>
    </WorksOneGridContainer>
  )
}

const WorksOneGridContainer = styled.div<{
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
const WorkGridContainer = styled.div`
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
