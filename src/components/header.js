import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'react-scroll'

import Logo from '../components/svg/integraLogo'
import Burger from '../components/svg/burger'
import CloseButton from '../components/svg/closeButton'
import NavItems from '../components/navigationItems'

import Facebook from './svg/facebook'
import Instagram from './svg/insta'
import Twitter from './svg/twitter'
import GooglePlus from './svg/googlePlus'

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
  justify-content: space-evenly;
  padding: 0;
  font-size: 1em;

  -webkit-box-shadow: ${props =>
    props.theme.enableShadow &&
    `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);`};
  box-shadow: ${props =>
    props.theme.enableShadow &&
    `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);`};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`
const SocialMedia = styled.div`
  padding: ${props => !props.isMobile && '1em'};
  svg {
    padding: 0.5em;
  }
`

const NavTitle = styled.p`
  margin: 0;
  padding-left: 0.3em;
  padding-top: 0.5em;
  color: ${props => props.theme.fontColor};
  font-size: 2em;
  float: right;
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
            <div>
              <Logo
                isMobile={isMobile}
                imageWidth={isMobile ? '30' : '63'}
                imageHeight={isMobile ? '29' : '73'}
              />
              {!isMobile && <NavTitle>Integra</NavTitle>}
            </div>
            <div />

            <NavItems navOpen={this.state.navOpen} isMobile={isMobile}>
              {isMobile && <CloseButton menuToggle={this.menuToggle} />}

              <StyledLink offset={-50} to="programs" smooth={true}>
                Programs
              </StyledLink>
              <StyledLink offset={-50} to="about" smooth={true}>
                About
              </StyledLink>
              <StyledLink offset={-50} to="testimonials" smooth={true}>
                Testimonials
              </StyledLink>
              <StyledLink offset={-50} to="contact" smooth={true}>
                Contact
              </StyledLink>
            </NavItems>
            <SocialMedia isMobile={isMobile}>
              <a href="https://www.facebook.com/integrapt2/">
                <Facebook
                  width="2em"
                  height="2em"
                  viewBox={isMobile ? '0 0 80 80' : '-5 0 60 55'}
                  color={this.state.topOfPage ? '#F9F9F9' : '#4c9bfe'}
                />
              </a>
              <a href="https://twitter.com/Integra_pt">
                <Twitter
                  width="2em"
                  height="2em"
                  viewBox={isMobile ? '0 0 80 80' : '-5 0 60 55'}
                  color={this.state.topOfPage ? '#F9F9F9' : '#4c9bfe'}
                />
              </a>
              <a href="https://www.instagram.com/integrapt2/">
                <Instagram
                  width="2em"
                  height="2em"
                  viewBox={isMobile ? '0 0 80 80' : '-5 0 60 55'}
                  color={this.state.topOfPage ? '#F9F9F9' : '#4c9bfe'}
                />
              </a>
            </SocialMedia>
            {isMobile && (
              <Burger
                imageWidth="25"
                imageHeight="24"
                menuToggle={this.menuToggle}
              />
            )}
          </HeadWrap>
        </div>
      </ThemeProvider>
    )
  }
}

export default Header
