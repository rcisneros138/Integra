import React, { memo, useState } from 'react'
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
    font-weight: 300;
    color: #6a757c;
    /* margin-left: 20%;
    margin-right: auto;
    margin-top: 5%; */
    float: left;

    h2 {
      position: relative;
      font-size: ${props => (props.isMobile ? '1em' : '2em')};
      margin: 2em 10em 0 2em;
    }
  }
  .icon {
    right: 2em;
    position: absolute;
    height: 3em;
    /* top: ${props => (props.isOpen ? '5%' : '20%')}; */
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
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
      delay: 100,
    },
  })
  const iconTop = useSpring({
    top: isOpen ? '5%' : '20%',
  })

  const Icon = Icons[`${isOpen ? 'Minus' : 'Plus'}`]
  return (
    <Frame
      style={{ ...toggle }}
      isMobile={isMobile}
      onClick={() => setOpen(!isOpen)}
    >
      <span
        style={{
          verticalAlign: 'middle',
          ...style,
        }}
      >
        <h2>{name}</h2>
        <Icon
          className="icon"
          style={{
            ...iconTop,
          }}
        />
      </span>
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
