import React, { useState, useRef, useEffect } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

import {
  Hero,
  Mission,
  Info,
  Logos,
  LineBreak,
  Team,
  heroImageOrtientation,
} from '../components/styles/programStyles'

import Layout from '../components/layout'
import Panel from '../components/panel'
import Card from '../components/card'
import Portrait from '../components/memberPortrait'

import Ribbon from '../components/svg/ribbon'
import { useMobile, useDetermineLayout } from '../helpers'
import { bold } from 'ansi-colors'

const PhysicalTherapy = ({ data, location }) => {
  const isMobile = useMobile(false)
  const screenType = useDetermineLayout()

  const gridLayout = () => {
    switch (screenType) {
      case 'Mobile':
        return '5/1/14/13'
      case 'Tablet':
        return '6/1/14/13'
      case 'Desktop':
        return '5/1/14/13'
      default:
        return '5/1/14/13'
    }
  }
  return (
    <Layout
      location={location}
      links={data.site.siteMetadata.menuLinks.therapy}
    >
      <Hero>
        <Img
          fluid={data.heroImage.childImageSharp.fluid}
          style={heroImageOrtientation(isMobile)}
        />
        <div className="heroText">
          <Fade bottom>
            <h1>Physical</h1>
            <h1>Therapy</h1>
          </Fade>
        </div>
      </Hero>
      <Mission name="Mission" {...isMobile}>
        <Img
          className="backgroundTrain"
          fluid={data.aboutImage.childImageSharp.fluid}
          style={{
            width: '100%',
            height: '100%',
            zIndex: -1,
          }}
        />
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
      <Info name="About" isMobile={isMobile}>
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
      <Logos name="Our Team">
        <LineBreak area="4/2/5/5" />
        <Ribbon className="rib" width="100%" height="100%" />
        <LineBreak area="4/9/8/12" />
      </Logos>
      <Team name="Our Therapists">
        <div className="teamheader">
          <h1>We’re doctors and career health professionals</h1>
          <h2>
            Our physical therapy team uses current scientific research, and
            applies clinical and technical expertise, toward helping you achieve
            your physical therapy and rehabilitation goals safely and
            efficiently.
          </h2>
        </div>
        <div className="member">
          <Portrait image={data.trainer3.childImageSharp.fluid} />
          <Card className="cardbio" area={gridLayout}>
            <div className="text-content">
              <h2>Dr. Erik Bork</h2>
              <LineBreak />
              <p>
                Erik is like a mechanist in his therapeutic technique, focusing
                on joint mobility and proper physical mechanics. His treatments
                combine strong manual therapy, exercise prescription, and a
                neuromuscular approach in order to restore normal movement. He
                is especially keen in evaluating and treating shoulder problems.
              </p>
              <section className="quote">
                “I emphasize strength and balance, especially when working with
                older adults. When we can enhance strength and balance, we
                decrease load and force on joints, ligaments, and afflicted
                tendons.”
              </section>
            </div>
          </Card>
        </div>
        <div className="member">
          <Portrait image={data.trainer1.childImageSharp.fluid} />
          <Card className="cardbio" area={gridLayout}>
            <div className="text-content">
              <h2>Dr. Jeremiah Weber</h2>
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
          <Portrait image={data.trainer2.childImageSharp.fluid} />
          <Card className="cardbio" area={gridLayout}>
            <div className="text-content">
              <h2>Dr. Stephanie Smith</h2>
              <LineBreak />
              <p>
                Stephanie grew up locally in Germantown, and returned to the
                Milwaukee-area in 2014. She’s been a member of Integra’s team
                ever since. In that time, she’s continued to expand her
                knowledge and skills around treating jaw pain and headaches.
              </p>
              <section className="quote">
                “I enjoy treating people across a variety of ages with
                non-surgical and post-surgical rehabilitation. I help people
                attain their personal goals, so they can get back to an activity
                level they want. “
              </section>
            </div>
          </Card>
        </div>
      </Team>
    </Layout>
  )
}

export default PhysicalTherapy

export const fluidImage = graphql`
  fragment fluidImage_pt on File {
    childImageSharp {
      fluid(maxWidth: 1200, quality: 70, cropFocus: CENTER) {
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
          therapy {
            name
            link
          }
        }
      }
    }

    heroImage: file(relativePath: { eq: "physicalTherapyTable.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1200
          maxHeight: 800
          quality: 70
          cropFocus: CENTER
          duotone: { highlight: "#0071FE", shadow: "#0071FE", opacity: 20 }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutImage: file(relativePath: { eq: "physicalTherapy_mission.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2000
          quality: 70
          duotone: { highlight: "#0071FE", shadow: "#0071FE", opacity: 70 }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    trainer1: file(relativePath: { eq: "dr_jeremiahW.png" }) {
      ...fluidImage
    }
    trainer2: file(relativePath: { eq: "dr_smith.png" }) {
      ...fluidImage
    }
    trainer3: file(relativePath: { eq: "dr_erikB.png" }) {
      ...fluidImage
    }
  }
`
