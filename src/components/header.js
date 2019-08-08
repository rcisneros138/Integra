import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'

import Logo from '../components/svg/integraLogo'
import Burger from '../components/svg/burger'
import CloseButton from '../components/svg/closeButton'
import NavItems from '../components/navigationItems'
import HeaderLinks from '../components/headerLinks'

import Facebook from './svg/facebook'
import Instagram from './svg/insta'
import Twitter from './svg/twitter'
import Phone from './svg/phone'

// const PhoneSection = styled.div`
//   h1 {
//     font-size: 6vmin;
//     color: ${props => props.theme.fontColor};
//     padding: 8px;
//     float: right;
//     margin-top: ${props => !props.isMobile && `1em`};
//   }
// `

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
  .phoneNumber {
    float: right;
    margin-top: 0.75em;
    color: ${props => props.theme.fontColor};
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
const CloseWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 25px;
  font-size: 36px;
  margin-right: 50px;
`

const Header = ({ isMobile, location, links }) => {
  const [topOfPage, toggleIsTop] = useState(true)
  const [navOpen, toggleNavOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [topOfPage, navOpen, isMobile])

  const handleScroll = () => {
    const isTopOfPage = window.scrollY < 50
    isTopOfPage !== topOfPage && toggleIsTop(isTopOfPage)
  }

  // const menuToggle = () => {
  //   toggleNavOpen(prevState => !prevState)
  // }

  return (
    <StaticQuery
      query={graphql`
        query SiteMenuData {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={topOfPage ? defaultNavTheme : scrollingNavTheme}>
          <div>
            <HeadWrap
              // hideMenu={this.state.hideMenuIcon}
              // hideNav={this.state.hideDesktopNavItems}
              isMobile={isMobile}
            >
              <div>
                <Link to="/">
                  <Logo
                    isMobile={isMobile}
                    imageWidth={isMobile ? '30' : '63'}
                    imageHeight={isMobile ? '29' : '73'}
                  />
                  {!isMobile && <NavTitle>Integra</NavTitle>}
                </Link>
              </div>
              <div />

              <NavItems navOpen={navOpen} isMobile={isMobile}>
                {isMobile && (
                  <CloseWrapper>
                    <CloseButton
                      width={13}
                      height={13}
                      menuToggle={() => toggleNavOpen(prevState => !prevState)}
                    />
                  </CloseWrapper>
                )}
                <HeaderLinks menuLinks={links} location={location} />
              </NavItems>
              <SocialMedia isMobile={isMobile}>
                <a href="https://www.facebook.com/integrapt2/">
                  <Facebook
                    width="2em"
                    height="2em"
                    viewBox={isMobile ? '0 0 80 80' : '-5 0 60 55'}
                    color={topOfPage ? '#F9F9F9' : '#4c9bfe'}
                  />
                </a>
                <a href="https://twitter.com/Integra_pt">
                  <Twitter
                    width="2em"
                    height="2em"
                    viewBox={isMobile ? '0 0 80 80' : '-5 0 60 55'}
                    color={topOfPage ? '#F9F9F9' : '#4c9bfe'}
                  />
                </a>
                <a href="https://www.instagram.com/integrapt2/">
                  <Instagram
                    width="2em"
                    height="2em"
                    viewBox={isMobile ? '0 0 80 80' : '-5 0 60 55'}
                    color={topOfPage ? '#F9F9F9' : '#4c9bfe'}
                  />
                </a>
                <a href="tel: +1-414-351-8482">
                  <Phone
                    width="2em"
                    height="2em"
                    viewBox={isMobile ? '0 0 80 80' : '-5 0 60 55'}
                    color={topOfPage ? '#F9F9F9' : '#4c9bfe'}
                  />
                </a>
                {!isMobile && (
                  <div className="phoneNumber">
                    <a>+1 (414) 351 8482</a>
                  </div>
                )}
              </SocialMedia>
              {isMobile && (
                <Burger
                  imageWidth="25"
                  imageHeight="24"
                  menuToggle={() => toggleNavOpen(prevState => !prevState)}
                />
              )}
            </HeadWrap>
          </div>
        </ThemeProvider>
      )}
    />
  )
}

export default Header
