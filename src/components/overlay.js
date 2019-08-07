import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import Continue from './buttons/continueButton'

const TransparentOverlay = styled(animated.div)`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit minmax(320px, 30%) 1fr);
  align-items: center;
  /* grid-template-rows: repeat(6, 1fr); */
`
const MainWindow = styled(animated.div)`
  height: 100%;
  /* grid-column: 1/5; */
  margin: 20%;
  padding-top: 10%;
  .buttonWrap {
    margin: 1em 0 1em 0;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin: 50% 0 0 0;
  }
`

const useOverlayImage = () => {
  const { promo } = useStaticQuery(graphql`
    query {
      promo: file(relativePath: { eq: "Integra15.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return promo.childImageSharp.fluid
}
const Overlay = ({ activeOverlay }) => {
  const [overlayActive, setActive] = useState(false)
  const [hideOverlay, setHideOverlay] = useState(false)
  const promoImage = useOverlayImage()
  const { up, w } = useSpring({
    up: overlayActive ? 0 : 100,
    w: hideOverlay ? 0 : 100,
  })

  const toggleActive = () => {
    setHideOverlay(true)
  }

  useEffect(() => {
    setActive(activeOverlay)
  }, [])

  return (
    <>
      {overlayActive && (
        <TransparentOverlay style={{ width: w.interpolate(wi => `${wi}`) }}>
          <MainWindow
            style={{
              transform: up.interpolate(x => `translate3d(0,${x}%,0)`),
            }}
          >
            <a
              href="https://www.landpage.co/integra-anniversary-raffle"
              target="_blank"
            >
              <Img fluid={promoImage}></Img>
            </a>
            <div className="buttonWrap">
              <Continue
                buttonText="Continue To Integra"
                toggle={toggleActive}
              />
            </div>
          </MainWindow>
        </TransparentOverlay>
      )}
    </>
  )
}
export default Overlay
