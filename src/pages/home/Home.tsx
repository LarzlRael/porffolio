import { useContext } from 'react'

import styled from 'styled-components'
import { Layout } from '../../components/Layouts/Layout'
import { ThemeColors } from '../../context/themeColors'
import { ThemeContext } from '../../context/ThemeContext'

export const Home = () => {
  const { themeColors } = useContext(ThemeContext)

  return (
    <BackGroundColor themeColors={themeColors}>
      <Layout />
    </BackGroundColor>
  )
}

const BackGroundColor = styled.div<{
  themeColors: ThemeColors
}>`
  background: ${({ themeColors }) => themeColors.background};
  transition: 0.3s ease all;
`
