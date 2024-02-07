import styled from 'styled-components'

const RelativeContainerDiv = styled.div<Props>`
  position: relative;
  min-height: ${({ minHeight }) => (minHeight ? minHeight : null)};
  width: ${({ width }) => (width ? width : '100%')};
  background: ${({ background }) => (background ? background : 'none')};
`
interface Props {
  children: React.ReactNode
  minHeight?: string
  width?: string
  background?: string
}
export const RelativeContainer = ({ children, ...props }: Props) => {
  return <RelativeContainerDiv {...props}>{children}</RelativeContainerDiv>
}
