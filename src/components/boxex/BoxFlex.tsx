import styled from 'styled-components'
const BoxFlexStyle = styled.div<BoxFlexI>`
  display: flex;
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  gap: ${(props) => props.gap};
  flex-wrap: ${(props) => props.wrap};
  justify-content: ${(props) => props.justify};
  margin: ${(props) => props.margin};
  flex-direction: ${(props) => props.direction};
  width: 100%;
  @media screen and (max-width: 425px) {
    flex-direction: ${(props) => props.direction};
    gap: 5px;
    align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  }
`
interface BoxFlexI {
  children: React.ReactNode
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
  gap?: string
  direction?: 'column' | 'row'
  wrap?: 'wrap' | 'nowrap'
  className?: string
  margin?: string
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
  width?: string
  style?: React.CSSProperties
}
const BoxFlex = ({ children, ...props }: BoxFlexI) => {
  /* const {
    children,
    className,
    justify = 'center',
    gap = '10px',
    direction = 'column',
    wrap = 'wrap',
    alignItems = 'center',
    margin = '',
    width,
    style,
  } = props */
  return (
    <BoxFlexStyle style={props.style} {...props}>
      {children}
    </BoxFlexStyle>
  )
}

export default BoxFlex
