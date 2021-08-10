import { useContext } from 'react'
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';



import { ThemeContext } from '../context/ThemeContext';
import { ThemeColors, lightColorsTheme, darkColorsTheme } from '../context/themeColors';
import { sizeMedia } from '../styles/mediaQuery';

const linkedin = '/linkedin.png';
const github = '/github.png';
const facebook = '/facebook.png';
const instagram = '/instagram.png';

const SocialGridData: PropsSocial[] = [
    {
        alt: 'Linkedin',
        href: 'https://www.linkedin.com/in/reynaldo-gt-09a48115b/',
        logoSource: linkedin
    },
    {
        alt: 'Facebook',
        href: 'https://www.linkedin.com/in/reynaldo-gt-09a48115b/',
        logoSource: facebook
    },
    {
        alt: 'Github',
        href: 'https://github.com/LarzlRael',
        logoSource: github
    },
    {
        alt: 'Intragram',
        href: 'https://www.linkedin.com/in/reynaldo-gt-09a48115b/',
        logoSource: instagram
    },
]

export const Footer = () => {



    const { darkTheme } = useContext(ThemeContext);

    return (
        <FooterContainer
            themeColors={darkTheme ? darkColorsTheme : lightColorsTheme}
        >
            <SocialMediaContainer>

                {
                    SocialGridData.map((social) => (
                        <a target="blank"
                            key={uuidv4()}
                            href={social.href}>
                            <SocialGrid
                                logoSource={social.logoSource}
                                href={social.href} />
                        </a>
                    ))
                }
            </SocialMediaContainer>
        </FooterContainer>
    )
}

interface PropsSocial {
    href: string;
    logoSource: string;
    alt?: string;
};
const SocialGrid = ({ logoSource, alt }: PropsSocial) => {
    return (
        <div className="social">
            {/* <a target="blank"
                href={href}> */}
            <img src={logoSource} alt={alt} />
            {/* </a> */}
        </div>
    )
}

const FooterContainer = styled.footer<{
    themeColors: ThemeColors,
}>`
    margin-top: 3rem;
    height: 100px;
    background-color: #1E2B38;
    
    display: flex;
    align-items: center;

    @media ${sizeMedia('xs')} {
        padding: 1.5rem;  
        height: auto;
    }
`;
const SocialMediaContainer = styled.div`
    
    margin:auto;
    display: grid;
    gap: 2rem;
    width: 300px;
    align-items: center;
    justify-items: center;
    
    grid-template-columns: repeat(auto-fill, minmax(2.5rem, 1fr));

    @media (max-width: 360px) {
        width: 100%;
    }
    

`;