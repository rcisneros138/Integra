import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import TextComponent from './textComponent/textComponent'
import { Element } from 'react-scroll'

const AboutWrapper = styled(Element)`
  display: grid;
  grid-gap: 0 2.25em;
  grid-template-columns: repeat(11, 1fr);
  margin: 0 auto;
  height: 100vmin;
`
const AboutBackground = styled(Img)`
  width: 100vw;
  height: 100vmin;
  position: absolute;
  overflow: hidden;
  z-index: -1;
`
const AboutTitle = styled.div`
  grid-column: 2 /11;
  text-align: center;
  font-weight: 900;
  color: #f9f9f9;
  font-size: 6vmin;
  height: 5vmin;
  margin-top: 2em;
  letter-spacing: 0.05em;
`
const AboutBody = styled.div`
  grid-column-start: 2;
  grid-column-end: 11;
  text-align: left;
  font-family: Roboto;
  line-height: ${props => (props.isMobile ? '4vmin' : '3em')};
  p {
    text-align: left;
    color: #f9f9f9;
    font-size: 2vmin;
    font-weight: 100;
  }
`

const About = props => (
  <StaticQuery
    query={graphql`
      query aboutBackground {
        mission: file(relativePath: { eq: "mission.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <AboutWrapper name="About">
        <AboutBackground
          fluid={data.mission.childImageSharp.fluid}
          style={{ position: 'absolute' }}
        />
        <AboutTitle>
          <TextComponent>Our Mission</TextComponent>
        </AboutTitle>
        <AboutBody isMobile={props.isMobile}>
          <TextComponent>
            <p>
              At Integra, our goal is to provide self-care techniques that fit
              your lifestyle, and help you define and achieve peak performance.
              Our integrated, evidenced-based care model has guided us since
              2004. We bring multiple professionals to your aid, and provide a
              blend of therapeutic massage, physical therapy, and personal
              training to facilitate your recovery and wellness goals. This
              model and approach helped us earn the Wisconsin Physical Therapy
              Association (WPTA) 2016 Private Practice of the Year.
            </p>
            <br />{' '}
            <p>
              Our staff breaks down movements and steps into teachable pieces to
              support your physical health. Working in the heart of Fox Point’s
              business district, we understand the spirit of southeastern
              Wisconsin, and we strive to create a comfortable environment for
              everyone. Take advantage of our flexible physical therapy and
              personal training hours. We’re here when you need us—before
              sunrise, or well after sundown—to accommodate your schedule. You
              can also in on your own time to use our equipment on non-training
              days, or during off-hours. Take the next step Schedule an
              appointment to see our facilities, and talk with one of our
              fitness professionals today
            </p>
          </TextComponent>
        </AboutBody>
      </AboutWrapper>
    )}
  />
)

export default About
