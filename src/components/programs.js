import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { Element } from 'react-scroll'

import Concat from './concat'
import TextComponent from './textComponent/textComponent'
import AnimatedComponent from './textComponent/animate'

import LearnMore from './buttons/learnButton'

const ProgramSection = styled(Element)`
  width: 100vw;
  grid-area: programs;
  background-color: #f9f9f9;
  display: grid;
  grid-gap: 0 2.25em;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(8, 1fr);
  margin: 0 auto;
  height: ${props => (props.isMobile ? 'auto' : '150vmin')};
`

const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  font-size: 24px;
  p {
    font-size: ${props => (props.isMobile ? '1em' : '1vw')};
    z-index: 2;
    font-weight: 100;
    font-family: roboto;
    color: #f9f9f9;
    text-align: center;
    line-height: 2em;
    margin: 2vw;
  }
  .learn {
    z-index: 2;
  }
  .pageLink {
    text-decoration: underline;
  }
  h2 {
    font-size: ${props => (props.isMobile ? '2em' : '3vmin')};
    z-index: 99;
    font-weight: bold;
    color: #f9f9f9;
    text-align: center;
  }
`

const FirstImgWrapper = styled.div`
  grid-column-start: ${props => (props.isMobile ? 1 : 2)};
  grid-column-end: ${props => (props.isMobile ? 12 : 5)};
  grid-row: ${props => (props.isMobile ? '3/5' : '2/8')};
  position: relative;
  overflow: hidden;
`
const SecondImgWrapper = styled.div`
  grid-column-start: ${props => (props.isMobile ? 1 : 5)};
  grid-column-end: ${props => (props.isMobile ? 12 : 8)};
  grid-row: ${props => (props.isMobile ? '5/7' : '2/8')};
  position: relative;
  overflow: hidden;
`
const ThirdImgWrapper = styled.div`
  grid-column-start: ${props => (props.isMobile ? 1 : 8)};
  grid-column-end: ${props => (props.isMobile ? 12 : 11)};
  grid-row: ${props => (props.isMobile ? '7/9' : '2/8')};
  position: relative;
  overflow: hidden;
`
const ProgramTitle = styled.h1`
  padding: 5vmin;
`

const programStyle = {
  gridColumn: '2/11',
  gridRow: '1/2',
  textAlign: 'center',
  fontWeight: '900',
  color: '#F9F9F9',
  fontSize: '24px',
  padding: '5vmin',
  height: '50vh',
}
const pStyle = {
  fontSize: '1em',
  fontWeight: '100',
  lineHeight: '2em',
  color: '#F9F9F9',
  fontFamily: 'Roboto',
  paddingBottom: '5vmin',
}
const pStyleMobile = {
  fontSize: '3.5vw',
  fontWeight: '100',
  lineHeight: '2em',
  color: '#F9F9F9',
  fontFamily: 'Roboto',
  paddingBottom: '5vmin',
}

const TopBackgroundImage = styled(Img)`
  grid-row: ${props => (props.isMobile ? '1/3' : '1/9')};
  grid-column: 1/12;
  z-index: 0;
`

const Programs = props => (
  <StaticQuery
    query={graphql`
      query programImages {
        background: file(relativePath: { eq: "programBackground.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        personalTraining: file(relativePath: { eq: "train.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 1000
              maxHeight: 2000
              quality: 100
              duotone: { highlight: "#0071FE", shadow: "#0071FE", opacity: 40 }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        personalTrainingMobile: file(relativePath: { eq: "train.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 1200
              maxHeight: 3000
              quality: 50
              cropFocus: CENTER
              duotone: { highlight: "#0071FE", shadow: "#0071FE", opacity: 40 }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        physicalTherapy: file(relativePath: { eq: "PTCover.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 1000
              maxHeight: 2000
              quality: 100
              cropFocus: CENTER
              duotone: { highlight: "#0071FE", shadow: "#0071FE", opacity: 40 }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        physicalTherapyMobile: file(relativePath: { eq: "PTCover.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 1200
              maxHeight: 3000
              quality: 50
              cropFocus: CENTER
              duotone: { highlight: "#0071FE", shadow: "#0071FE", opacity: 40 }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        massage: file(relativePath: { eq: "massage2.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 1000
              maxHeight: 2000
              quality: 100
              cropFocus: CENTER
              duotone: { highlight: "#0071FE", shadow: "#0071FE", opacity: 40 }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        massageMobile: file(relativePath: { eq: "massage2.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 1200
              maxHeight: 3000
              quality: 50
              cropFocus: CENTER
              duotone: { highlight: "#0071FE", shadow: "#0071FE", opacity: 40 }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <ProgramSection isMobile={props.isMobile} name="Programs">
          <TopBackgroundImage
            isMobile={props.isMobile}
            fluid={data.background.childImageSharp.fluid}
          />
          <TextComponent style={programStyle}>
            <ProgramTitle>Our Integrated Approach</ProgramTitle>
            <p style={props.isMobile ? pStyleMobile : pStyle}>
              Our integrated, evidenced-based care model has guided us since
              2004. We bring multiple professionals to your aid, and provide a
              blend of therapeutic massage, physical therapy, and personal
              training to facilitate your recovery and wellness goals. This
              model and approach helped us earn the Wisconsin Physical Therapy
              Association (WPTA) 2016 Private Practice of the Year.
            </p>
          </TextComponent>
          <FirstImgWrapper isMobile={props.isMobile}>
            <AnimatedComponent
              isMobile={props.isMobile}
              animationType="fade-up"
              style={{ height: '100%' }}
            >
              <SummaryWrapper isMobile={props.isMobile}>
                <h2>Personal Training</h2>
                <p>
                  <Concat>
                    Our personal trainers are experts, and have been doing this
                    a long time. We each carry a minimum four-year degree, along
                    with national certifications. Our personal trainers are
                    experts, and have been doing this a long time. We each carry
                    a minimum four-year degree, along with national
                    certifications.
                  </Concat>
                </p>
                <Link class="learn" to="personaltraining">
                  <LearnMore />
                </Link>
              </SummaryWrapper>
              <Img
                fluid={
                  props.isMobile
                    ? data.personalTrainingMobile.childImageSharp.fluid
                    : data.personalTraining.childImageSharp.fluid
                }
                style={{ height: '100%' }}
              />
            </AnimatedComponent>
          </FirstImgWrapper>
          <SecondImgWrapper isMobile={props.isMobile}>
            <AnimatedComponent
              isMobile={props.isMobile}
              animationType="fade-up"
              style={{ height: '100%' }}
            >
              <SummaryWrapper isMobile={props.isMobile}>
                <h2>Physical Therapy</h2>
                <p>
                  <Concat>
                    Our physical therapy team uses current scientific research,
                    and applies clinical and technical expertise, toward helping
                    you achieve your physical therapy and rehabilitation goals
                    safely and efficiently.
                  </Concat>
                </p>
                <Link class="learn" to="physicaltherapy">
                  <LearnMore />
                </Link>
              </SummaryWrapper>
              <Img
                fluid={
                  props.isMobile
                    ? data.physicalTherapyMobile.childImageSharp.fluid
                    : data.physicalTherapy.childImageSharp.fluid
                }
                style={{ height: '100%' }}
              />
            </AnimatedComponent>
          </SecondImgWrapper>
          <ThirdImgWrapper isMobile={props.isMobile}>
            <AnimatedComponent
              isMobile={props.isMobile}
              animationType="fade-up"
              style={{ height: '100%' }}
            >
              <SummaryWrapper isMobile={props.isMobile}>
                <h2>Massage</h2>
                <p>
                  Our physical therapy team uses current scientific research,
                  and applies clinical and technical expertise, toward helping
                  you achieve your physical therapy and rehabilitation goals
                  safely and efficiently.{' '}
                </p>
                <Link class="learn" to="massage">
                  <LearnMore />
                </Link>
              </SummaryWrapper>
              <Img
                fluid={
                  props.isMobile
                    ? data.massageMobile.childImageSharp.fluid
                    : data.massage.childImageSharp.fluid
                }
                style={{ height: '100%' }}
              />
            </AnimatedComponent>
          </ThirdImgWrapper>
        </ProgramSection>
      </>
    )}
  />
)

export default Programs
