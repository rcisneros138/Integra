import React, { Component } from 'react'
import AOS from 'aos'
import classNames from 'classnames'
import { Watch } from 'scrollmonitor-react'

import 'aos/dist/aos.css'

const ViewStyle = props => (
  <div
    className={props.componentStyle}
    data-aos={props.aos}
    data-aos-once={props.once}
  >
    {props.text}
  </div>
)

export default Watch(
  class TextComponent extends React.Component {
    componentDidMount() {
      this.aos = AOS
      this.aos.init({
        duration: 2000,
      })
    }
    componentDidUpdate() {
      this.aos.refresh()
    }
    render() {
      const { style, children, isInViewport } = this.props
      const aosClass = classNames({
        'aos-init': true,
        'aos-animate': isInViewport,
      })
      return (
        <span style={style}>
          {isInViewport ? (
            <ViewStyle
              aos="fade-up"
              componentStyle={aosClass}
              text={children}
              once={true}
            />
          ) : (
            <ViewStyle
              aos="fade-up"
              componentStyle={aosClass}
              text={children}
              once={true}
            />
          )}
        </span>
      )
    }
  }
)
