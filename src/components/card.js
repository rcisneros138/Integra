import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import withReveal from 'react-reveal/withReveal'
import { config, animated, useSpring } from 'react-spring'
import { Watch } from 'scrollmonitor-react'
import { useInView } from 'react-intersection-observer'
import 'intersection-observer'
import { animation } from 'react-reveal/globals'
import { getFragmentDefinitions } from 'apollo-utilities'

const StyledCard = styled(animated.div)`
  grid-area: ${props => props.area};
  box-shadow: 4px 4px 4px #bdbdbd;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: ${props => !props.area && '10em'};
  width: ${props => !props.area && '90vw'};

  background-color: #ffffff;
  text-align: center;
`

const Card = props => {
  const [ref, inView] = useInView({
    threshhold: 5,
    triggerOnce: false,
  })
  const FadeUp = {
    opacity: inView ? 1 : 0,
    marginTop: inView ? 0 : 500,
    marginBottom: inView ? 0 : -500,
    from: { opacity: 0, marginTop: 500, marginBottom: -500 },
    delay: 1,
    config: config.molasses,
  }
  const FadeSoft = {
    opacity: inView ? 1 : 0,
    marginTop: inView ? 0 : 20,
    from: { opacity: 0, marginTop: 20 },
    delay: 700,
    config: config.molasses,
  }

  const animationOptions = { up: FadeUp, soft: FadeSoft }
  const animationChoice = props.animate
    ? animationOptions[props.animate]
    : FadeUp
  const style = useSpring(animationChoice)

  return (
    <>
      <StyledCard area={props.area} ref={ref} style={style}>
        {props.children}
      </StyledCard>
    </>
  )
}

export default Card
