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
import { bold } from 'ansi-colors'

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
  .list {
    li {
      .listTitle {
        font-weight: bold;
      }
      .listBody {
        font-size: 1.5em;
        margin-left: 0.5em;
      }
    }
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
        margin-top: ${props => (props.isMobile ? '4em' : '4.5em')};
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
        grid-column: 3/11;
        font-family: Roboto;
        line-height: 1.5em;
        text-align: justify;
        color: #8b8888;
        font-weight: 100;
        margin-top: 0;
        /* height: ${props => !props.isMobile && '1em'}; */
      }
      .quote {
        font-style: italic;
        font-size: 1.25vw;
        grid-column: 3/11;
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

const PhysicalTherapy = ({ data, location }) => {
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
            <h1>Physical</h1>
            <h1>Therapy</h1>
          </Fade>
        </div>
      </Hero>
      <Mission name="mission" {...isMobile}>
        {/* <Img
          className="backgroundTrain"
          fluid={data.aboutImage.childImageSharp.fluid}
          style={{
            width: '100%',
            height: 'auto',
            zIndex: -1,
          }}
        /> */}
        <h1>Personalized Care and Physical Therapy</h1>
        <h2> Right Here in Fox Point</h2>
        <p>
          Battling back from an injury, and avoiding new injuries, can be
          difficult and confusing. For plenty of people, physical therapy feels
          like you’re taking two steps back, rather than moving forward. Since
          2004, Integra has taken the right steps with clients of all ages and
          abilities Every day, we work with a wide range of people, from those
          taking their first steps toward physical recovery, to others who are
          ready to return to the game. It’s our pleasure to help you get back on
          track—no matter what track you’re on. We’re doctors and career health
          professionals Our physical therapy team uses current scientific
          research, and applies clinical and technical expertise, toward helping
          you achieve your physical therapy and rehabilitation goals safely and
          efficiently. Get more out of physical therapy with evidence-based
          techniques
        </p>
      </Mission>
      <Info name="about" isMobile={isMobile}>
        <Panel name="Evidence-based care is the core of our conditioning philosophy.">
          <div className="collapseText">
            <ul className="list">
              <li>
                <p className="listTitle">Using clinical research</p>
                <p className="listBody">
                  Science is constantly evolving when it comes to physical
                  therapy, conditioning, and training. Our professionals pair
                  traditional exercise methods with new discoveries as we stay
                  adaptable to the ever-changing nature of recovery.
                </p>
              </li>
              <li>
                <p className="listTitle">
                  Pairing you with experienced health practitioners
                </p>
                <p className="listBody">
                  With Integra, physical therapy is a personalized relationship
                  between you and our staff doctors. You won’t be working with
                  rehab aids, or intro-level therapy technicians. We live and
                  breathe our work, and are constantly finding new ways to bring
                  you more.
                </p>
              </li>
              <li>
                <p className="listTitle">
                  Staying true to your personal values and goals
                </p>
                <p className="listBody">
                  When you’re in pain, or recovering from an injury, you don’t
                  want any hassles or confusion. We listen to your words, and to
                  your body. Working together, we strive for excellence in the
                  treatment room, and with at-home exercises we prescribe.
                </p>
              </li>
            </ul>
          </div>
        </Panel>
        <Panel name="We’re strictly dedicated to you and your rehabilitation">
          <div className="collapseText">
            <p>
              There’s no such thing as having “the same injury” as someone else.
              Every injury, like every situation, is unique. We tune in to your
              physical needs A number of focus areas inform and guide our
              approach:
            </p>
            <ul className="list">
              <li>
                <p className="listTitle">
                  The circumstances that surround your injury
                </p>
              </li>
              <li>
                <p className="listTitle">Your medical and physical history </p>
              </li>
              <li>
                <p className="listTitle">Your current physical situation</p>
              </li>
              <li>
                <p className="listTitle">Your recovery timeline and goals </p>
              </li>
            </ul>
            <p>
              In the end, your body has the loudest say when it comes to the
              methods of care we follow.
            </p>
          </div>
        </Panel>
        <Panel name="Dry needling: one of many effective approaches we use">
          <div className="collapseText">
            <p>
              Used to treat trigger points, or “muscle knots” within the muscle
              tissue, dry needling can reduce neuromuscular tone, soften muscle
              tension, and help facilitate recovery.
            </p>
            <p>With your consent, we use dry needling to:  </p>
            <ul className="list">
              <li>
                <p className="listTitle">
                  Improve the overall movement and function of an affected area{' '}
                </p>
              </li>
              <li>
                <p className="listTitle">
                  Allow for more efficient muscle response
                </p>
              </li>
              <li>
                <p className="listTitle">
                  Lead to an improved response to therapy and exercise
                </p>
              </li>
            </ul>
            <p>
              Dry needling is fast-acting, but it’s not a quick fix Using dry
              needling as a stand-alone remedy is short-sighted. At Integra, we
              use dry needling to facilitate movement, and always pair it with
              another form of manual therapy, exercise prescription, or
              one-on-one attention
            </p>
          </div>
        </Panel>
        <Panel name="You hold the key">
          <div className="collapseText">
            <p>
              Physical therapy is a team effort—and you’re the most important
              member of the squad. Think of us as your high-level movement
              specialists and coaches. But the desire must come from you. Find
              the tools, cues, and techniques to empower your recovery. Contact
              Integra to schedule a consultation and physical assessment. We’ll
              take the next step in your physical therapy with you.
            </p>
          </div>
        </Panel>
      </Info>
      <Logos name="our team">
        <LineBreak area="4/2/5/5" />
        <Ribbon className="rib" width="100%" height="100%" />
        <LineBreak area="4/9/8/12" />
      </Logos>

      <Team name="Our Therapists">
        <div className="teamheader">
          <h1>A We’re doctors and career health professionals</h1>
          <h2>
            Our physical therapy team uses current scientific research, and
            applies clinical and technical expertise, toward helping you achieve
            your physical therapy and rehabilitation goals safely and
            efficiently.
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
        {/* <div className="member">
          <Portrait image={data.trainer5.childImageSharp.fluid} />
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
        </div> */}
      </Team>
    </Layout>
  )
}

export default PhysicalTherapy

export const fluidImage = graphql`
  fragment fluidImage_pt on File {
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

    # heroImage: file(relativePath: { eq: "physicalTherapyTable.jpg" }) {
    #   childImageSharp {
    #     fluid(maxWidth: 1200, maxHeight: 800, quality: 90, cropFocus: CENTER) {
    #       ...GatsbyImageSharpFluid
    #     }
    #   }
    # }
    # aboutImage: file(relativePath: { eq: "physicalTherapy_mission.jpg" }) {
    #   childImageSharp {
    #     fluid(
    #       maxWidth: 2000
    #       quality: 90
    #       cropFocus: CENTER
    #       duotone: { highlight: "#0071FE", shadow: "#0071FE", opacity: 70 }
    #     ) {
    #       ...GatsbyImageSharpFluid
    #     }
    #   }
    # }

    # trainer1: file(relativePath: { eq: "dr_smith.png" }) {
    #   ...fluidImage
    # }
    # trainer2: file(relativePath: { eq: "dr_erikB.png" }) {
    #   ...fluidImage
    # }
    # trainer3: file(relativePath: { eq: "dr_jeremiahW.png" }) {
    #   ...fluidImage
    # }
    # trainer4: file(relativePath: { eq: "johnH.png" }) {
    #   ...fluidImage
    # }
    # trainer5: file(relativePath: { eq: "luke_schneider.png" }) {
    #   ...fluidImage
    # }
  }
`
