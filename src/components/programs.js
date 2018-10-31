import React from 'react'
import styled from 'styled-components'

const ProgramSection = styled.div`
  width: 100vw;
  grid-area: programs;
  background-color: #f9f9f9;
  display: grid;
  grid-gap: 0 2.25em;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr 2fr 3fr;
  margin: 0 auto;
  height: inherit;
`
const OfferTitle = styled.div`
  grid-column: 3/6;
  grid-row: 1/2;
  display: flex;
  align-items: center;
  flex-direction: row;
  h1 {
    font-weight: 900;
    color: #535353;
    font-size: 50px;
  }
`

const Programs = props => (
  <ProgramSection>
    <OfferTitle>
      <h1>What We Offer</h1>
    </OfferTitle>
  </ProgramSection>
)

export default Programs
