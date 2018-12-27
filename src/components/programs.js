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
  grid-template-columns: repeat(11, 1fr);
  margin: 0 auto;
  height: inherit;
`
const BackgroundImgWrapper = styled.div`
  width: 100vw;
  height: 100vmin;
  position: absolute;
`
const FirstImgWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 5;
`
const SecondImgWrapper = styled.div`
  grid-column-start: 5;
  grid-column-end: 8;
`
const ThirdImgWrapper = styled.div`
  grid-column-start: 8;
  grid-column-end: 11;
`
const programStyle = {
  gridColumnStart: '2',
  gridColumnEnd: '11',
  textAlign: 'center',
  fontWeight: '900',
  color: '#535353',
  fontSize: '3vmin',
}
const pStyle = {
  fontSize: '1.5vmin',
  fontWeight: '300',
  lineHeight: '2em',
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
        physicalTherapy: file(relativePath: { eq: "physicaltherapy.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        massage: file(relativePath: { eq: "massage.jpg" }) {
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
        <BackgroundImgWrapper>
          <Img
            fluid={data.background.childImageSharp.fluid}
            style={{
              zIndex: -1,
              position: 'none',
              height: '101vmin',
            }}
          />
        </BackgroundImgWrapper>

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
        <FirstImgWrapper>
          <Img fluid={data.personalTraining.childImageSharp.fluid} />
        </FirstImgWrapper>
        <SecondImgWrapper>
          <Img fluid={data.physicalTherapy.childImageSharp.fluid} />
        </SecondImgWrapper>
        <ThirdImgWrapper>
          <Img fluid={data.massage.childImageSharp.fluid} />
        </ThirdImgWrapper>
      </ProgramSection>
    )}
  />
)

export default Programs
