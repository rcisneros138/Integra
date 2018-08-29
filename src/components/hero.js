import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import LearnMore from '../components/buttons/learnButton'
import MobileArrow from '../components/svg/arrow'

const HeroSection = styled.div`
  /* display: grid; */
  grid-area: hero;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: 100;
    font-size: ${props => (props.isMobile ? `20px` : `80px`)};
    color: #f9f9f9;
    margin: 0;
    margin-top: ${props => props.isMobile && `5em`};
  }
  h1 {
    font-weight: 400;
    font-size: ${props => (props.isMobile ? `40px` : `110px`)};
    color: #f9f9f9;
    margin: 0;
  }
  button {
    margin-top: 15em;
  }
  svg {
    flex-grow: 1;
    margin-top: 5em;
  }
`

const Hero = props => (
  <StaticQuery
    query={graphql`
      query SiteMeta {
        background: imageSharp(
          fluid: { originalName: { regex: "/PLEASEWORK.jpg/" } }
        ) {
          sizes(maxWidth: 3840, quality: 100) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    `}
    render={data => (
      <>
        <HeroSection isMobile={props.isMobile}>
          <Img
            sizes={data.background.sizes}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100vmin',
              zIndex: -1,
            }}
          />
          <h2>We Are</h2>
          <h1>Integra</h1>
          {props.isMobile ? <MobileArrow /> : <LearnMore />}
        </HeroSection>
      </>
    )}
  />
)
export default Hero
