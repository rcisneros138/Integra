import React, { Component } from 'react'
import AOS from 'aos'
import classNames from 'classnames'
import { Watch } from 'scrollmonitor-react'

import 'aos/dist/aos.css'
import './TextComponent.css'
import { Span } from 'opentracing'

const ViewStyle = props => (
  <div className={props.componentStyle} data-aos={props.aos}>
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
      const aosClass = classNames({
        'aos-init': true,
        'aos-animate': this.props.isInViewport,
      })
      return (
        <span style={this.props.style}>
          {this.props.isInViewport ? (
            <ViewStyle
              aos="fade-up"
              componentStyle={aosClass}
              text={this.props.children}
            />
          ) : (
            <ViewStyle aos="fade-up" componentStyle={aosClass} />
          )}
        </span>
      )
    }
  }
)
