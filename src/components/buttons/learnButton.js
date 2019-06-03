import React from 'react'
import styled from 'styled-components'

const LearnButton = styled.button`
  background-color: transparent;
  border: 6px solid #4c9bfe;
  border-radius: 1px;
  padding: 1em 4em;
  opacity: 0.7;
  a {
    color: #f9f9f9;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    opacity: 1;
  }

  cursor: pointer;
`

const LearnMore = props => (
  <LearnButton>
    <a>Learn More</a>
  </LearnButton>
)

export default LearnMore
