import React from 'react'
import styled from 'styled-components'

const LogoWrapper = styled.div`
  padding: ${props => (props.isMobile ? `5px` : `11px`)};
  margin-left: ${props => !props.isMobile && `10em`};
`

const Logo = props => (
  <LogoWrapper isMobile={props.isMobile}>
    <svg
      //   width="63"
      //   height="73"
      width={props.imageWidth}
      heigh={props.imageHeight}
      viewBox="0 0 63 73"
      fill="none"
      fillOpacity="0.7"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.8335 8.40149C40.8335 13.0414 37.0527 16.8029 32.3892 16.8029C27.7256 16.8029 23.9448 13.0414 23.9448 8.40149C23.9448 3.76147 27.7256 0 32.3892 0C37.0527 0 40.8335 3.76147 40.8335 8.40149ZM0 21.3854C0 19.8579 38.9829 18.0758 41.7593 21.3854C44.5356 24.6951 34.9351 47.608 20.0127 67.5933C13.2729 76.6199 15.2168 72.3248 18.9492 64.0795C23.4805 54.0695 30.647 38.2371 28.1099 33.3511C24.8945 27.1591 12.5742 24.5323 5.35547 22.9933C2.18604 22.3175 0 21.8514 0 21.3854ZM62.812 21.2581H45.9233C45.9233 40.6068 37.0161 55.0906 25.4033 69.0493C13.7905 83.0081 46.1143 56.0684 51.5332 48.634C58.7183 38.7763 64.0869 21.2581 62.812 21.2581Z"
        fill="#059AE0"
      />
    </svg>
  </LogoWrapper>
)

export default Logo
