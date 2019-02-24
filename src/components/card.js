import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  grid-area: ${props => props.area};
  background-color: #ffffff;
  box-shadow: 4px 4px 4px #bdbdbd;
  z-index: 1;
`

const Card = props => (
  <>
    <StyledCard area={props.area} />
  </>
)

export default Card
