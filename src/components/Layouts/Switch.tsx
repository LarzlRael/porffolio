import styled from 'styled-components'
import { ThemeColors } from '../../context/themeColors'
import { sizeMedia } from '../../styles/mediaQuery'

interface SwitchProps {
  isActive: boolean
  handleToggle: () => void
  rightIcon: React.ReactNode
  leftIcon: React.ReactNode
  themeColors: ThemeColors
}
export const Switch = ({
  isActive,
  handleToggle,
  leftIcon,
  rightIcon,
  themeColors,
}: SwitchProps) => {
  return (
    <ContainerSwitch>
      <StyledSwith
        className={isActive ? 'active' : ''}
        onClick={handleToggle}
        themeColors={themeColors}
      >
        <span>{leftIcon}</span>
        <span>{rightIcon}</span>
      </StyledSwith>
    </ContainerSwitch>
  )
}

const ContainerSwitch = styled.div`
  position: absolute;
  right: 0;
`

const StyledSwith = styled.div<{
  themeColors: ThemeColors
}>`
  bottom: 0;
  right: 0;

  background: #343d58;
  border-radius: 100px;
  border: none;
  position: relative;
  cursor: pointer;
  display: flex;
  outline: none;

  &::after {
    content: '';
    display: block;
    width: 30px;
    height: 30px;
    position: absolute;
    background: ${({ themeColors }) => themeColors.primaryColor};
    top: 0;
    left: 0;
    right: unset;
    border-radius: 100px;
    transition: 0.3s ease all;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  }
  &.active {
    background: #fff;
    color: #000;
    &::after {
      right: 0;
      left: unset;
    }
  }
  span {
    width: 30px;
    height: 30px;
    line-height: 30px;
    display: block;
    background: none;
    color: #fff;
  }
  @media ${sizeMedia('sm')} {
    margin: 2rem 2rem;
  }
`
