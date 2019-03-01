import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'react-scroll'

import Logo from '../components/svg/integraLogo'
import Burger from '../components/svg/burger'
import CloseButton from '../components/svg/closeButton'
import NavItems from '../components/navigationItems'

const StyledLink = styled(Link)`
  cursor: pointer;
`

const PhoneSection = styled.div`
  h1 {
    font-size: 6vmin;
    color: ${props => props.theme.fontColor};
    padding: 8px;
    float: right;
    margin-top: ${props => !props.isMobile && `1em`};
  }
`

const HeadWrap = styled.div`
  position: fixed;
  background-color: ${props => props.theme.navColor};
  top: 0;
  width: 100vw;
  z-index: 100;
  transition: all 0.5s;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0;
  -webkit-box-shadow: ${props =>
    props.theme.enableShadow &&
    `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);`};
  box-shadow: ${props =>
    props.theme.enableShadow &&
    `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);`};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`
const defaultNavTheme = {
  navPosition: 'absolute',
  navColor: 'transparent',
  enableShadow: false,
  fontColor: `#f9f9f9`,
}

const scrollingNavTheme = {
  navPosition: 'fixed',
  navColor: '#F9F9F9',
  enableShadow: true,
  fontColor: `#3A3A3A`,
}

class Header extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      topOfPage: true,
      hideDesktopNavItems: true,
      navOpen: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  menuToggle = () => {
    this.setState(prevState => ({
      navOpen: !prevState.navOpen,
    }))
  }

  changeNavStyle = isTop => {
    this.setState({ topOfPage: isTop })
  }

  handleScroll = () => {
    const isTopOfPage = window.scrollY < 50
    if (isTopOfPage !== this.state.topOfPage) {
      this.changeNavStyle(isTopOfPage)
    }
  }

  // useMobileMenu = () => {
  //   const useMobileNav = window.innerWidth < 1024
  //   if (useMobileNav !== this.state.useMobileNav){
  //     this.setState({useMobileNav})
  //   }
  // }

  render() {
    const { isMobile } = this.props
    return (
      <ThemeProvider
        theme={this.state.topOfPage ? defaultNavTheme : scrollingNavTheme}
      >
        <div>
          <HeadWrap
            hideMenu={this.state.hideMenuIcon}
            hideNav={this.state.hideDesktopNavItems}
            isMobile={isMobile}
          >
            {/* <PhoneSection isMobile={isMobile}>
              <Phone
                imageWidth={isMobile ? '40' : '80'}
                imageHeight={isMobile ? '42' : '90'}
              />
              <h1> + 414 351-8482 </h1>
            </PhoneSection> */}
            <Logo
              isMobile={isMobile}
              imageWidth={isMobile ? '30' : '63'}
              imageHeight={isMobile ? '29' : '73'}
            />
            <div />
            {isMobile && (
              <Burger
                imageWidth="25"
                imageHeight="24"
                menuToggle={this.menuToggle}
              />
            )}
            <NavItems navOpen={this.state.navOpen} isMobile={isMobile}>
              {isMobile && <CloseButton menuToggle={this.menuToggle} />}

              <StyledLink offset={-50} to="programs" smooth={true}>
                Programs
              </StyledLink>
              <StyledLink offset={-50} to="about" smooth={true}>
                About
              </StyledLink>
              <StyledLink offset={-50} to="testemonials" smooth={true}>
                Testemonials
              </StyledLink>
              <StyledLink ffset={-50} to="contact" smooth={true}>
                Contact
              </StyledLink>
            </NavItems>
          </HeadWrap>
        </div>
      </ThemeProvider>
    )
  }
}

export default Header
