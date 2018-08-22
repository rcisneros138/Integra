import React from 'react'
// import { Link } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import burger from '../images/burger.svg'

const HeadWrap = styled.div`
  position: ${props => props.theme.navPosition};
  background-color: ${props => props.theme.navColor};
  top: 0;
  width: 100vw;
  /* height: 10vmin; */
  z-index: 1;
  transition: all 0.5s;
  display: flex;
  flex-direction: ${props => (props.isMobile ? `column` : `row`)};
  justify-content: space-between;
  padding: 16px;
  -webkit-box-shadow: ${props =>
    props.theme.enableShadow
      ? `0px 4px 11px 0px rgba(0, 0, 0, 0.37);`
      : `none`};
  box-shadow: ${props =>
    props.theme.enableShadow
      ? `0px 4px 11px 0px rgba(0, 0, 0, 0.37);`
      : `none`};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  nav {
    display: ${props => props.isMobile && (props.hideNav ? `none` : `flex`)};
    flex-direction: ${props => (props.isMobile ? `column` : `row`)};
    justify-content: ${props => (props.isMobile ? `flex-end` : `space-evenly`)};
    align-items: center;
    a {
      color: black;
      padding: ${props => !props.isMobile && `1em`};
    }
  }
  span {
    display: ${props => !props.isMobile && `none`};
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    font-size: 24px;
    svg {
      width: 8vmin;
      height: 8vmin;
    }
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
            <span onClick={this.handleMenuClick}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z" />
              </svg>
            </span>

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
