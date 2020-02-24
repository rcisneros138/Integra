import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Element } from 'react-scroll'

import GoogleMap from './googleMap'

import MapMarker from './svg/mapMarker'
import Evenelope from './svg/envelope'
import Phone from './svg/phone'
import Facebook from './svg/facebook'
import Instagram from './svg/insta'
import Twitter from './svg/twitter'

const FooterWrapper = styled(Element)`
  grid-area: footer;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  height: 80vmin;
  overflow: hidden;
  font-size: 24px;
`

const FooterBackground = styled(Img)`
  height: ${props => (props.isMobile ? '80vmin' : '50vmin')};
  grid-column: 1/13;
  grid-row: 1/5;
  z-index: 0;
  height: 80vmin;
  overflow: hidden;
`
const ContactInfo = styled.div`
  grid-column: ${props => (props.isMobile ? '3/12' : '2/6')};
  grid-row: ${props => (props.isMobile ? '2/5' : '2/6')};
  display: flex;
  flex-direction: column;
  font-size: ${props => (props.isMobile ? '3vw' : '2vw')};
  @media screen and (position: landscape) {
    font-size: 1vw;
  }
  z-index: 1;
  color: #f9f9f9;
  font-family: Roboto;
  height: 10vmin;
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
        margin-top: 1em;
      }
      p {
        font-weight: 100;
        letter-spacing: 2px;
        float: right;
      }
      a {
        text-decoration: none;
        color: inherit;
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
  grid-area: 2/7/6/12;
`

const Footer = props => (
  <StaticQuery
    query={graphql`
      query footerImages {
        background: file(relativePath: { eq: "footer.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 1500
              maxHeight: 1000
              quality: 100
              duotone: { highlight: "#0071FE", shadow: "#0071FE", opacity: 70 }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <FooterWrapper name="Contact">
          <FooterBackground
            isMobile={props.isMobile}
            fluid={data.background.childImageSharp.fluid}
          />
          <ContactInfo isMobile={props.isMobile}>
            <h1>Contact Us</h1>
            <ul>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Integra+Physical+Therapy+%26+Personal+Training"
                  target="blank"
                >
                  <MapMarker
                    width={props.isMobile ? '20' : '40'}
                    height={props.isMobile ? '30' : '52'}
                    viewBox="0 0 50 42"
                  />
                  <p>8677 N Port Washington Rd</p>
                </a>
              </li>
              <li>
                <a href="mailto:info@integrapt2.com">
                  <Evenelope
                    width={props.isMobile ? '20' : '40'}
                    height={props.isMobile ? '30' : '52'}
                    viewBox="0 0 50 42"
                  />
                  <p>info@integrapt2.com</p>
                </a>
              </li>
              <li>
                <a href="tel: 414 351 8482">
                  <Phone
                    width={props.isMobile ? '20' : '40'}
                    height={props.isMobile ? '30' : '52'}
                    viewBox="0 0 50 42"
                  />
                  <p>+ 414 351 8482</p>
                </a>
              </li>
            </ul>
            <hr />
            <div className="socialMedia">
              <a href="https://www.facebook.com/integrapt2/">
                <Facebook
                  width={props.isMobile ? '100%' : '70%'}
                  height={props.isMobile ? '100%' : '70%'}
                  // viewBox={props.isMobile ? '0 0 80 80' : '0 0 0 100'}
                  viewBox="0 0 80 80"
                  color="#f9f9f9"
                />
              </a>
              <a href="https://twitter.com/Integra_pt">
                <Twitter
                  width={props.isMobile ? '100%' : '70%'}
                  height={props.isMobile ? '100%' : '70%'}
                  // viewBox={props.isMobile ? '0 0 80 80' : '0 0 0 100'}
                  viewBox="0 0 80 80"
                  color="#f9f9f9"
                />
              </a>
              <a href="https://www.instagram.com/integrapt2/">
                <Instagram
                  width={props.isMobile ? '100%' : '70%'}
                  height={props.isMobile ? '100%' : '70%'}
                  // viewBox={props.isMobile ? '0 0 80 80' : '0 0 0 100'}
                  viewBox="0 0 80 80"
                  color="#f9f9f9"
                />
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
