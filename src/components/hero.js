import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const HeroSection = styled.div`
  /* display: grid; */
  grid-area: hero;
  background-color: red;
  padding-top: 10vmin;
`
const Hero = props => <HeroSection />

export default Hero
