import styled from 'styled-components'

import { Tec } from '../interfaces/tec.interface'
import ReactTooltip from 'react-tooltip'
import { sizeMedia } from '../styles/mediaQuery'

export const GridItem = ({ imageRoute, name }: Tec) => {
  /* const myLoader = ({ src, width, quality }: any) => {
        return `https://example.com/${src}?w=${width}&q=${quality || 75}`
    } */

  return (
    <GridTec data-tip data-for={name}>
      <img
        loading="lazy"
        src={imageRoute}
        style={{
          width: '100%',
          height: '100%',
        }}
        alt={name}
      />

      {/* <ReactTooltip
                id={name}
                place="top"
                effect="solid">
                {name}
            </ReactTooltip> */}
    </GridTec>
  )
}
const GridTec = styled.div`
  /* width: 120px;*/
  /* border: 1px solid #cacaca; */
  border-radius: 100px;

  @media ${sizeMedia('sm')} {
    width: 100%;
  }
  @media ${sizeMedia('md')} {
    width: 100%;
  }

  &:hover {
    border-radius: 5px;
    border: 0.5px solid #cacaca;
    transition: 0.5s ease all;
    cursor: pointer;
  }
`
