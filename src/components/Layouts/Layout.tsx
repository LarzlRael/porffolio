import { Header } from './Header'
import { WhoAmI } from '../WhoAmI'
import { TecnologiesGrids } from '../TecnologiesGrids'
import { MyProjects } from '../MyProjects'
import { FormContact } from '../FormContact'
import { ThemeColors } from '../../context/themeColors'
import { ThemeContext } from '../../context/ThemeContext'
import { Footer } from '../Footer'
import styled from 'styled-components'
import { sizeMedia } from '../../styles/mediaQuery'
import { useGetProjectsByType } from '../../hooks/useGetProjects'
import { useThemeStore } from '../../store/useThemeStore'

/* interface LayoutProps {
  children: React.ReactNode
} */
export const Layout = () => {
  const themeColors = useThemeStore((state) => state.themeColors)
  const { projectsStateByType } = useGetProjectsByType('web')
  const { projectsStateByType: projectsStateByTypeApp } = useGetProjectsByType(
    'app',
  )
  return (
    <>
      <MainLayout themeColors={themeColors}>
        <Header />
      </MainLayout>
      <WhoAmI />
      {/* <TecnologiesGrids /> */}

      <MyProjects
        formattedMessageid="app.projects"
        projects={projectsStateByType!}
        idHref="projects"
      />
      <MyProjects
        formattedMessageid="app.apps"
        projects={projectsStateByTypeApp!}
        idHref="apps"
      />
      <FormContact />
      <Footer />
    </>
  )
}

const MainLayout = styled.div<{
  themeColors: ThemeColors
}>`
  position: relative;
  width: 100%;
  background: url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')
    center / cover;

  background-attachment: fixed;
  background-repeat: no-repeat;

  &:before {
    content: '';
    position: absolute;
    background-color: ${({ themeColors }) => themeColors.primaryColor};
    opacity: 0.6;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media ${sizeMedia('xs_sm')} {
    width: 100vw;
    height: 100vh;
  }
`
