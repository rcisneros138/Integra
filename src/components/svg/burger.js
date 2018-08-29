import React from 'react'
import styled from 'styled-components'

const Bun = styled.div`
  position: absolute;
  top: 5px;
  right: 1em;
}
`

const Burger = props => (
  <div onClick={props.menuToggle}>
    <Bun>
      <svg
        width={props.imageWidth}
        height={props.imageHeight}
        viewBox="0 0 13 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H13V2H0V0ZM0 4H13V6H0V4ZM13 8H0V10H13V8Z"
          fill="#19B5FE"
          fillOpacity="0.7"
        />
      </svg>
    </Bun>
  </div>
)

export default Burger
