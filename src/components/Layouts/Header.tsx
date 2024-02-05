import { useContext } from 'react'
import styled from 'styled-components'

import { IoMenu } from 'react-icons/io5'

import { Switch } from './Switch'
import { FormattedMessage } from 'react-intl'
import { LangContext } from '../../context/langContext'
import { ThemeContext } from '../../context/ThemeContext'
import { LinksMenuNavigation } from '../LinksMenuNavigation'
import { sizeMedia } from '../../styles/mediaQuery'
import { sizeDesktop, ThemeColors } from '../../context/themeColors'
import { FaSun, FaMoon } from 'react-icons/fa'

export const Header = () => {
  const { changeLan } = useContext(LangContext)
  const {
    toogleMenu,
    closeMenu,
    openMenu,
    themeColors,
    isDarkTheme,
    changeTheme,
  } = useContext(ThemeContext)

  return (
    <HeaderContainer>
      <BoxHeaderTitle>
        <div className="flagsContainer">
          <div className="flags-groups">
            <img
              className="pointer"
              onClick={() => changeLan('es-ES')}
              src="/enFlag.png"
              alt="en flag"
            />
            <img
              className="pointer"
              onClick={() => changeLan('en-US')}
              src="/esFlag.png"
              alt="es Flag"
            />
          </div>

          <div className="menuicon" onClick={toogleMenu ? closeMenu : openMenu}>
            <IoMenu color="#FFFFFF" size="40" />
          </div>
        </div>

        <LinksMenuNavigation />
      </BoxHeaderTitle>

      <NamePresentation>
        <h2>Larz Dev</h2>
        <h3>
          <FormattedMessage id="app.job" />
        </h3>
      </NamePresentation>
      <Switch
        leftIcon={<FaSun color="#FDD835" size="20" />}
        rightIcon={<FaMoon color="#FDD835" size="20" />}
        isActive={isDarkTheme}
        handleToggle={changeTheme}
        themeColors={themeColors}
      />
      <ProfileImage size={150} themeColors={themeColors}>
        <img
          src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
          alt="porifle"
        />
      </ProfileImage>
    </HeaderContainer>
  )
}

const BoxHeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
  align-content: center;
  align-items: center;
  @media ${sizeMedia('xs_sm')} {
    padding-top: 0;
  }
`

const HeaderContainer = styled.div`
  width: ${sizeDesktop};
  height: 450px;
  margin: auto;
  position: relative;
  scroll-behavior: smooth;
  @media ${sizeMedia('xs_sm')} {
    padding: 1rem;
    width: 100%;
  }
  @media ${sizeMedia('md')} {
    width: 100%;
  }
`

const NamePresentation = styled.div`
  margin: auto;
  margin-top: 70px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 25px;
  width: 450px;
  border: 2px solid #fff;
  position: relative;

  text-align: center;

  @media ${sizeMedia('xs_sm')} {
    margin-top: 1.5rem;
    width: 100%;
    padding: 1rem;
    h2 {
      font-size: 36px;
    }
    h3 {
      font-size: 18px;
    }
  }

  h2 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 48px;
    margin-bottom: 1rem;
  }
  h3 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 24px;
  }
`

const ProfileImage = styled.div<{
  size: number
  themeColors: ThemeColors
}>`
  width: ${({ size }) => size + 'px'};
  height: ${({ size }) => size + 'px'};
  position: absolute;
  overflow: hidden;
  border-radius: 50%;
  bottom: calc(-1 * (${({ size }) => size + 'px'} / 2));
  left: calc(50% - calc(${({ size }) => size + 'px'} / 2));
  border: 5px solid ${({ themeColors }) => themeColors.primaryColor};
  img {
    width: 100%;
    height: 100%;
  }
  @media ${sizeMedia('xs_sm')} {
    position: relative;
    margin-top: 0;
  }
`
