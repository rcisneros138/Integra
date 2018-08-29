import React from 'react'

const Phone = props => (
  <svg
    width={props.imageWidth}
    height={props.imageHeight}
    viewBox="0 0 80 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width={props.imageWidth}
      height={props.imageHeight}
      fill="black"
      fillOpacity="0"
    />
    <path d="M0 0H40H80V90H0V0Z" fill="#19B5FE" fillOpacity="0.7" />
    <path
      d="M50.7046 34.2483L46.0151 33.2854C45.5056 33.1811 44.9825 33.4178 44.7751 33.8431L42.6107 38.3369C42.4213 38.7301 42.5476 39.1915 42.9218 39.4603L45.6544 41.4504C44.0311 44.5279 41.1948 47.0877 37.6642 48.5602L35.4276 46.1288C35.121 45.7958 34.607 45.6834 34.1651 45.8519L29.1149 47.7778C28.6324 47.9664 28.3663 48.4319 28.4836 48.8852L29.5658 53.0581C29.6785 53.4914 30.1114 53.8043 30.6209 53.8043C42.1688 53.8043 51.5433 45.4788 51.5433 35.1872C51.5433 34.7378 51.1961 34.3486 50.7046 34.2483Z"
      fill="#F9F9F9"
    />
  </svg>
)

export default Phone
