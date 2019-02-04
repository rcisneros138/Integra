import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import TextComponent from './textComponent/textComponent'
import { hidden } from 'ansi-colors'

const DareSection = styled.div`
  grid-area: dare;
  width: 100vw;
  display: grid;
  grid-gap: 0 2.25em;
  grid-template-columns: repeat(11, 1fr);
  margin: 0 auto;
  height: inherit;

  h2 {
    font-weight: 100;
    font-size: 8vmin;
    color: #f9f9f9;
  }
  h1 {
    font-weight: 400;
    font-size: 20vmin;
    color: #f9f9f9;
  }
`
const DareBackground = styled(Img)`
  width: 100vw;
  height: 50vmin;
  position: absolute!;
  overflow: hidden;
  z-index: -1;
`
const DareTitle = styled.div`
  grid-column-start: 2;
  grid-column-end: 11;
  text-align: center;
  height: 50vmin;
`
const spanStyle = {
  lineHeight: '5em',
}

const Dare = props => (
  <StaticQuery
    query={graphql`
      query aboutImages {
        dare: file(relativePath: { eq: "dare.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <DareSection>
        <DareBackground
          fluid={data.dare.childImageSharp.fluid}
          style={{ position: 'absolute' }}
        />
        <DareTitle>
          <TextComponent style={spanStyle}>
            <h2>We Dare To Be</h2>
            <h1>Different</h1>
          </TextComponent>
        </DareTitle>
      </DareSection>
    )}
  />
)
export default Dare
