import React, { Component } from 'react'
import AOS from 'aos'
import classNames from 'classnames'
import { Watch } from 'scrollmonitor-react'

import 'aos/dist/aos.css'

const ViewStyle = props => (
  <div
    className={props.componentStyle}
    data-aos={props.aos}
    style={props.styles}
    data-aos-once={props.once}
    data-aos-easing={props.easing}
    data-aos-offset="300"
  >
    {props.section}
  </div>
)

export default Watch(
  class AnimatedComponent extends React.Component {
    componentDidMount() {
      this.aos = AOS
      this.aos.init({ duration: 2000 })
    }

    componentDidUpdate() {
      this.aos.refresh()
    }
    render() {
      const { style, children, isInViewport, animationType } = this.props
      const defaultAnimation = 'fade-up'
      const aosClass = classNames({
        'aos-init': true,
        'aos-animate': isInViewport,
      })
      return (
        <>
          {isInViewport ? (
            <ViewStyle
              aos={animationType}
              componentStyle={aosClass}
              section={children}
              once={true}
              styles={style}
              easing="ease-in-sine"
            />
          ) : (
            <ViewStyle
              aos={animationType}
              componentStyle={aosClass}
              section={children}
              once={true}
              styles={style}
              easing="ease-in-sine"
            />
          )}
        </>
      )
    }
  }
)
