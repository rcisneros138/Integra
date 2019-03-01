import React from 'react'

class Concat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: props.isMobile,
      characters: props.char,
      truncated: '',
    }
    this.concatChildText = this.concatChildText.bind(this)
  }

  componentDidMount() {
    const truncatedText = this.concatChildText(this.props.children)
    this.setState({ truncated: truncatedText })
  }
  concatChildText = text => {
    var trunc = text.substr(0, 200) + '\u2026'
    return trunc
  }

  render() {
    return <>{this.state.truncated}</>
  }
}

export default Concat
