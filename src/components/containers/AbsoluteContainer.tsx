import React from 'react'
import styled from 'styled-components'

const RelativeContainerDiv = styled.div<Props>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
`
interface Props {
  children: React.ReactNode
  top?: string
  left?: string
  right?: string
  bottom?: string
}
export const AbsoluteContainer = (props: Props) => {
  return (
    <RelativeContainerDiv {...props}>{props.children}</RelativeContainerDiv>
  )
}
