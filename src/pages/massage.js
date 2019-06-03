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

const Massage = ({ data, location }) => {
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
      links={data.site.siteMetadata.menuLinks.massage}
    >
      <Hero>
        <Img
          fluid={data.heroImage.childImageSharp.fluid}
          style={heroImageOrtientation(isMobile)}
        />
        <div className="heroText">
          <Fade bottom>
            <h1>Massage</h1>
          </Fade>
        </div>
      </Hero>
      <Mission name="Mission" {...isMobile}>
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
      <Info name="About" isMobile={isMobile}>
        <Panel name="Myofascial massage">
          <div className="collapseText">
            <p>
              treats the body’s connective tissue, and frees areas of tissue
              that become stuck together. After a myofascial massage treatment,
              your muscles can once again glide over one another. This release
              can dramatically reduce tension, stiffness, and achiness.
            </p>
          </div>
        </Panel>
        <Panel name="Neuromuscular Therapy (NMT)">
          <div className="collapseText">
            <p>
              a precise, thorough assessment and treatment of the body’s soft
              tissues. NMT focuses on relieving the pain of trigger points. It’s
              often integrated into other massage techniques (instead of being a
              primary form of therapy). Using NMT, our massage team gathers
              information from your body. This is an excellent tool to help
              identify the differences between symptoms and root causes.
            </p>
          </div>
        </Panel>
        <Panel name="Deep tissue massage">
          <div className="collapseText">
            <p>
              addresses problem areas in a specific muscle or muscle group. Deep
              tissue massage can be intense for some clients. Our massage
              therapists reduce the intensity by shortening the muscle, and
              changing the position of your body when necessary.
            </p>
          </div>
        </Panel>
        <Panel name="Orthopedic Massage Therapy">
          <div className="collapseText">
            <p>
              this multidisciplinary approach relieves muscular and soft tissue
              pain, dysfunction, and injuries. Orthopedic massage helps
              normalize the body’s soft tissues, and can be far more powerful
              than using just one technique. We apply orthopedic massage to help
              you regain and improve your health and fitness.
            </p>
          </div>
        </Panel>
        <Panel name="Spontaneous Muscle Release Technique (SMRT)">
          <div className="collapseText">
            <p>
              a painless method of releasing tight muscles. Some massage clients
              experience tightness in specific areas, or trigger points, because
              their nervous system is overstimulated. Using the SMRT technique,
              our massage therapists can disrupt overstimulation, and quickly
              relax a tight muscle. SMRT restores normal movement and function
              by balancing asymmetrical muscle tone.
            </p>
          </div>
        </Panel>
        <Panel name="Sports Massage">
          <div className="collapseText">
            <p>
              best described as repetitive motion massage, sports massage can
              support anyone, not just athletes. During a sports massage, we use
              a combination of massage techniques and stretches to help improve
              range of motion, and lessen pain in targeted areas.
            </p>
          </div>
        </Panel>
        <Panel name="Stretching Sessions">
          <div className="collapseText">
            <p>
              targets your tight or sore areas. Stretching sessions typically
              range from 15 – 30 minutes on the massage table, during which you
              are fully clothed. A stretching session right after a workout can
              help speed up recovery time.
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
          <h1>The massage table is waiting for you</h1>
          <h2>
            If you’re tired of daily aches or pains, or need to de-stress,
            schedule your massage today. Or give the gift of a massage to a
            friend, coworker, or family member. Find out when our next massage
            table is open.
          </h2>
        </div>
        <div className="member">
          <Portrait image={data.trainer1.childImageSharp.fluid} />
          <Card className="cardbio" area={gridLayout}>
            <div className="text-content">
              <h2>Sara Smiley-Robbins</h2>
              <LineBreak />
              <p>
                is extremely thorough when it comes to relieving pain. In
                support of her massage clients, she determines the source of
                pain through physical assessment, health history, and their
                lifestyles. Her approach and tenacity make her an ideal massage
                therapist for people dealing with migraines, frozen shoulder,
                carpal tunnel, and sciatica.
              </p>
              <section className="quote">
                “When you identify the underlying cause, you can treat a person
                way beyond just superficial aches and pains. Being able to do so
                is a great satisfaction for me, and a huge help for the people I
                treat.”
              </section>
            </div>
          </Card>
        </div>
        <div className="member">
          <Portrait image={data.trainer2.childImageSharp.fluid} />
          <Card className="cardbio" area={gridLayout}>
            <div className="text-content">
              <h2>Michelle Evers</h2>
              <LineBreak />
              <p>
                Michelle started her massage career in Green Bay, and has been
                practicing in the Milwaukee area since 2015. While her specialty
                is sports massage, she’s skilled in a number of massage
                modalities, including deep tissue, myofascial release, and
                neuromuscular therapy.
              </p>
              <section className="quote">
                “I believe sports massage can help anyone who’s dealing with
                pain or an injury related to repetitive motion. No matter why a
                client comes to the table, they’re my number one priority while
                we’re working together.”
              </section>
            </div>
          </Card>
        </div>
      </Team>
    </Layout>
  )
}

export default Massage

export const fluidImage = graphql`
  fragment fluidImage_mas on File {
    childImageSharp {
      fluid(maxWidth: 800, quality: 60, cropFocus: CENTER) {
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
          massage {
            name
            link
          }
        }
      }
    }

    heroImage: file(relativePath: { eq: "massageHeader2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 65, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutImage: file(relativePath: { eq: "SportsMassage.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2000
          quality: 70
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
