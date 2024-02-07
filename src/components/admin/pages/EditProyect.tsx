import { useState } from 'react'
import { GlobalForm } from '../../forms/GlobalForm'
import { projectsAddOrEditForm } from '../../../data/formPatters'
import { useNavigate, useParams } from 'react-router-dom'

import { ProjectsResponse } from '../../../interfaces/tec.interface'
import useAxios from '../../../hooks/httpHooks/useAxios'
import LoadingWihLogo from '../../loadings/LoadingWithLogo'
import BoxFlex from '../../boxex/BoxFlex'
import { ProjectCard } from '../../card/ProyectCard'
import {
  postAction,
  putAction,
} from '../../../provider/action/ActionAuthorization'
import { validateStatus } from '../../../utils/utils'
import BackIcon from '../../boxex/BackIcon'
import { RelativeContainer } from '../../containers/containers'

export const EditProject = () => {
  const { id } = useParams()
  const navigator = useNavigate()

  const [loadingProyect, setloadingProyect] = useState(false)
  const onSubmit = (data: any) => {
    putAction(`/projects/${response._id}`, data)
      .then((res: any) => {
        setloadingProyect(false)
        if (validateStatus(res.status)) {
          navigator(-1)
          /*  toast.success('Negocio añadido correctamente!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        }) */
        } else {
          setloadingProyect(false)
        }
      })
      .catch((err) => {
        setloadingProyect(false)
        console.log(err)
      })
  }
  const { response, loading, reload, error } = useAxios<ProjectsResponse>({
    url: `/projects/get_proyect/${id}`,
    method: 'GET',
  })
  return (
    <RelativeContainer>
      <BackIcon onClick={() => navigator(-1)} />
      {loading ? (
        <LoadingWihLogo />
      ) : (
        <BoxFlex
          justify="space-evenly"
          style={{
            width: '100%',
          }}
        >
          <GlobalForm
            data={response}
            inputJson={projectsAddOrEditForm}
            onSubmit={onSubmit}
            formTitle={id ? 'Editar proyecto' : 'Agregar proyecto'}
            titleButton="Guardar"
          />

          {response && (
            <ProjectCard
              project={response}
              onSelectedProject={(project) => {
                window.open(project.urlProject, '_blank')
              }}
            />
          )}
        </BoxFlex>
      )}
    </RelativeContainer>
  )
}
