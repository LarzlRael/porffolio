import styled from 'styled-components'
import { Layout } from '../../components/Layouts/Layout'
import { ThemeColors } from '../../context/themeColors'
import { ThemeContext } from '../../context/ThemeContext'
import { useThemeStore } from '../../store/useThemeStore'

export const Home = () => {
  const themeColors = useThemeStore((state) => state.themeColors)

  return (
    <BackGroundColor themeColors={themeColors}>
      <Layout />
    </BackGroundColor>
  )
}

export const BackGroundColor = styled.div<{
  themeColors: ThemeColors
}>`
  background: ${({ themeColors }) => themeColors.background};
  transition: 0.3s ease all;
`
