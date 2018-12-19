import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import TextComponent from '../components/textComponent/textComponent'
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
    font-size: 9vmin;
    color: #f9f9f9;
    margin: 0;
  }
  h1 {
    font-weight: 400;
    font-size: 13vmin;
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
const HeroTextWrapper = styled.div`
  text-align: center;
`

const Hero = props => (
  <StaticQuery
    query={graphql`
      query SiteMeta {
        background: file(relativePath: { eq: "Hero.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <HeroSection isMobile={props.isMobile}>
          <Img
            fluid={data.background.childImageSharp.fluid}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100vmin',
              zIndex: -1,
            }}
          />
          <HeroTextWrapper>
            <TextComponent>
              <h2>We Are</h2>
              <h1>Integra</h1>
            </TextComponent>
          </HeroTextWrapper>
          {/* {props.isMobile ? <MobileArrow /> : <LearnMore />} */}
        </HeroSection>
      </>
    )}
  />
)
export default Hero
