import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import withReveal from 'react-reveal/withReveal'

const StyledCard = styled.div`
  grid-area: ${props => props.area};
  background-color: #ffffff;
  box-shadow: 4px 4px 4px #bdbdbd;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      area: this.props.area,
      isMobile: this.props.isMobile,
      direction: this.props.direction,
    }
    this.cardItem = React.createRef
  }

  componentDidMount() {
    this.setState({ position: this.props.area })
  }

  render() {
    const AnimatedCard = withReveal(StyledCard, <Fade up />)

    return (
      <AnimatedCard area={this.state.area}>{this.props.children}</AnimatedCard>
    )
  }
}

export default Card
