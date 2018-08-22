import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const HeroSection = styled.div`
  /* display: grid; */
  grid-area: hero;
  background-color: red;
  padding-top: 10vmin;
`
const Hero = props => (
  <HeroSection>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </HeroSection>
)

export default Hero
