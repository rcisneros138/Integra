import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const AboutSection = styled.div`
  grid-area: about;
`
const DareBackgroundImgWrapper = styled.div`
  width: 100vw;
  height: 100vmin;
  position: absolute;
  overflow: hidden;
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
      </AboutSection>
    )}
  />
)
export default About
