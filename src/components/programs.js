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
const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  p {
    z-index: 99;
    font-weight: 100;
    font-family: roboto;
    color: #f9f9f9;
    display: flex;
    text-align: center;
    line-height: 2em;
    margin: 3vmin;
  }
  h2 {
    font-size: 3vmin;
    z-index: 99;
    font-weight: bold;
    color: #f9f9f9;
    display: flex;
    text-align: center;
  }
`
const FirstImgWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 5;
  position: relative;
`
const SecondImgWrapper = styled.div`
  grid-column-start: 5;
  grid-column-end: 8;
  position: relative;
`
const ThirdImgWrapper = styled.div`
  grid-column-start: 8;
  grid-column-end: 11;
  position: relative;
`
const programStyle = {
  gridColumnStart: '2',
  gridColumnEnd: '11',
  textAlign: 'center',
  fontWeight: '900',
  color: '#F9F9F9',
  fontSize: '3vmin',
}
const pStyle = {
  fontSize: '1.5vmin',
  fontWeight: '100',
  lineHeight: '2em',
  color: '#F9F9F9',
  fontFamily: 'Roboto',
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
          <SummaryWrapper>
            <h2>Personal Training</h2>
            <p>
              Our personal trainers are experts, and have been doing this a long
              time. We each carry a minimum four-year degree, along with
              national certifications. Our personal trainers are experts, and
              have been doing this a long time. We each carry a minimum
              four-year degree, along with national certifications.
            </p>
          </SummaryWrapper>
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
