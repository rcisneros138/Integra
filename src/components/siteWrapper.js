import React from 'react'
import styled from 'styled-components'

const GridLayout = styled.div`
  /* padding-top: 10vmin; */
  display: grid;
  grid-template-areas:
    'hero'
    'programs'
    'team'
    'about'
    'footer';

  grid-template-rows: 100vmin 100vmin 70vmin 70vmin 20vmin;
  grid-template-columns: 1fr;
`
export default GridLayout
