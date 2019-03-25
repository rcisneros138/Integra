import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

import Layout from '../components/layout'
import Panel from '../components/panel'

const Hero = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 100;

    font-size: 9vmin;
    color: #f9f9f9;
    margin: 0;
    letter-spacing: 0.02em;
    line-height: 1.5em;
    font-weight: 300;
  }
  .heroText {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    height: 100vmin;
  }
`
const About = styled.div`
  height: auto;
  display: grid;
  grid-gap: 0 2.25em;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
  .backgroundTrain {
    grid-area: 1/1/9/13;
  }
  h1 {
    grid-area: 2/3/4/11;
    text-align: center;
    font-weight: 300;
    letter-spacing: 0.05em;
    font-size: 5em;
    color: #f9f9f9;
  }
  p {
    grid-area: 4/2/8/12;
    font-weight: 100;
    font-family: roboto;
    color: #f9f9f9;
    /* text-align: center; */
    line-height: 2em;
    margin: 2vw;
    font-size: 1.5em;
  }
`
const Info = styled.div`
  margin: 5em;
  .collapseText {
    margin: 5em;
  }
  p {
    font-family: Roboto;
    font-size: 1em;
    font-weight: 400;
    color: #6a757c;
    margin: auto;
    line-height: 1.5em;
    text-align: left;
    font-weight: 100;
  }
`

const PhysicalTherapy = props => (
  <Layout>
    <Hero>
      <Img
        fluid={props.data.heroImage.childImageSharp.fluid}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '70vh',
          zIndex: -1,
        }}
      />
      <div className="heroText">
        <Fade bottom>
          <h1>Personal</h1>
          <h1>Training</h1>
        </Fade>
      </div>
    </Hero>
    <About>
      <Img
        className="backgroundTrain"
        fluid={props.data.trainAboutImage.childImageSharp.fluid}
        style={{
          width: '100%',
          height: 'auto',
          zIndex: -1,
        }}
      />
      <h1>Dont Just "Live With It"</h1>
      <p>
        Maybe you’ve been working out for a while, and want to reach the next
        level. Or you’re wrapping up physical therapy, and want to hone your
        technique as you get back in the game. It might be that you’ve
        exercising for the first time in a long time, and want to make sure
        you’re doing things the right way. No matter what brings you to Integra,
        our team of health professions is ready to help you reach personal
        training goals. <br />
        Nothing in life happens “just because.” Our integrated approach helps us
        take the guesswork out of your physical health, and what’s going on with
        your body. As a personal training client, you receive a complimentary
        orthopedic assessment from one of our staff doctors of physical therapy
        (DPT). This assessment helps you see the links between old injuries,
        imprecise movements, lack of physical activity, muscle atrophy, physical
        limitations, and pain.
        <br /> From there, we identify areas of strength and weakness, ways that
        your body is compensating, and any asymmetry that’s holding you back. We
        use this base of knowledge to inform an exercise program that flows
        safely around you and your goals.
      </p>
    </About>
    <Info>
      <Panel name="TEST TEST TEST">
        <div className="collapseText">
          <p>
            Maybe you’ve been working out for a while, and want to reach the
            next level. Or you’re wrapping up physical therapy, and want to hone
            your technique as you get back in the game. It might be that you’ve
            exercising for the first time in a long time, and want to make sure
            you’re doing things the right way. No matter what brings you to
            Integra, our team of health professions is ready to help you reach
            personal training goals. <br />
            Nothing in life happens “just because.” Our integrated approach
            helps us take the guesswork out of your physical health, and what’s
            going on with your body. As a personal training client, you receive
            a complimentary orthopedic assessment from one of our staff doctors
            of physical therapy (DPT). This assessment helps you see the links
            between old injuries, imprecise movements, lack of physical
            activity, muscle atrophy, physical limitations, and pain.
            <br /> From there, we identify areas of strength and weakness, ways
            that your body is compensating, and any asymmetry that’s holding you
            back. We use this base of knowledge to inform an exercise program
            that flows safely around you and your goals.
          </p>
        </div>
      </Panel>
    </Info>
  </Layout>
)

export default PhysicalTherapy

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1200, maxHeight: 800, quality: 90, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const pageQuery = graphql`
  query {
    heroImage: file(relativePath: { eq: "personaltraining.jpg" }) {
      ...fluidImage
    }
    trainAboutImage: file(relativePath: { eq: "train_about.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1200
          maxHeight: 800
          quality: 90
          cropFocus: CENTER
          duotone: { highlight: "#0071FE", shadow: "#0071FE", opacity: 70 }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
