import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { usePrevious } from '../helpers'

import * as Icons from './svg/expandcollapse'

const Frame = styled.div`
  position: relative;
  padding: 4px 0px 0px 0px;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  overflow-x: hidden;
  vertical-align: middle;
  background-color: #ffffff;
  width: 90vw;
  margin: 5em;
  border-radius: 1em;
  text-align: center;

  span {
    /* grid-area: 1/3/2/7; */
    font-family: Roboto;
    font-size: 5em;
    font-weight: 400;
    color: #6a757c;
    margin: auto;
  }
  .icon {
    /* grid-area: 1/8/2/9; */
    float: right;
  }
`
const Content = styled(animated.div)`
  /* grid-area: 2/2/5/9; */
  will-change: transform, opacity, height;
  margin-left: 6px;
  padding: 0px 0px 0px 14px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
  overflow: hidden;
  text-align: center;
`
const AnimatedPanel = styled(animated.div)`
  position: relative;
`

const toggle = {
  width: '1em',
  height: '1em',
  marginLeft: 10,
  cursor: 'pointer',
  verticalAlign: 'middle',
}

const Panel = ({ name, style, open = false }) => {
  const [isOpen, setOpen] = useState(open)
  const previous = usePrevious(isOpen)
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: {
      height: isOpen ? 200 : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
    },
  })

  const handleClick = event => {
    event.preventDefault()
    setOpen(!isOpen)
  }
  const Icon = Icons[`${isOpen ? 'Minus' : 'Plus'}`]
  return (
    <Frame>
      <span style={{ verticalAlign: 'middle', ...style }}>{name}</span>
      <Icon className="icon" onClick={handleClick} />
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? 'auto' : height,
        }}
      >
        <AnimatedPanel style={transform}>
          <div className="content">
            Maybe you’ve been working out for a while, and want to reach the
            next level. Or you’re wrapping up physical therapy, and want to hone
            your technique as you get back in the game. It might be that you’ve
            exercising for the first time in a long time, and want to make sure
            you’re doing things the right way. No matter what brings you to
            Integra, our team of health professions is ready to help you reach
            personal training goals.
          </div>
        </AnimatedPanel>
      </Content>
    </Frame>
  )
}

export default Panel
