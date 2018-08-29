import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import LearnMore from '../components/buttons/learnButton'

const HeroSection = styled.div`
  /* display: grid; */
  grid-area: hero;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: 100;
    font-size: 80px;
    color: #f9f9f9;
    margin: 0;
  }
  h1 {
    font-weight: 400;
    font-size: 110px;
    color: #f9f9f9;
    margin: 0;
  }
  button {
    margin-top: 15em;
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
          <LearnMore />
        </HeroSection>
      </>
    )}
  />
)
export default Hero
