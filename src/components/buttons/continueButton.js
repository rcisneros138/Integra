import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

const LearnButton = styled(animated.button)`
  background-color: transparent;
  border: 6px solid #4c9bfe;
  border-radius: 1px;
  padding: 1em 4em;
  opacity: 0.7;
  width: 100%;
  font-size: 1em;
  &:hover {
    background-color: #4c9bfe;
  }
  p {
    color: #f9f9f9;
    text-align: center;
    text-decoration: none;
    font-size: 100%;
    opacity: 1;
    @media only screen and (max-width: 768px) {
      font-size: 75%;
    }
  }

  cursor: pointer;
`
const Continue = ({ buttonText, toggle }) => {
  const [hovered, sethovered] = useState()
  const { grow } = useSpring({
    grow: hovered ? 1.05 : 1,
  })

  useEffect(() => {
    sethovered(false)
  }, [])
  return (
    <LearnButton
      onMouseOver={() => sethovered(true)}
      onMouseOut={() => sethovered(false)}
      onClick={toggle}
      style={{
        transform: grow.interpolate(g => `scale(${g})`),
      }}
    >
      <p>{buttonText}</p>
    </LearnButton>
  )
}

export default Continue
