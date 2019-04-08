import React, { useState, useRef, useEffect } from 'react'
import { config, animated, useSpring } from 'react-spring'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { useInView } from 'react-intersection-observer'

const Portrait = ({ image }) => {
  const [ref, inView] = useInView({
    threshhold: 25,
    triggerOnce: true,
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('intersection-observer')
    }
  })
  const style = useSpring({
    opacity: inView ? 1 : 0,
    marginTop: inView ? 0 : -200,
    marginBottom: inView ? 0 : 200,
    from: { opacity: 0, marginTop: -200, marginBottom: 200, zIndex: 2 },
    delay: 1,
    config: config.molasses,
  })
  return (
    <animated.div ref={ref} style={style} className="imagewrap">
      <Img
        fluid={image}
        style={{
          height: '19.9vw',
          width: 'auto',
          zIndex: '2',
        }}
      />
    </animated.div>
  )
}

export default Portrait
