import React from 'react'
import styled from 'styled-components'

const LearnButton = styled.button`
  background-color: transparent;
  border: 6px solid #4c9bfe;
  border-radius: 1px;
  padding: 1em 4em;
  opacity: 1;
  p {
    color: #f9f9f9;
    text-align: center;
    text-decoration: none;
    font-size: 32px;
    opacity: 1;
  }

  cursor: pointer;
`

const LearnMore = props => (
  <LearnButton>
    <p>Learn More</p>
  </LearnButton>
)

export default LearnMore
