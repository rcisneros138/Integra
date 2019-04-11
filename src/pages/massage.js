import React, { useState, useRef, useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'
import { Element } from 'react-scroll'

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
const Mission = styled.div`
  height: auto;
  display: grid;
  grid-gap: 0 2.25em;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
  .backgroundTrain {
    grid-area: 1/1/9/13;
  }
  h1 {
    grid-area: 2/3/3/11;
    text-align: center;
    font-weight: 300;
    letter-spacing: 0.05em;
    font-size: ${props => (props.isMobile ? '1em' : '5em')};
    color: #f9f9f9;
  }
  h2 {
    grid-area: 3/3/4/11;
    text-align: center;
    font-weight: 100;
    letter-spacing: 0.05em;
    font-size: ${props => (props.isMobile ? '1em' : '2em')};
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
    font-size: ${props => (props.isMobile ? '1em' : '2em')};
    @media only screen and (min-aspect-ratio: 13/9) and (max-width: 1250px) {
      font-size: 1vw !important;
    }
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
    font-size: ${props => (props.isMobile ? '1em' : '1.5em')};
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
  .teamheader {
    h1 {
      text-align: center;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: ${props => (props.isMobile ? '1em' : '2.25')};
      margin: 5em;
      color: #8b8888;

      @media only screen and (min-aspect-ratio: 13/9) and (max-width: 1250px) {
        font-size: 1vw;
      }
    }
    h2 {
      font-family: Roboto;
      line-height: 1.5em;
      text-align: center;
      color: #8b8888;
      font-weight: 100;
      margin-top: 0;
      margin: 6em;
      font-size: ${props => (props.isMobile ? '1em' : '2.25')};
    }
  }

  .member {
    display: grid;
    height: 90vh;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(8, 1fr);
    .imagewrap {
      grid-area: 1/6/4/8;
      padding-top: 3em;
    }

    .cardbio {
      h2 {
        margin-top: 4em;
        grid-column: 3/11;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 2.25em;
        line-height: 0.07em;
        color: #8b8888;
        @media only screen and (min-aspect-ratio: 13/9) and (max-width: 1250px) {
          font-size: 1vw;
        }
      }
      p {
        grid-column: 4/10;
        font-family: Roboto;
        line-height: 1.25em;
        text-align: justify;
        color: #8b8888;
        font-weight: 100;
        margin-top: 0;
        font-size:0.75em;   
        /* height: ${props => !props.isMobile && '1em'}; */
      }
      .quote {
        font-style: italic;
        font-size: 1vw;
        grid-column: 4/10;
        font-family: Roboto;
        line-height: 1.5em;
        text-align: justify;
        color: #8b8888;
        font-weight: 100;
        margin-top: 0;
      }
      @media only screen and (min-aspect-ratio: 13/9) and (max-width: 1250px) {
        font-size: 1vw !important;
      }
      @media only screen {
        font-size: ${props => (props.isMobile ? '3vw' : '1.5em')};
      }
    }
  }
`

const Massage = ({ data, location }) => {
  const isMobile = useMobile(false)

  return (
    <Layout
      location={location}
      links={data.site.siteMetadata.menuLinks.training}
    >
      <Hero>
        <Img
          fluid={data.heroImage.childImageSharp.fluid}
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
            <h1>Massage</h1>
          </Fade>
        </div>
      </Hero>
      <Mission name="mission" {...isMobile}>
        <Img
          className="backgroundTrain"
          fluid={data.aboutImage.childImageSharp.fluid}
          style={{
            width: '100%',
            height: 'auto',
            zIndex: -1,
          }}
        />
        <h1>Not all massages are created equally</h1>
        <p>
          Massage therapy is one of the fundamental pillars at Integra. As a
          massage client, you bring a unique set of needs to the table. Whether
          you’re dealing with an injury, want to combat chronic pain, or need to
          de-stress, we adapt to what your body tells us. Relieve pain and
          dysfunction, and recover from injuries faster with massage Each style
          of massage requires education, technical training and experience. Our
          coordinated, tailored massage treatments help reduce your pain,
          improve flexibility, relieve stress and much more. Our massage
          therapists use an orthopedic massage approach that integrates a number
          of effective massage techniques, depending on what your body presents
          in the moment
        </p>
      </Mission>
      <Info name="about" isMobile={isMobile}>
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
      <Logos name="our team">
        <LineBreak area="4/2/5/5" />
        <Ribbon className="rib" width="100%" height="100%" />
        <LineBreak area="4/9/8/12" />
      </Logos>

      <Team name="our trainers">
        <div className="teamheader">
          <h1>Accredited, certified, and always professional</h1>
          <h2>
            Our personal trainers are experts, and have been doing this a long
            time. We each carry a minimum four-year degree, along with national
            certifications. Working together, we follow through on an
            integrated, evidenced-based personal training approach designed to
            help you get the most out of your experience.
          </h2>
        </div>
        <div className="member">
          <Portrait image={data.trainer1.childImageSharp.fluid} />
          <Card className="cardbio" area="3/1/9/13">
            <h2>Jeff Konczal</h2>
            <LineBreak area="2/5/auto/9" />
            <p>
              Jeff’s professional fitness career started in 1994. His philosophy
              centers on applying a science-based understanding of current
              training methods in order to facilitate greater health and
              recovery. Working with Jeff involves focusing on injury
              prevention, and progressing toward movement patterns.{' '}
            </p>
            <section className="quote">
              “I see myself as an educator and a motivator. We all need to
              understand that there is a process to follow in order to reach any
              goal. I seek to educate my clients about where their bodies are in
              the moment, and what it will take to reach their desired outcomes.
              In the end, I want them to understand what we’re doing, why we’re
              doing it, and where our efforts are taking us.”
            </section>
          </Card>
        </div>
        <div className="member">
          <Portrait image={data.trainer2.childImageSharp.fluid} />
          <Card className="cardbio" area="3/1/9/13">
            <h2>Dr. Jeremiah Weber</h2>
            <LineBreak area="2/5/auto/9" />
            <p>
              Jeremiah has been an essential part of our physical therapy,
              personal training, and athletic development teams since 2011.
              Since his undergraduate days, he has pursued specialized
              coursework and training that emphasize evidence-based spinal care
              and support.
              <br />
              <br />
              As an undergrad, Jeremiah was a member of the men’s varsity hockey
              team and won a number of honors. He was a four-year member of the
              NCHA all-academic team, was nominated for NCHA scholar athlete of
              the year, and was a two-time recipient of the Richard G O’Brien
              award for outstanding work ethic.
            </p>
          </Card>
        </div>
      </Team>
    </Layout>
  )
}

export default Massage

// export const fluidImage = graphql`
//   fragment fluidImage on File {
//     childImageSharp {
//       fluid(maxWidth: 1200, maxHeight: 800, quality: 90, cropFocus: CENTER) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `

export const fluidImage = graphql`
  fragment fluidImage_mas on File {
    childImageSharp {
      fluid(maxWidth: 800, quality: 40, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        menuLinks {
          training {
            name
            link
          }
        }
      }
    }

    heroImage: file(relativePath: { eq: "lotus.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutImage: file(relativePath: { eq: "massage_header.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2000
          quality: 90
          cropFocus: CENTER
          duotone: { highlight: "#0071FE", shadow: "#0071FE", opacity: 70 }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    trainer1: file(relativePath: { eq: "saraSR.png" }) {
      ...fluidImage
    }
    trainer2: file(relativePath: { eq: "michelleE.png" }) {
      ...fluidImage
    }
  }
`
