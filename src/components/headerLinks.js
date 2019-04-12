import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const StyledLink = styled(Link)`
  cursor: pointer;
`

const HeaderLinks = ({ menuLinks }) => {
  const [navLinks, setLinks] = useState([])

  useEffect(() => {
    menuLinks !== 'undefined' && setLinks(menuLinks)
  })

  return (
    <>
      {navLinks &&
        navLinks.map(link => (
          <StyledLink key={link.name} offset={-50} to={link.name} smooth={true}>
            {link.name}
          </StyledLink>
        ))}
    </>
  )
}

export default HeaderLinks
