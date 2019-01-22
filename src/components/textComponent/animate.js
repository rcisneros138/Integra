import React, { Component } from 'react'
import AOS from 'aos'
import classNames from 'classnames'
import { Watch } from 'scrollmonitor-react'

import 'aos/dist/aos.css'

const ViewStyle = props => (
  <div className={props.componentStyle} data={props.aos}>
    {props.section}
  </div>
)

class AnimatedComponent extends React.Component {
  componentDidMount() {
    this.aos = AOS
    this.aos.init({ duration: 2000 })
  }

  componentDidMount() {
    this.aos.refresh()
  }
  render() {
    const { style, children, isInViewport } = this.props
    const defaultAnimation = 'fade-up'
    const aosClass = classNames({
      'aos-init': true,
      'aos-animate': isInViewport,
    })
    return (
      <span style={style}>
        {isInViewport ? (
          <ViewStyle
            aos={props.animationTyle && defaultAnimation}
            componentStyle={aosClass}
            section={children}
            once={true}
          />
        ) : (
          <ViewStyle
            aps={defaultAnimation}
            componentStyle={aosClass}
            section={children}
          />
        )}
      </span>
    )
  }
}

export default Watch(AnimatedComponent)
