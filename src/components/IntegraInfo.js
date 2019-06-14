import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Bounce from 'react-reveal/Bounce'

import APTA from './svg/APTA'
import Award from './svg/award'

const LineBreak = styled.hr`
  grid-column: 2/11;
  grid-row: 1/2;
  display: block;
  height: 2px;
  border: 0;
  margin: 1em 0;
  padding: 0;
  color: #0071fe;
  background-color: #0071fe;
`
const APTALogoWrapper = styled.div`
  grid-column: ${props => (props.isMobile ? '2/11' : '2/6')};
  grid-row: ${props => (props.isMobile ? '2/3' : '4/6')};
  padding-top: ${props => !props.isMobile && '10em'};
  @media screen and (orientation: landscape) {
    grid-column: 2/6;
    grid-row: 2/3;
  }
`
const AwardSealWrapper = styled.div`
  grid-column: ${props => (props.isMobile ? '3/10' : '7/11')};
  grid-row: ${props => (props.isMobile ? '3/5' : '4/6')};

  @media screen and (orientation: landscape) {
    grid-column: 7/11;
    grid-row: 2/5;
  }
`

// const AcceptTitle = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 2;
//   grid-column: 3/10;
//   grid-row: ${props => (props.isMobile ? '5/6' : '5/7')};
//   font-size: 5vmin;
//   line-height: 0;
//   text-align: center;
//   color: #f9f9f9;
//   font-weight: 400;
//   letter-spacing: 0.05em;
// `

const InfoWrapper = styled.div`
  width: 100vw;
  background-color: #f9f9f9;
  display: grid;
  grid-gap: 0 2.25em;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(11, 1fr);
  margin: 0 auto;
  height: auto;
  /* overflow-x: hidden; */
`

const IntegraInfo = props => (
  <StaticQuery
    query={graphql`
      query infoImages {
        accept: file(relativePath: { eq: "WeAccept.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <InfoWrapper isMobile={props.isMobile}>
        <LineBreak />
        <APTALogoWrapper isMobile={props.isMobile}>
          <Bounce left>
            <APTA
              width="100%"
              height="100%"
              viewBox={props.isMobile ? '0 0 580 300' : '0 0 600 200'}
            />
          </Bounce>
        </APTALogoWrapper>
        <AwardSealWrapper isMobile={props.isMobile}>
          <Bounce right>
            <Award width="100%" height="100%" viewBox={'0 0 350 340'} />
          </Bounce>
        </AwardSealWrapper>
        {/* <AcceptImage
          isMobile={props.isMobile}
          fluid={data.accept.childImageSharp.fluid}
        />
        <AcceptTitle isMobile={props.isMobile}>
          <h1> We Accept</h1>
        </AcceptTitle>
        <UnitedLogo isMobile={props.isMobile}>
          <United width="100%" height="100%" viewBox="0 0 600 110" />
        </UnitedLogo>
        <HumanaLogo isMobile={props.isMobile}>
          <Humana width="100%" height="100%" viewBox="-30 0 600 110" />
        </HumanaLogo>
        <MolinaLogo isMobile={props.isMobile}>
          <Molina width="100%" height="100%" viewBox="-30 5 600 110" />
        </MolinaLogo>
        <MedicareLogo isMobile={props.isMobile}>
          <Medicare width="100%" height="100%" viewBox="0 0 600 110" />
        </MedicareLogo> */}
      </InfoWrapper>
    )}
  />
)

export default IntegraInfo
