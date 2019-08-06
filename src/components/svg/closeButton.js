import React from 'react'
import styled from 'styled-components'

const CloseButton = ({ menuToggle, height, width }) => (
  <div onClick={menuToggle}>
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} fill="black" fillOpacity="0" />
      <path
        d="M8.96409 6.5L12.6599 2.80423C13.1134 2.35071 13.1134 1.6154 12.6599 1.16151L11.8385 0.340142C11.385 -0.113381 10.6497 -0.113381 10.1958 0.340142L6.5 4.03591L2.80423 0.340142C2.35071 -0.113381 1.6154 -0.113381 1.16151 0.340142L0.340142 1.16151C-0.113381 1.61503 -0.113381 2.35034 0.340142 2.80423L4.03591 6.5L0.340142 10.1958C-0.113381 10.6493 -0.113381 11.3846 0.340142 11.8385L1.16151 12.6599C1.61503 13.1134 2.35071 13.1134 2.80423 12.6599L6.5 8.96409L10.1958 12.6599C10.6493 13.1134 11.385 13.1134 11.8385 12.6599L12.6599 11.8385C13.1134 11.385 13.1134 10.6497 12.6599 10.1958L8.96409 6.5Z"
        fill="#0071FE"
      />
    </svg>
  </div>
)

export default CloseButton
