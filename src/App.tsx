import  { useContext } from 'react';

import './App.css';
import { ThemeContext } from './context/ThemeContext';

import { Layout } from './components/Layouts/Layout';
import { ThemeColors, darkColorsTheme, lightColorsTheme } from './context/themeColors';
import styled from 'styled-components';

function App() {

  const { darkTheme } = useContext(ThemeContext);
  
  return (
    <BackGroundColor
      themeColors={darkTheme ? darkColorsTheme : lightColorsTheme}
    >

      <Layout>
      </Layout>

    </BackGroundColor >
  );
}

export default App;


const BackGroundColor = styled.div<{
  themeColors: ThemeColors
}>`
  background: ${({ themeColors }) => themeColors.background};
  transition:.3s ease all;
`;
