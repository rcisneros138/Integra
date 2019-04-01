import React, { useState, useRef, useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

import Layout from '../components/layout'
import Panel from '../components/panel'
import Card from '../components/card'
import Portrait from '../components/memberPortrait'

import Ribbon from '../components/svg/ribbon'
import { useMobile } from '../helpers'

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
    font-size: ${props => (props.isMobile ? '1em' : '5em')};
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
    font-size: ${props => (props.isMobile ? '1em' : '1.5em')};
  }
`
const Info = styled.div`
  margin: ${props => (props.isMobile ? '0' : '5em')};
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

const Team = styled.div`
  height: auto;

  .member {
    display: grid;
    height: 90vh;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(8, 1fr);
    .imagewrap {
      grid-area: 1/6/4/8;
    }
    .cardbio {
      h2 {
        margin-top: 8em;
        grid-column: 3/11;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 2.25em;
        line-height: 0.07em;
        color: #8b8888;
      }
      p {
        grid-column: 2/12;
        font-family: Roboto;
        font-size: 1.5em;
        line-height: 53px;
        text-align: center;
        color: #8b8888;
        font-weight: 100;
      }
    }
  }
`

const PhysicalTherapy = props => {
  const isMobile = useMobile(false)
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
      <About isMobile={isMobile}>
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
      <Info isMobile={isMobile}>
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
      <Team>
        <div className="member">
          <Portrait />
          <Card className="cardbio" area="3/1/9/13">
            <h2>Jane Doe</h2>
            <p>
              Synth 8-bit plaid vexillologist venmo, kinfolk selvage. Viral
              shoreditch pop-up, man braid kale chips forage godard swag
              locavore beard succulents authentic portland echo park. Jean
              shorts readymade williamsburg vexillologist shabby chic, selfies
              drinking vinegar twee pickled single-origin coffee live-edge blue
              bottle. Plaid hashtag kinfolk butcher, selvage unicorn pok pok
              meggings vice four dollar toast small batch meditation.
              Asymmetrical pitchfork beard sriracha leggings pinterest seitan
              snackwave brunch narwhal williamsburg. Sartorial snackwave swag
              hot chicken, roof party tumblr adaptogen hashtag heirloom everyday
              carry vice. Tumblr biodiesel keytar green juice tbh, gentrify
              vinyl ennui godard squid thundercats shaman microdosing affogato.
            </p>
          </Card>
        </div>
        <div className="member">
          <Portrait />
          <Card className="cardbio" area="3/1/9/13">
            <h2>Jane Doe</h2>
            <p>
              Synth 8-bit plaid vexillologist venmo, kinfolk selvage. Viral
              shoreditch pop-up, man braid kale chips forage godard swag
              locavore beard succulents authentic portland echo park. Jean
              shorts readymade williamsburg vexillologist shabby chic, selfies
              drinking vinegar twee pickled single-origin coffee live-edge blue
              bottle. Plaid hashtag kinfolk butcher, selvage unicorn pok pok
              meggings vice four dollar toast small batch meditation.
              Asymmetrical pitchfork beard sriracha leggings pinterest seitan
              snackwave brunch narwhal williamsburg. Sartorial snackwave swag
              hot chicken, roof party tumblr adaptogen hashtag heirloom everyday
              carry vice. Tumblr biodiesel keytar green juice tbh, gentrify
              vinyl ennui godard squid thundercats shaman microdosing affogato.
            </p>
          </Card>
        </div>
        <div className="member">
          <Portrait />
          <Card className="cardbio" area="3/1/9/13">
            <h2>Jane Doe</h2>
            <p>
              Synth 8-bit plaid vexillologist venmo, kinfolk selvage. Viral
              shoreditch pop-up, man braid kale chips forage godard swag
              locavore beard succulents authentic portland echo park. Jean
              shorts readymade williamsburg vexillologist shabby chic, selfies
              drinking vinegar twee pickled single-origin coffee live-edge blue
              bottle. Plaid hashtag kinfolk butcher, selvage unicorn pok pok
              meggings vice four dollar toast small batch meditation.
              Asymmetrical pitchfork beard sriracha leggings pinterest seitan
              snackwave brunch narwhal williamsburg. Sartorial snackwave swag
              hot chicken, roof party tumblr adaptogen hashtag heirloom everyday
              carry vice. Tumblr biodiesel keytar green juice tbh, gentrify
              vinyl ennui godard squid thundercats shaman microdosing affogato.
            </p>
          </Card>
        </div>
      </Team>
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
    trainAboutImage: file(relativePath: { eq: "run_up.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1200
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
