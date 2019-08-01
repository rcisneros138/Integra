import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

const TransparentOverlay = styled.div`
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
`

const Overlay = props => {
  const display = useState(false)

  return (
    <>
      <TransparentOverlay>
        <h1>TEST OVERLAY</h1>
      </TransparentOverlay>
    </>
  )
}

export default Overlay
