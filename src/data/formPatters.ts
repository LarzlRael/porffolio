import { InputJsonI } from '../components/forms/interfaces/interfaces'
import * as Yup from 'yup'

export const projectsAddOrEditForm: InputJsonI[] = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'Ingrese el nombre del proyecto',
    label: 'Nombre de la proyecto',
    initialValue: '',
    validate: Yup.string().required('Campo requerido'),
  },
  {
    type: 'url',
    name: 'urlProject',
    placeholder: 'Ingrese la url del proyecto',
    label: 'URL de la proyecto',
    initialValue: '',
    validate: Yup.string().required('Campo requerido').url('URL invalida'),
  },
  {
    type: 'url',
    name: 'urlImageProject',
    placeholder: 'Ingrese la url de la imagen del proyecto',
    label: 'URL de la imagen del proyecto',
    initialValue: '',
  },
  {
    type: 'text',
    name: 'technologies',
    placeholder: 'Ingrese las tecnologias del proyecto',
    label: 'Tecnologias del proyecto',
    initialValue: '',
  },

  {
    type: 'select',
    name: 'projectType',

    label: 'Tecnologias del proyecto',
    initialValue: '',
    options: [
      { key: 'Seleccion una opcion', value: '' },
      { key: 'web', value: 'web' },
      { key: 'app', value: 'app' },
    ],
    validate: Yup.string().required('Campo requerido'),
  },
]
