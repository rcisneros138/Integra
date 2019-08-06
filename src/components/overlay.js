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
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
`
const MainWindow = styled(animated.div)`
  height: 100%;
  grid-area: 2/4/6/10;

  @media only screen and (max-width: 768px) {
    grid-area: 2/2/4/12;
  }
  @media only screen and (min-width: 1800px) {
    grid-area: 1/5/5/9;
  }

  /* @media only screen and (orientation: landscape) {
    grid-area: 1/5/4/9;
  } */
`
const ButtonWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    grid-area: 5/2/7/12;
  }

  @media only screen and (min-width: 600px) {
    grid-area: 6/2/7/12;
  }
  @media only screen and (min-width: 768px) {
    grid-area: 6/4/7/10;
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
          <ButtonWrapper>
            <Continue buttonText="Continue To Integra" toggle={toggleActive} />
          </ButtonWrapper>
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
          </MainWindow>
        </TransparentOverlay>
      )}
    </>
  )
}
export default Overlay
