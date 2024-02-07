import React from 'react'
import useAxiosAuth from '../../../hooks/httpHooks/useAxiosAuth'
import { ProjectsResponse } from '../../../interfaces/tec.interface'
import { WorkGridContainer } from '../../MyProjects'
import { ProjectCard } from '../../card/ProyectCard'
import { useNavigate } from 'react-router-dom'
import {
  RelativeContainer,
  AbsoluteContainer,
} from '../../containers/containers'
import { FloatingActionButton } from '../../Buttons/FloatingActionButton'
import { deleteAction } from '../../../provider/action/ActionAuthorization'
import { validateStatus } from '../../../utils/utils'
import { useThemeStore } from '../../../store/store'

export const ListProyects = () => {
  const themeColors = useThemeStore((state) => state.themeColors)
  const { response, loading, reload } = useAxiosAuth<ProjectsResponse[]>({
    url: '/projects/all_projects',
    method: 'GET',
  })
  const navigate = useNavigate()
  const handleClick = (project: ProjectsResponse) =>
    navigate(`/dashboard/edit_proyect/${project._id}`)

  function handleDelete({ _id }: ProjectsResponse) {
    if (window.confirm('¿Estas seguro de eliminar este proyecto?')) {
      deleteAction(`/projects/${_id}`)
        .then((res: any) => {
          if (validateStatus(res.status)) {
            reload()
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  return (
    <RelativeContainer>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <WorkGridContainer>
          {response?.map((project) => {
            return (
              <RelativeContainer>
                {/* <AbsoluteContainer top="10px" left="10px">
                  <IoEyeOffOutline color="blue" />
                </AbsoluteContainer> */}
                <ProjectCard
                  project={project}
                  key={project._id}
                  onSelectedProject={handleClick}
                  onHandleDelete={handleDelete}
                />
              </RelativeContainer>
            )
          })}
        </WorkGridContainer>
      )}
      <FloatingActionButton
        tooltipTitle="Nuevo Proyecto"
        background={themeColors.primaryColor}
        onClick={() => {
          navigate('/dashboard/add_proyect')
        }}
      />
    </RelativeContainer>
  )
}
