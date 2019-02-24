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
  grid-column: 2/11;
  display: block;
  height: 2px;
  border: 0;
  margin: 1em 0;
  padding: 0;
  color: #0071fe;
  background-color: #0071fe;
`
const APTALogo = styled(APTA)`
  grid-column: ${props => (props.isMobile ? '2/5' : '3/5')};
  grid-row: 2/4;
  padding-top: ${props => (props.isMobile ? '3em' : '5em')};
`
const AwardSeal = styled(Award)`
  grid-column: 8/10;
  grid-row: 2/4;
`
const AcceptImage = styled(Img)`
  z-index: 1;
  grid-column: 1/12;
  grid-row: 5/7;
`
const UnitedLogo = styled(United)`
  grid-column: 2/6;
  grid-row: 8/9;
`
const HumanaLogo = styled(Humana)`
  grid-column: 8/10;
  grid-row: 8/9;
`
const MolinaLogo = styled(Molina)`
  grid-column: 3/7;
  grid-row: 9/10;
`
const MedicareLogo = styled(Medicare)`
  grid-column: 7/10;
  grid-row: 9/10;
`

const AcceptTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  grid-column: 3/10;
  grid-row: 5/7;
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
      <InfoWrapper isMobile={props.isMobile}>
        <LineBreak />
        <APTALogo
          isMobile={props.isMobile}
          width={props.isMobile ? '300' : '583'}
          height={props.isMobile ? '150' : '183'}
          viewBox={props.isMobile ? '0 0 580 300' : '0 0 600 200'}
        />
        <AwardSeal
          width={props.isMobile ? '200' : '334'}
          height={props.isMobile ? '200' : '334'}
          viewBox={'0 0 350 340'}
        />
        <AcceptImage fluid={data.accept.childImageSharp.fluid} />
        <AcceptTitle>
          <h1> We Accept</h1>
        </AcceptTitle>
        <UnitedLogo
          width={props.isMobile ? '300' : '600'}
          height={props.isMobile ? '80' : '108'}
          viewBox={props.isMobile ? '0 0 600 110' : '-20 0 610 110'}
        />
        <HumanaLogo
          width={props.isMobile ? '300' : '610'}
          height={props.isMobile ? '80' : '120'}
          viewBox={props.isMobile ? '0 0 800 110' : '-50 0 610 110'}
        />
        <MolinaLogo
          width={props.isMobile ? '300' : '577'}
          height={props.isMobile ? '80' : '150'}
          viewBox={props.isMobile ? '0 0 700 110' : '-30 5 600 140'}
        />
        <MedicareLogo
          width={props.isMobile ? '300' : '600'}
          height={props.isMobile ? '90' : '150'}
          viewBox={props.isMobile ? '0 0 700 110' : '0 0 700 110'}
        />
      </InfoWrapper>
    )}
  />
)

export default IntegraInfo
