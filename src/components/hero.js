import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

import makeCarousel from 'react-reveal/makeCarousel'
import Slide from 'react-reveal/Slide'

const HeroSection = styled.div`
  height: 100vmin;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100vw;
  h2 {
    font-weight: 400;
    font-size: 9vmin;
    color: #f9f9f9;
    margin: 0;
  }
  h1 {
    font-weight: 400;
    font-size: 20vmin;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  position: absolute;

  height: 100vmin;
`
const CarouselUI = ({ children }) => <HeroSection>{children}</HeroSection>
const Carousel = makeCarousel(CarouselUI)

const Hero = props => (
  <StaticQuery
    query={graphql`
      query SiteMeta {
        background: file(relativePath: { eq: "help.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 1000
              maxHeight: 1200
              quality: 90
              duotone: { highlight: "#0071FE", shadow: "#0071FE", opacity: 20 }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        backgroundMobile: file(relativePath: { eq: "help.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 1000
              maxHeight: 1200
              quality: 40
              duotone: { highlight: "#0071FE", shadow: "#0071FE", opacity: 20 }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        side: file(relativePath: { eq: "side.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 1000
              maxHeight: 1200
              quality: 90
              duotone: { highlight: "#0071FE", shadow: "#0071FE", opacity: 20 }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sideMobile: file(relativePath: { eq: "side.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 1000
              maxHeight: 1200
              quality: 40
              duotone: { highlight: "#0071FE", shadow: "#0071FE", opacity: 20 }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        smoothie: file(relativePath: { eq: "smoothie.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 1000
              maxHeight: 1200
              quality: 90
              duotone: { highlight: "#0071FE", shadow: "#0071FE", opacity: 20 }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        smoothieMobile: file(relativePath: { eq: "smoothie.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 1000
              maxHeight: 1200
              quality: 40
              duotone: { highlight: "#0071FE", shadow: "#0071FE", opacity: 20 }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        team: file(relativePath: { eq: "team.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 2000
              quality: 90
              duotone: { highlight: "#0071FE", shadow: "#0071FE", opacity: 20 }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Carousel isMobile={props.isMobile}>
          <Slide right>
            <Img
              fluid={
                props.isMobile
                  ? data.backgroundMobile.childImageSharp.fluid
                  : data.background.childImageSharp.fluid
              }
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100vw',
                height: '100vmin',
                zIndex: -1,
              }}
            />
            <HeroTextWrapper>
              <Fade bottom>
                <h2>We Are</h2>
                <h1>Integra</h1>
              </Fade>
            </HeroTextWrapper>
            {/* {props.isMobile ? <MobileArrow /> : <LearnMore />} */}
          </Slide>
          <Slide right>
            <Img
              fluid={
                props.isMobile
                  ? data.sideMobile.childImageSharp.fluid
                  : data.side.childImageSharp.fluid
              }
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100vw',
                height: '100vmin',
                zIndex: -1,
              }}
            />
            <HeroTextWrapper>
              <Fade bottom>
                <h2>We Are</h2>
                <h1>Integra</h1>
              </Fade>
            </HeroTextWrapper>
            {/* {props.isMobile ? <MobileArrow /> : <LearnMore />} */}
          </Slide>
          <Slide right>
            <Img
              fluid={data.team.childImageSharp.fluid}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100vw',
                height: '100vmin',
                zIndex: -1,
              }}
            />
            {/* <HeroTextWrapper>
              <Fade bottom>
                <h2>We Are</h2>
                <h1>Integra</h1>
              </Fade>
            </HeroTextWrapper> */}
            {/* {props.isMobile ? <MobileArrow /> : <LearnMore />} */}
          </Slide>
          <Slide right>
            <Img
              fluid={data.smoothie.childImageSharp.fluid}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100vw',
                height: '100vmin',
                zIndex: -1,
              }}
            />
            <HeroTextWrapper>
              <Fade bottom>
                <h2>We Are</h2>
                <h1>Integra</h1>
              </Fade>
            </HeroTextWrapper>
            {/* {props.isMobile ? <MobileArrow /> : <LearnMore />} */}
          </Slide>
        </Carousel>
      </>
    )}
  />
)
export default Hero
