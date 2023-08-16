import { useContext } from 'react'

import { ProjectsResponse } from '../../interfaces/tec.interface'

import { ThemeContext } from '../../context/ThemeContext'
import { FaTimes, FaTimesCircle } from 'react-icons/fa'
interface PropsProjectCard {
  project: ProjectsResponse
  onSelectedProject?: (project: ProjectsResponse) => void
  onHandleDelete?: (project: ProjectsResponse) => void
}

export const ProjectCard = ({
  onSelectedProject,
  project: projectsResponse,
  onHandleDelete,
}: PropsProjectCard) => {
  const { themeColors } = useContext(ThemeContext)
  const {
    urlImageProject,
    name,
    urlProject,
    repositoryUrl,
    technologies,
  } = projectsResponse

  function handleClick() {
    if (onSelectedProject) {
      onSelectedProject(projectsResponse)
    }
  }
  const handleDeleteClick = (event: any) => {
    event.stopPropagation() // Detener la propagación del evento
    if (onHandleDelete) {
      onHandleDelete(projectsResponse)
    }
  }
  return (
    <div>
      <div className="imageGridContainer pointer" onClick={handleClick}>
        <img
          src={
            urlImageProject
              ? urlImageProject
              : 'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-no-image-available-icon-flat.jpg'
          }
          alt={name}
          loading="lazy"
        />

        {onHandleDelete && (
          <div className="buttonsContainer">
            <FaTimesCircle
              color={themeColors.primaryColor}
              size="25"
              onClick={handleDeleteClick}
            />
          </div>
        )}
      </div>

      <h3>{name}</h3>
      {/* <span>{technologies}</span> */}
    </div>
  )
}
