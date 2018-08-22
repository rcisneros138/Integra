import React from 'react'
// import { Link } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

const HeadWrap = styled.div`
  position: ${props => props.theme.navPosition};
  background-color: ${props => props.theme.navColor};
  top: 0;
  width: 100vw;
  height: 10vmin;
  z-index: 1;
  transition: all 0.5s;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
  -webkit-box-shadow: ${props =>
    props.theme.enableShadow
      ? `0px 4px 11px 0px rgba(0, 0, 0, 0.37);`
      : `none`};
  box-shadow: ${props =>
    props.theme.enableShadow
      ? `0px 4px 11px 0px rgba(0, 0, 0, 0.37);`
      : `none`};
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  nav {
    display: ${props => props.isMobile && (props.hideNav ? `none` : `flex`)};
    flex-direction: ${props => (props.isMobile ? `column` : `row`)};
    justify-content: space-evenly;
    align-items: center;
    a {
      padding: ${props => !props.isMobile && `1em`};
    }
  }
  button {
    display: ${props => (props.isMobile ? `flex` : `none`)};
  }
`
const defaultNavTheme = {
  navPosition: 'absolute',
  navColor: 'transparent',
  enableShadow: false,
}

const scrollingNavTheme = {
  navPosition: 'fixed',
  navColor: 'white',
  enableShadow: true,
}

class Header extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      topOfPage: true,
      hideMenuIcon: false,
      hideNavItems: true,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTopOfPage = window.scrollY < 50
      if (isTopOfPage !== this.state.topOfPage) {
        this.changeNavStyle(isTopOfPage)
      }
    })
  }

  handleMenuClick = () => {
    this.setState(prevState => ({
      hideNavItems: !prevState.hideNavItems,
    }))
  }

  changeNavStyle = isTop => {
    this.setState({ topOfPage: isTop })
  }

  toggleMenuIcon = hideMenuIcon => {
    this.setState({ hideMenuIcon })
  }

  render() {
    return (
      <ThemeProvider
        theme={this.state.topOfPage ? defaultNavTheme : scrollingNavTheme}
      >
        <div>
          <HeadWrap
            hideMenu={this.state.hideMenuIcon}
            hideNav={this.state.hideNavItems}
            isMobile={this.props.isMobile}
          >
            <h1>INTEGRA</h1>
            <button onClick={this.handleMenuClick} />

            <nav>
              <a href=""> Programs </a>
              <a href=""> Team </a>
              <a href=""> About </a>
            </nav>
          </HeadWrap>
        </div>
      </ThemeProvider>
    )
  }
}

export default Header
