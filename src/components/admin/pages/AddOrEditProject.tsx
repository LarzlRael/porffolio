import React from 'react'
import { GlobalForm } from '../../forms/GlobalForm'
import { projectsAddOrEditForm } from '../../../data/formPatters'
import { DashboardContent } from '../../Layouts/DashboardContent'
import { useParams } from 'react-router-dom'
import { FloatingActionButton } from '../../Buttons/FloatingActionButton'

export const AddOrEditProject = () => {
  const { id } = useParams()

  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <DashboardContent>
      <GlobalForm
        inputJson={projectsAddOrEditForm}
        onSubmit={onSubmit}
        formTitle={id ? 'Editar proyecto' : 'Agregar proyecto'}
        titleButton="Guardar"
      />
      <FloatingActionButton
        backgroundColor="green"
        icon="fas fa-plus"
        right="20px"
        bottom="20px"
        size="50px"
        onClick={() => console.log('click')}
      />
    </DashboardContent>
  )
}
