import React, { useState, useRef, useEffect } from 'react'
import { config, animated, useSpring } from 'react-spring'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { useInView } from 'react-intersection-observer'

const Portrait = props => {
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
    marginTop: inView ? 0 : -500,
    marginBottom: inView ? 0 : 500,
    from: { opacity: 0, marginTop: -500, marginBottom: 500, zIndex: 2 },
    delay: 1,
    config: config.molasses,
  })
  return (
    <StaticQuery
      query={graphql`
        query portraitImage {
          portrait: file(relativePath: { eq: "person.png" }) {
            childImageSharp {
              fluid(maxWidth: 800, quality: 40, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <animated.div ref={ref} style={style} className="imagewrap">
          <Img
            fluid={data.portrait.childImageSharp.fluid}
            style={{
              height: '19.9vw',
              width: 'auto',
              zIndex: '2',
              marginTop: '5em',
            }}
          />
        </animated.div>
      )}
    />
  )
}

export default Portrait
