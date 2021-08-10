import React, { useContext } from 'react'
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { ThemeContext } from '../context/ThemeContext';
import { sizeMedia } from '../styles/mediaQuery';

export const WhoAmIm = () => {
    const { darkTheme } = useContext(ThemeContext);
    return (
        <WhoIamContainer darkTheme={darkTheme}>
            <h3>
                <FormattedMessage
                    id="app.whoami"
                />
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ipsam! Vitae at dolor amet ipsum eaque consequatur eveniet enim asperiores aliquid doloremque, maxime corrupti porro iste qui esse iusto nemo.</p>
        </WhoIamContainer>
    )
}


const WhoIamContainer = styled.div<{
    darkTheme: boolean
}>`
    margin: auto;
    margin-top:40px;
    width: 740px;
    padding: 30px;

    @media ${sizeMedia('xs')} {
        width: 90%;
        padding: 1rem;
        margin-top: 0;
    }
    @media ${sizeMedia('sm')} {
        width: 90%;
        padding: 1rem;
        margin-top: 0;
    }
    h3{
        font-size: 1.8rem;
        color : ${({ darkTheme }) => darkTheme ? '#fff' : '#000'};
        text-align: center;
        margin: 1.5rem;
    }
    p{
        color : ${({ darkTheme }) => darkTheme ? '#fff' : '#5A5A5A'};
        font-weight: 400;
    }
`;