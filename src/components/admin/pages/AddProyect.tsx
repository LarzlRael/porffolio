import React, { useState } from 'react'
import { GlobalForm } from '../../forms/GlobalForm'
import { projectsAddOrEditForm } from '../../../data/formPatters'
import { DashboardContent } from '../../Layouts/DashboardContent'
import { useNavigate, useParams } from 'react-router-dom'
import { FloatingActionButton } from '../../Buttons/FloatingActionButton'
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

export const AddProject = () => {
  const navigator = useNavigate()
  const [loadingProyect, setloadingProyect] = useState(false)
  const onSubmit = (data: any) => {
    console.log(data)

    postAction(`/projects/`, data)
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

  return (
    <DashboardContent>
      <div
        style={{
          width: '75%',
          margin: 'auto',
        }}
      >
        <GlobalForm
          inputJson={projectsAddOrEditForm}
          onSubmit={onSubmit}
          formTitle="Agregar proyecto"
          titleButton="Guardar"
        />
      </div>
    </DashboardContent>
  )
}
