import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import APTA from './svg/APTA'
import Award from './svg/award'
import United from './svg/united'
import Humana from './svg/humana'
import Molina from './svg/molina'
import Medicare from './svg/medicare'

const LineBreak = styled.hr`
  grid-column: 3/11;
  display: block;
  height: 2px;
  border: 0;
  margin: 1em 0;
  padding: 0;
  color: #0071fe;
  background-color: #0071fe;
`

const APTALogo = styled(APTA)`
  grid-column: 3/5;
  grid-row: 2/4;
  padding-top: 5em;
`

const AwardSeal = styled(Award)`
  grid-column: 8/10;
  grid-row: 2/4;
`

const AcceptImage = styled(Img)`
  z-index: 1;
  grid-column: 1/12;
  grid-row: 4/6;
`
const UnitedLogo = styled(United)`
  grid-column: 2/6;
  grid-row: 7/8;
`
const HumanaLogo = styled(Humana)`
  grid-column: 8/10;
  grid-row: 7/8;
`
const MolinaLogo = styled(Molina)`
  grid-column: 3/7;
  grid-row: 8/9;
`
const MedicareLogo = styled(Medicare)`
  grid-column: 7/10;
  grid-row: 8/9;
`

const AcceptTitle = styled.div`
  display: flex;
  align-items: center;
  z-index: 2;
  grid-column: 4/10;
  grid-row: 4/6;
  font-size: 5vmin;
  line-height: 0;
  text-align: center;
  color: #f9f9f9;
  font-weight: 400;
  letter-spacing: 0.05em;
`

const InfoWrapper = styled.div`
  grid-area: integraInfo;
  width: 100vw;
  background-color: #f9f9f9;
  display: grid;
  grid-gap: 0 2.25em;
  grid-template-rows: repeat(9, 1fr);
  grid-template-columns: repeat(11, 1fr);
  margin: 0 auto;
  height: inherit;
  overflow-x: hidden;
`

const IntegraInfo = props => (
  <StaticQuery
    query={graphql`
      query infoImages {
        accept: file(relativePath: { eq: "WeAccept.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <InfoWrapper>
        <LineBreak />
        <APTALogo />
        <AwardSeal />
        <AcceptImage fluid={data.accept.childImageSharp.fluid} />
        <AcceptTitle>
          <h1> We Accept</h1>
        </AcceptTitle>
        <UnitedLogo />
        <HumanaLogo />
        <MolinaLogo />
        <MedicareLogo />
      </InfoWrapper>
    )}
  />
)

export default IntegraInfo
