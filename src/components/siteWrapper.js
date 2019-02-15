import React from 'react'
import styled from 'styled-components'

const GridLayout = styled.div`
  /* padding-top: 10vmin; */
  display: grid;
  grid-template-areas:
    'hero'
    'programs'
    'dare'
    'about'
    'testemonials'
    'integraInfo'
    'footer';

  /* grid-template-rows: 100vmin 100vmin 70vmin 70vmin 20vmin; */
  grid-template-rows: ${props =>
    props.isMobile
      ? `100vmin auto 30vmin 70vmin 100vmin 100vmin 20vmin`
      : `100vmin 150vmin 50vmin 100vmin 200vmin 150vmin 20vmin;`};
  grid-template-columns: 1fr;
`
export default GridLayout
