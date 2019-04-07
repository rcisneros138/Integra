import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const StyledLink = styled(Link)`
  cursor: pointer;
`

const HeaderLinks = ({ menuLinks, location }) => {
  const [navLinks, setLinks] = useState([])

  useEffect(() => {
    setLinks(headerLinks(location))
  }, [navLinks])

  function headerLinks(location) {
    switch (location.pathname) {
      case '/':
        return menuLinks.index
      case '/personaltraining/':
        return menuLinks.training
      //   case 'physicaltherapy':
      //     return
    }
  }
  return (
    <>
      {navLinks.map(link => (
        <StyledLink key={link.name} offset={-50} to={link.name} smooth={true}>
          {link.name}
        </StyledLink>
      ))}
    </>
  )
}

export default HeaderLinks
