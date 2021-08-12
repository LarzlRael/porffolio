import React, { useContext } from 'react';


import { Header } from './Header';
import { WhoAmIm } from '../WhoAmIm';
import { TecnologiesGrids } from '../TecnologiesGrids';
import { MyProjects } from '../MyProjects';
import { FormContact } from '../FormContact';
import { ThemeColors } from '../../context/themeColors';
import { ThemeContext } from '../../context/ThemeContext';
import { Footer } from '../Footer';
import styled from 'styled-components';
import { sizeMedia } from '../../styles/mediaQuery';



interface LayoutProps {
    children: React.ReactNode,
}
export const Layout = ({ children }: LayoutProps) => {
    const { themeColors } = useContext(ThemeContext);
    return (
        <>
            <MainLayout
                themeColors={themeColors}>
                <Header />
            </MainLayout>
            <WhoAmIm />
            <TecnologiesGrids />

            <MyProjects formattedMessageid="app.projects" idHref="projects" />
            <MyProjects formattedMessageid="app.apps" idHref="apps" />
            <FormContact />
            <Footer />
        </>
    )
}


const MainLayout = styled.div<{
    themeColors: ThemeColors,
}>`
    width: 100%;
    background:url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80') center/cover;
    position: relative;

    &:before {
        content:"";
        position: absolute;
        background-color: ${({ themeColors }) => themeColors.primaryColor} ;
        opacity: 0.6;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    
    @media ${sizeMedia('xs')} {
        width: 100vw;
        height: 100vh;
    }
`;
