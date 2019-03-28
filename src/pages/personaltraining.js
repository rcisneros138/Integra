import React, { useState, useRef } from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'
import { useSpring } from 'react-spring'
import { usePrevious, useVisibility } from '../helpers'
import { useInView } from 'react-intersection-observer'

import Layout from '../components/layout'
import Panel from '../components/panel'
import Card from '../components/card'

import Ribbon from '../components/svg/ribbon'

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
    display: inline-block;
    width: 70vw;
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
const Logos = styled.div`
  display: grid;
  grid-gap: 0 2.25em;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
  height: 70vh;

  .rib {
    grid-area: 2/5/8/9;
  }
`

const LineBreak = styled.hr`
  grid-area: ${props => props.area};
  display: block;
  height: 0.1em;
  border: 0;
  margin: 1em 0;
  padding: 0;
  color: #0071fe;
  background-color: #0071fe;
`

const Team = styled.div``

const PhysicalTherapy = props => {
  // const [items, set] = useState(cards)
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
  })
  // const isVisible = useVisibility(cardRef.current)
  // const transitions = useTransition(items, item => item.key, {
  //   from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
  //   enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
  //   leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  // })
  const springStyle = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
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
          you’re doing things the right way. No matter what brings you to
          Integra, our team of health professions is ready to help you reach
          personal training goals. <br />
          Nothing in life happens “just because.” Our integrated approach helps
          us take the guesswork out of your physical health, and what’s going on
          with your body. As a personal training client, you receive a
          complimentary orthopedic assessment from one of our staff doctors of
          physical therapy (DPT). This assessment helps you see the links
          between old injuries, imprecise movements, lack of physical activity,
          muscle atrophy, physical limitations, and pain.
          <br /> From there, we identify areas of strength and weakness, ways
          that your body is compensating, and any asymmetry that’s holding you
          back. We use this base of knowledge to inform an exercise program that
          flows safely around you and your goals.
        </p>
      </About>
      <Info>
        <Panel name="We Prepare Your Body For Movement">
          <div className="collapseText">
            <p>
              We use a unique evaluation approach to begin you training
              experience. Here’s how the steps break down: Our doctors of
              physical therapy (DPTs) are specialists in orthopedics, and
              conduct your initial training evaluation. This helps us ensure
              that your exercise experience is safe and specifically tailored to
              help address what your body needs. Whether you’re an elite
              athlete, or someone brand new to exercise, expect our DPTs to take
              you through a joint and strength assessment from head to toe, and
              point out any issues along the way.  Following your evaluation,
              our DPTs communicate the information they gather back to your
              trainer. This core group of professionals will continue to support
              you while you work with Integra. If there’s an exercise that might
              help with anything we find during your evaluation, your evaluating
              therapist will offer home exercises to help kick start your
              training experience.  
            </p>
          </div>
        </Panel>
        <Panel name="We Prepare Your Body For Movement">
          <div className="collapseText">
            <p>
              We use a unique evaluation approach to begin you training
              experience. Here’s how the steps break down: Our doctors of
              physical therapy (DPTs) are specialists in orthopedics, and
              conduct your initial training evaluation. This helps us ensure
              that your exercise experience is safe and specifically tailored to
              help address what your body needs. Whether you’re an elite
              athlete, or someone brand new to exercise, expect our DPTs to take
              you through a joint and strength assessment from head to toe, and
              point out any issues along the way.  Following your evaluation,
              our DPTs communicate the information they gather back to your
              trainer. This core group of professionals will continue to support
              you while you work with Integra. If there’s an exercise that might
              help with anything we find during your evaluation, your evaluating
              therapist will offer home exercises to help kick start your
              training experience.  
            </p>
          </div>
        </Panel>
        <Panel name="We Prepare Your Body For Movement">
          <div className="collapseText">
            <p>
              We use a unique evaluation approach to begin you training
              experience. Here’s how the steps break down: Our doctors of
              physical therapy (DPTs) are specialists in orthopedics, and
              conduct your initial training evaluation. This helps us ensure
              that your exercise experience is safe and specifically tailored to
              help address what your body needs. Whether you’re an elite
              athlete, or someone brand new to exercise, expect our DPTs to take
              you through a joint and strength assessment from head to toe, and
              point out any issues along the way.  Following your evaluation,
              our DPTs communicate the information they gather back to your
              trainer. This core group of professionals will continue to support
              you while you work with Integra. If there’s an exercise that might
              help with anything we find during your evaluation, your evaluating
              therapist will offer home exercises to help kick start your
              training experience.  
            </p>
          </div>
        </Panel>
      </Info>
      <Logos>
        <LineBreak area="4/2/5/5" />
        <Ribbon className="rib" width="100%" height="100%" />
        <LineBreak area="4/9/8/12" />
      </Logos>
      <div>
        <Card>TEST TEST TEST</Card>
        <Card>TEST TEST TEST</Card>
        <Card>TEST TEST TEST</Card>
        <Card>TEST TEST TEST</Card>
        <Card>TEST TEST TEST</Card>
      </div>
    </Layout>
  )
}

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
