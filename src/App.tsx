import { useContext } from 'react';

import './App.css';
import { ThemeContext } from './context/ThemeContext';

import { Layout } from './components/Layouts/Layout';
import { ThemeColors } from './context/themeColors';
import styled from 'styled-components';

function App() {

  const { themeColors } = useContext(ThemeContext);

  return (
    <BackGroundColor
      themeColors={themeColors}
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
