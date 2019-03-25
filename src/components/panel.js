import React, { memo, useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { usePrevious, useMeasure, useMobile } from '../helpers'

import * as Icons from './svg/expandcollapse'

const Frame = styled.div`
  position: relative;
  padding: 4px 0px 0px 0px;
  text-overflow: ellipsis;
  overflow-x: hidden;
  vertical-align: middle;
  background-color: #ffffff;
  border-radius: 1em;
  text-align: center;
  margin: 1em;

  span {
    font-family: Roboto;
    font-size: ${props => (props.isMobile ? '1vw' : '3em')};
    font-weight: 300;
    color: #6a757c;
    margin: auto;
    @media screen {
    }
  }
  .icon {
    /* grid-area: 1/8/2/9; */
    float: right;
    padding-top: 3em;
  }
`
const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  padding: 0px 0px 0px 14px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
  overflow: hidden;
  margin-top: 3em;
  display: inline-block;
`

const toggle = {
  //   width: '1em',
  //   height: '1em',
  marginLeft: 10,
  cursor: 'pointer',
  verticalAlign: 'middle',
  margin: '1em',
}

const Panel = memo(({ children, name, style, open = false }) => {
  const [isOpen, setOpen] = useState(open)
  const isMobile = useMobile(false)
  const previous = usePrevious(isOpen)
  const [bind, { height: viewHeight }] = useMeasure()
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: {
      height: isOpen ? viewHeight + 200 : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
      delay: 100,
    },
  })

  const Icon = Icons[`${isOpen ? 'Minus' : 'Plus'}`]
  return (
    <Frame isMobile={isMobile}>
      <span style={{ verticalAlign: 'middle', paddingTop: '3em', ...style }}>
        {name}
      </span>
      <Icon
        className="icon"
        style={{
          ...toggle,
          marginTop: isOpen && previous === isOpen ? '2em' : '1em',
          transform,
        }}
        onClick={() => setOpen(!isOpen)}
      />
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? 'auto' : height,
        }}
      >
        <animated.div style={transform} {...bind}>
          {children}
        </animated.div>
      </Content>
    </Frame>
  )
})

export default Panel
