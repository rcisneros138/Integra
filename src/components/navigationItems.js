import React from 'react'
import styled from 'styled-components'

// If mobile, render one nav over the other??
const DesktopNav = styled.nav`
  display: ${props => props.isMobile && (props.hideNav ? `none` : `flex`)};
  flex-direction: 'row';
  justify-content: ${props =>
    props.isMobile ? `space-between` : `space-around`};
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  padding-top: 2em;
  margin-left: 10em;

  a {
    color: ${props => props.theme.fontColor};
    padding: ${props => !props.isMobile && `1em`};
  }
`

const SideNav = styled.div`
  height: 100%;
  width: ${props => (props.navOpen ? `250px` : `0`)};
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #f9f9f9;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #3a3a3a;
    display: block;
    transition: 0.3s;
  }
  a:hover {
    color: #059ae0;
  }
  /* button {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  } */
`

const NavItems = props => (
  <div>
    {props.isMobile ? <SideNav {...props} /> : <DesktopNav {...props} />}
  </div>
)

export default NavItems
