import React, { useState, useRef, useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

import {
  Hero,
  Mission,
  Info,
  Logos,
  LineBreak,
  Team,
} from '../components/styles/programStyles'

import Layout from '../components/layout'
import Panel from '../components/panel'
import Card from '../components/card'
import Portrait from '../components/memberPortrait'

import Ribbon from '../components/svg/ribbon'
import { useMobile } from '../helpers'

const PersonalTraining = ({ data, location }) => {
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
            <h1>Personal</h1>
            <h1>Training</h1>
          </Fade>
        </div>
      </Hero>
      <Mission name="mission" {...isMobile}>
        <Img
          className="backgroundTrain"
          fluid={data.trainAboutImage.childImageSharp.fluid}
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
      </Mission>
      <Info name="about" isMobile={isMobile}>
        <Panel name="Demystify aches, pains, and points of concern">
          <div className="collapseText">
            <p>
              Nothing in life happens “just because.” Our integrated approach
              helps us take the guesswork out of your physical health, and
              what’s going on with your body.  
            </p>
            <br />
            <p>
              As a personal training client, you receive a complimentary
              orthopedic assessment from one of our staff doctors of physical
              therapy (DPT). This assessment helps you see the links between old
              injuries, imprecise movements, lack of physical activity, muscle
              atrophy, physical limitations, and pain.
            </p>
            <br />
            <p>
              From there, we identify areas of strength and weakness, ways that
              your body is compensating, and any asymmetry that’s holding you
              back. We use this base of knowledge to inform an exercise program
              that flows safely around you and your goals.
            </p>
            <br />
          </div>
        </Panel>
        <Panel name="Don’t just “live with it” ">
          <div className="collapseText">
            <p>
              If there’s a change you want to make, personal training with
              Integra can help you accomplish it. Together, we help you build a
              blueprint that leads to the results you want, including things
              like:
            </p>
            <ul className="list">
              <li>
                <p className="listTitle">
                  Greater flexibility and range of motion
                </p>
              </li>
              <li>
                <p className="listTitle">Fewer aches and pains </p>
              </li>
              <li>
                <p className="listTitle">Increased energy and endurance</p>
              </li>
              <li>
                <p className="listTitle">Core strength </p>
              </li>
              <li>
                <p className="listTitle">
                  Better performance in specific sports or activities
                </p>
              </li>
              <li>
                <p className="listTitle">Weight loss</p>
              </li>
              <li>
                <p className="listTitle">Improved shape and tone</p>
              </li>
            </ul>
          </div>
        </Panel>
        <Panel name="Training evaluation ">
          <div className="collapseText">
            <p>
              We use a unique evaluation approach to begin you training
              experience. Here’s how the steps break down:
            </p>
            <ul className="list">
              <li>
                <p className="listTitle">
                  Our doctors of physical therapy (DPTs) are specialists in
                  orthopedics, and conduct your initial training evaluation.
                  This helps us ensure that your exercise experience is safe and
                  specifically tailored to help address what your body needs.
                </p>
              </li>
              <li>
                <p className="listTitle">
                  Whether you’re an elite athlete, or someone brand new to
                  exercise, expect our DPTs to take you through a joint and
                  strength assessment from head to toe, and point out any issues
                  along the way.
                </p>
              </li>
              <li>
                <p className="listTitle">
                  Following your evaluation, our DPTs communicate the
                  information they gather back to your trainer. This core group
                  of professionals will continue to support you while you work
                  with Integra.
                </p>
              </li>
              <li>
                <p className="listTitle">
                  If there’s an exercise that might help with anything we find
                  during your evaluation, your evaluating therapist will offer
                  home exercises to help kick start your training experience.{' '}
                </p>
              </li>
            </ul>
          </div>
        </Panel>
        <Panel name="We prepare your body for movement">
          <div className="collapseText">
            <p>
              Regardless of your experience level, no one should just “jump in”
              to exercising cold. Every session in our Fox Point gym involves
              preparing your body the right way:
            </p>
            <ul className="list">
              <li>
                <p className="listTitle">
                  We plan movement prep around your main exercise focus, along
                  with what your body tells us on a given day.
                </p>
              </li>
              <li>
                <p className="listTitle">
                  We warm up your muscles systematically before any exercises.
                  This is a fundamental part of maximizing your performance and
                  experience.
                </p>
              </li>
              <li>
                <p className="listTitle">
                  We make sure your blood flow increases, and that your internal
                  body temperature rises. Then we facilitate movement patterns
                  that reflect your workout.
                </p>
              </li>
            </ul>
            <p>
              Establishing these warmup habits early can help make training more
              efficient and effective, and drastically reduce the chance of
              injury.
            </p>
          </div>
        </Panel>
        <Panel name="We educate as much as we train">
          <div className="collapseText">
            <p>
              Our personal trainers bring a strong educational component to
              every workout. We don’t think of trainings as one-offs. Every
              session is part of an informed physical practice. This includes
              what we work on with you in our Fox Point gym, as well as any
              exercises you do on your own time.
            </p>
          </div>
        </Panel>
        <Panel name="Proper form starts with knowing the jobs of different muscle groups">
          <div className="collapseText">
            <p>
              From muscle stabilization, to coordination, to effective
              movements, we bring you tools, techniques, and practices that help
              you build a structure for strength, flexibility, and peak
              performance.
            </p>
            <p>Our focus as personal trainers includes the following:</p>
            <ul className="list">
              <li>
                <p className="listTitle">
                  Placing a high priority on strength without sacrificing
                  mobility, stability, or injury prevention
                </p>
              </li>
              <li>
                <p className="listTitle">
                  Adapting to your body’s needs on any given day
                </p>
              </li>
              <li>
                <p className="listTitle">
                  Tapping into the diverse strengths, skills, and backgrounds of
                  our entire training staff
                </p>
              </li>
              <li>
                <p className="listTitle">
                  Helping you go beyond your scheduled exercise plan
                </p>
              </li>
            </ul>
          </div>
        </Panel>
        <Panel name="Claim your place">
          <div className="collapseText">
            <p>
              Claim your place on the continuum of athletic performance and
              corrective exercise
            </p>
            <br />
            <p>
              When you train at Integra in Fox Point, you’ll discover that time
              slows down around your health. With 7,000 square-feet of space,
              tall windows, and high ceilings, we’re equipped to support
              one-on-one strength and conditioning, cardio, physical therapy,
              massage and more. Get started with personal training that fits
              your schedule, style, and personal budget
            </p>
          </div>
        </Panel>
      </Info>
      <Logos name="our team" isMobile={isMobile}>
        <LineBreak area="4/2/5/5" />
        <Ribbon className="rib" width="100%" height="100%" />
        <LineBreak area="4/9/8/12" />
      </Logos>

      <Team name="our trainers" isMobile={isMobile}>
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
          <Portrait image={data.trainer2.childImageSharp.fluid} />
          <Card className="cardbio" area="5/1/14/13">
            <h2>Jeff Konczal</h2>
            <div className="text-content">
              <LineBreak />

              <p>
                Jeff’s professional fitness career started in 1994. His
                philosophy centers on applying a science-based understanding of
                current training methods in order to facilitate greater health
                and recovery. Working with Jeff involves focusing on injury
                prevention, and progressing toward movement patterns.{' '}
              </p>
              <section className="quote">
                “I see myself as an educator and a motivator. We all need to
                understand that there is a process to follow in order to reach
                any goal. I seek to educate my clients about where their bodies
                are in the moment, and what it will take to reach their desired
                outcomes. In the end, I want them to understand what we’re
                doing, why we’re doing it, and where our efforts are taking us.”
              </section>
            </div>
          </Card>
        </div>
        <div className="member">
          <Portrait image={data.trainer1.childImageSharp.fluid} />
          <Card className="cardbio" area="5/1/14/13">
            <h2>Dr. Jeremiah Weber</h2>
            <div className="text-content">
              <LineBreak />
              <p>
                Jeremiah has been an essential part of our physical therapy,
                personal training, and athletic development teams since 2011.
                Since his undergraduate days, he has pursued specialized
                coursework and training that emphasize evidence-based spinal
                care and support.
                <br />
                <br />
                As an undergrad, Jeremiah was a member of the men’s varsity
                hockey team and won a number of honors. He was a four-year
                member of the NCHA all-academic team, was nominated for NCHA
                scholar athlete of the year, and was a two-time recipient of the
                Richard G O’Brien award for outstanding work ethic.
              </p>
            </div>
          </Card>
        </div>
        <div className="member">
          <Portrait image={data.trainer3.childImageSharp.fluid} />
          <Card className="cardbio" area="5/1/14/13">
            <h2>Joe Cripe</h2>
            <div className="text-content">
              <LineBreak />
              <p>
                Joe heads up our athletic development program, and works with
                athletes of all ages and ranges to help them improve sport
                performance. As our in-house golf fitness specialist, Joe also
                provides golf-specific assessments, and strength programming
                that helps improve golf performance.
              </p>
              <section className="quote">
                “My training philosophy focuses on functional, multi-joint
                movements. I emphasize corrective exercise techniques that help
                promote injury prevention. This is important for competitive and
                weekend athletes."
              </section>
            </div>
          </Card>
        </div>
        <div className="member">
          <Portrait image={data.trainer4.childImageSharp.fluid} />
          <Card className="cardbio" area="5/1/14/13">
            <h2>Josh Conlon</h2>
            <div className="text-content">
              <LineBreak />
              <p>
                Josh has been with Integra since 2013, and has been a
                professional personal trainer since 2011. Throughout his career,
                he has sought credentialing and learning opportunities that
                inform his philosophy around working from a solid base to build
                a strong body. Beyond personal training, clients also seek him
                out for support with nutrition, food, and meal creation.
              </p>
              <section className="quote">
                “I believe it’s essential to build the fundamentals of form and
                function, and to teach healthy living. With clients, I emphasize
                a progressive approach to developing strength and balance, with
                special attention to posture and technique.”
              </section>
            </div>
          </Card>
        </div>
        <div className="member">
          <Portrait image={data.trainer5.childImageSharp.fluid} />
          <Card className="cardbio" area="5/1/14/13">
            <h2>Luke Schneider</h2>
            <div className="text-content">
              <LineBreak />
              <p>
                Luke has been studying and practicing kinesiology since 2010. He
                applies and evidence-based progression to strength training and
                muscle growth, with a focus on movement patterns, mobility
                restoration, corrective exercise, and senior fitness.{' '}
              </p>
              <section className="quote">
                “I believe health and fitness should be taught as a lifestyle,
                and should be something that people implement for the rest of
                our lives. When working with my clients, I like to mix things up
                during workouts. This includes a synergy of strength,
                cardiovascular, balance, and flexibility training. Together, I
                see these as the essential elements for preventing
                musculoskeletal injury, and maintaining a healthy heart and
                metabolism.”
              </section>
            </div>
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

    heroImage: file(relativePath: { eq: "personaltraining.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 800, quality: 70, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    trainAboutImage: file(relativePath: { eq: "run_up.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1200
          quality: 70
          cropFocus: CENTER
          duotone: { highlight: "#0071FE", shadow: "#0071FE", opacity: 70 }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    trainer1: file(relativePath: { eq: "dr_jeremiahW.png" }) {
      ...fluidImage
    }
    trainer2: file(relativePath: { eq: "jeff.png" }) {
      ...fluidImage
    }
    trainer3: file(relativePath: { eq: "joeC.png" }) {
      ...fluidImage
    }
    trainer4: file(relativePath: { eq: "Josh.png" }) {
      ...fluidImage
    }
    trainer5: file(relativePath: { eq: "luke_schneider.png" }) {
      ...fluidImage
    }
  }
`
