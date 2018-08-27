import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const HeroSection = styled.div`
  /* display: grid; */
  grid-area: hero;
  background-color: red;
  padding-top: 10vmin;
`
const Hero = props => (
  <HeroSection />
  //   <StaticQuery
  //     query={graphql`
  //       query SiteMeta {
  //         background: imageSharp(id: { regex: "/heroImage.png/" }) {
  //           sizes(maxWidth: 1240) {
  //             ...GatsbyImageSharpSizes
  //           }
  //         }
  //       }
  //     `}
  //     render={data => <HeroSection> <Img /> </HeroSection>}
  //   />
)
export default Hero
