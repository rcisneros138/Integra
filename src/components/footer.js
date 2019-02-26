import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import GoogleMap from './googleMap'

import MapMarker from './svg/mapMarker'
import Evenelope from './svg/envelope'
import Phone from './svg/phone'
import Facebook from './svg/facebook'
import Instagram from './svg/insta'
import Twitter from './svg/twitter'

const FooterWrapper = styled.div`
  grid-area: footer;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
`

const FooterBackground = styled(Img)`
  height: 50vmin;
  grid-column: 1/13;
  grid-row: 1/5;
  z-index: 0;
`
const ContactInfo = styled.div`
  grid-area: footer;
  grid-column: ${props => (props.isMobile ? '3/9' : '2/5')};
  grid-row: 2/6;
  display: flex;
  flex-direction: column;
  z-index: 1;
  color: #f9f9f9;
  font-family: Roboto;
  height: 30vmin;
  h1 {
    letter-spacing: 0.05em;
  }
  ul {
    text-align: center;
    list-style-type: none;
    padding: 0;

    li {
      display: flex;
      text-decoration: none;
      /* height: 5vmin; */

      svg {
        float: left;
        margin-right: 1em;
      }
      p {
        font-weight: 100;
        letter-spacing: 2px;
      }
    }
  }
  hr {
    grid-column: 2/6;
    display: block;
    height: 2px;
    border: 0;
    margin: 1em 0;
    padding: 1px;
    background-color: #f9f9f9;
  }
  .socialMedia {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`
const MapWrapper = styled.div`
  height: 100%;
  width: 100%;
  grid-area: 2/6/6/12;
`

const Footer = props => (
  <StaticQuery
    query={graphql`
      query footerImages {
        background: file(relativePath: { eq: "footerBackground.png" }) {
          childImageSharp {
            fluid(maxWidth: 1500, maxHeight: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <FooterWrapper>
          <FooterBackground fluid={data.background.childImageSharp.fluid} />
          <ContactInfo isMobile={props.isMobile}>
            <h1>Contact Us</h1>
            <ul>
              <li>
                <MapMarker />
                <p>8677 N Port Washington Rd</p>
              </li>
              <li>
                <Evenelope />
                <p>info@integra.com</p>
              </li>
              <li>
                <Phone />
                <p>+ 414 351 8482</p>
              </li>
            </ul>
            <hr />
            <div className="socialMedia">
              <a>
                <Facebook />
              </a>
              <a>
                <Twitter />
              </a>
              <a>
                <Instagram />
              </a>
            </div>
          </ContactInfo>
          {!props.isMobile && (
            <MapWrapper>
              <GoogleMap />
            </MapWrapper>
          )}
        </FooterWrapper>
      </>
    )}
  />
)

export default Footer
