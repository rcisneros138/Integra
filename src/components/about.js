import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import TextComponent from './textComponent/textComponent'
import { hidden } from 'ansi-colors'

const AboutSection = styled.div`
  grid-area: about;
  width: 100vw;
  display: grid;
  grid-gap: 0 2.25em;
  grid-template-columns: repeat(11, 1fr);
  margin: 0 auto;
  height: inherit;
`
const DareBackgroundImgWrapper = styled.div`
  width: 100vw;
  height: 150vh;
  position: absolute;
  overflow: hidden;
`
const DareTitle = styled.div`
  grid-column-start: 2;
  grid-column-end: 12;
`

const About = props => (
  <StaticQuery
    query={graphql`
      query aboutImages {
        dare: file(relativePath: { eq: "dare.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mission: file(relativePath: { eq: "mission.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <AboutSection>
        <DareBackgroundImgWrapper>
          <Img fluid={data.dare.childImageSharp.fluid} style={{ zIndex: -1 }} />
          <Img
            fluid={data.mission.childImageSharp.fluid}
            style={{ zIndex: -1 }}
          />
        </DareBackgroundImgWrapper>
        <DareTitle>
          <TextComponent>
            <h1>We Dare To Be</h1>
            <h1>Different</h1>
          </TextComponent>
        </DareTitle>
      </AboutSection>
    )}
  />
)
export default About
