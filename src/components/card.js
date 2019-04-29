import React, { memo, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

import { config, animated, useSpring } from 'react-spring'

import { useInView } from 'react-intersection-observer'

const StyledCard = styled(animated.div)`
  grid-area: ${props => props.area};
  box-shadow: 4px 4px 4px #bdbdbd;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  /* grid-template-rows: repeat(6, 1fr); */
  height: ${props => !props.area && '40vh'};
  width: ${props => (props.area ? '100%' : '90vw')};
  margin: auto;

  background-color: #ffffff;
  text-align: center;
`

const Card = props => {
  const [ref, inView] = useInView({ offset: 1, triggerOnce: true })
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('intersection-observer')
    }
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
      <StyledCard
        className={props.className}
        area={props.area}
        ref={ref}
        style={style}
      >
        {props.children}
      </StyledCard>
    </>
  )
}
const memoCard = memo(Card)
export default memoCard
