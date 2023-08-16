import React from 'react'
import styled from 'styled-components'

const RelativeContainerDiv = styled.div`
  position: relative;
`
interface Props {
  children: React.ReactNode
}
export const RelativeContainer = ({ children }: Props) => {
  return <RelativeContainerDiv>{children}</RelativeContainerDiv>
}
