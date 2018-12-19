import React from 'react'
import styled from 'styled-components'
import TextComponent from '../components/textComponent/textComponent'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ProgramSection = styled.div`
  width: 100vw;
  grid-area: programs;
  background-color: #f9f9f9;
  display: grid;
  grid-gap: 0 2.25em;
  grid-template-columns: repeat(12, 1fr);
  margin: 0 auto;
  height: inherit;
`
const ImgWrapper = styled.div`
  width: 100vw;
  height: 100vmin;
  position: absolute;
`
const programStyle = {
  gridColumnStart: '3',
  gridColumnEnd: '11',
  textAlign: 'center',
  fontWeight: '900',
  color: '#535353',
  fontSize: '3vmin',
}
const pStyle = {
  fontSize: '1.5vmin',
}

const Programs = props => (
  <StaticQuery
    query={graphql`
      query programImages {
        background: file(relativePath: { eq: "programBackground.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        personalTraining: file(relativePath: { eq: "personaltraining.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <ProgramSection>
        <ImgWrapper>
          <Img
            fluid={data.background.childImageSharp.fluid}
            style={{
              zIndex: -1,
              position: 'none',
              height: '100vmin',
            }}
          />
        </ImgWrapper>
        <TextComponent style={programStyle}>
          <h1>Our Integrated Approach</h1>
          <p style={pStyle}>
            Our integrated, evidenced-based care model has guided us since 2004.
            We bring multiple professionals to your aid, and provide a blend of
            therapeutic massage, physical therapy, and personal training to
            facilitate your recovery and wellness goals. This model and approach
            helped us earn the Wisconsin Physical Therapy Association (WPTA)
            2016 Private Practice of the Year.
          </p>
        </TextComponent>
      </ProgramSection>
    )}
  />
)

export default Programs
