import React from 'react'

const Plus = props => (
  <svg
    fill="none"
    height="100%"
    width="10%"
    viewBox=" -60 0 200 100"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M41.792 0H26.21v27.365H0v16.27h26.209V71h15.583V43.636H68V27.364H41.792V0z"
      fill="#0071FE"
    />
  </svg>
)

const Minus = props => (
  <svg
    fill="none"
    height="100%"
    width="10%"
    viewBox=" -60 -35 200 100"
    {...props}
  >
    <path fill="#0071FE" d="M0 0h68v19H0z" />
  </svg>
)

export { Plus, Minus }
