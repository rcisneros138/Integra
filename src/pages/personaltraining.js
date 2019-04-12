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
      padding-top: 5em;
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
        line-height: 1.5em;
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

const PersonalTraining = ({ data, location }) => {
  const isMobile = useMobile(false)

  return (
    <Layout
      location={location}
      links={data.site.siteMetadata.menuLinks.training}
    >
      <Hero>
        {/* <Img
          fluid={data.heroImage.childImageSharp.fluid}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '70vh',
            zIndex: -1,
          }}
        /> */}
        <div className="heroText">
          <Fade bottom>
            <h1>Personal</h1>
            <h1>Training</h1>
          </Fade>
        </div>
      </Hero>
      <Mission name="mission" {...isMobile}>
        {/* <Img
          className="backgroundTrain"
          fluid={data.trainAboutImage.childImageSharp.fluid}
          style={{
            width: '100%',
            height: 'auto',
            zIndex: -1,
          }}
        /> */}
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
          {/* <Portrait image={data.trainer2.childImageSharp.fluid} /> */}
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
          {/* <Portrait image={data.trainer1.childImageSharp.fluid} /> */}
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
        <div className="member">
          {/* <Portrait image={data.trainer3.childImageSharp.fluid} /> */}
          <Card className="cardbio" area="3/1/9/13">
            <LineBreak area="2/5/auto/9" />
            <h2>Joe Cripe</h2>
            <p>
              Joe heads up our athletic development program, and works with
              athletes of all ages and ranges to help them improve sport
              performance. As our in-house golf fitness specialist, Joe also
              provides golf-specific assessments, and strength programming that
              helps improve golf performance.
            </p>
            <section className="quote">
              “My training philosophy focuses on functional, multi-joint
              movements. I emphasize corrective exercise techniques that help
              promote injury prevention. This is important for competitive and
              weekend athletes."
            </section>
          </Card>
        </div>
        <div className="member">
          {/* <Portrait image={data.trainer4.childImageSharp.fluid} /> */}
          <Card className="cardbio" area="3/1/9/13">
            <LineBreak area="2/5/auto/9" />
            <h2>Josh Conlon</h2>
            <p>
              Josh has been with Integra since 2013, and has been a professional
              personal trainer since 2011. Throughout his career, he has sought
              credentialing and learning opportunities that inform his
              philosophy around working from a solid base to build a strong
              body. Beyond personal training, clients also seek him out for
              support with nutrition, food, and meal creation.
            </p>
            <section className="quote">
              “I believe it’s essential to build the fundamentals of form and
              function, and to teach healthy living. With clients, I emphasize a
              progressive approach to developing strength and balance, with
              special attention to posture and technique.”
            </section>
          </Card>
        </div>
        <div className="member">
          {/* <Portrait image={data.trainer5.childImageSharp.fluid} /> */}
          <Card className="cardbio" area="3/1/9/13">
            <h2>Luke Schneider</h2>
            <LineBreak area="2/5/auto/9" />
            <p>
              Luke has been studying and practicing kinesiology since 2010. He
              applies and evidence-based progression to strength training and
              muscle growth, with a focus on movement patterns, mobility
              restoration, corrective exercise, and senior fitness.{' '}
            </p>
            <section className="quote">
              “I believe health and fitness should be taught as a lifestyle, and
              should be something that people implement for the rest of our
              lives. When working with my clients, I like to mix things up
              during workouts. This includes a synergy of strength,
              cardiovascular, balance, and flexibility training. Together, I see
              these as the essential elements for preventing musculoskeletal
              injury, and maintaining a healthy heart and metabolism.”
            </section>
          </Card>
        </div>
      </Team>
    </Layout>
  )
}

export default PersonalTraining

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
  fragment fluidImage on File {
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

    # heroImage: file(relativePath: { eq: "personaltraining.jpg" }) {
    #   childImageSharp {
    #     fluid(maxWidth: 1200, maxHeight: 800, quality: 90, cropFocus: CENTER) {
    #       ...GatsbyImageSharpFluid
    #     }
    #   }
    # }
    # trainAboutImage: file(relativePath: { eq: "run_up.jpg" }) {
    #   childImageSharp {
    #     fluid(
    #       maxWidth: 1200
    #       quality: 90
    #       cropFocus: CENTER
    #       duotone: { highlight: "#0071FE", shadow: "#0071FE", opacity: 70 }
    #     ) {
    #       ...GatsbyImageSharpFluid
    #     }
    #   }
    # }

    # trainer1: file(relativePath: { eq: "dr_jeremiahW.png" }) {
    #   ...fluidImage
    # }
    # trainer2: file(relativePath: { eq: "jeff.png" }) {
    #   ...fluidImage
    # }
    # trainer3: file(relativePath: { eq: "joeC.png" }) {
    #   ...fluidImage
    # }
    # trainer4: file(relativePath: { eq: "Josh.png" }) {
    #   ...fluidImage
    # }
    # trainer5: file(relativePath: { eq: "luke_schneider.png" }) {
    #   ...fluidImage
    # }
  }
`
