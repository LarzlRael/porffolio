import { FaPlus } from 'react-icons/fa'
import ToolTip from '../boxex/ToolTip'
import styled from 'styled-components'

interface FloatingActionButtonProps {
  onClick?: () => void
  tooltipTitle: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  background?: string
}

const ButtonStyled = styled.button<FloatingActionButtonProps>`
  position: fixed;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ background }) =>
    background || 'var(--secondary-color)'};
  bottom: 1rem;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  box-shadow: -0px 2px 17px -5px rgba(0, 0, 0, 0.9);
  &:hover {
    background-color: var(--secondary-color-hover);
  }
`
export const FloatingActionButton = (props: FloatingActionButtonProps) => {
  return (
    <ToolTip content={props.tooltipTitle}>
      <ButtonStyled
        onClick={props.onClick}
        className="FloatingActionButton"
        {...props}
      >
        <FaPlus size={25} color="white" />
      </ButtonStyled>
    </ToolTip>
  )
}
