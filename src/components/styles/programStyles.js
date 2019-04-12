import React from 'react'
import styled from 'styled-components'

const Hero = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 100;

    font-size: 9vmin;
    color: #f9f9f9;
    margin: 0;
    letter-spacing: 0.02em;
    line-height: 1.5em;
    font-weight: 300;
  }
  .heroText {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    height: 100vmin;
  }
`
const Mission = styled.div`
  height: auto;
  display: grid;
  grid-gap: 0 2.25em;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
  .backgroundTrain {
    grid-area: 1/1/9/13;
  }
  h1 {
    grid-area: 2/3/3/11;
    text-align: center;
    font-weight: 300;
    letter-spacing: 0.05em;
    font-size: ${props => (props.isMobile ? '1em' : '5em')};
    color: #f9f9f9;
  }
  h2 {
    grid-area: 3/3/4/11;
    text-align: center;
    font-weight: 100;
    letter-spacing: 0.05em;
    font-size: ${props => (props.isMobile ? '1em' : '2em')};
    color: #f9f9f9;
  }
  p {
    grid-area: 4/2/8/12;
    font-weight: 100;
    font-family: roboto;
    color: #f9f9f9;
    /* text-align: center; */
    line-height: 2em;
    margin: 2vw;
    font-size: ${props => (props.isMobile ? '1em' : '2em')};
    @media only screen and (min-aspect-ratio: 13/9) and (max-width: 1250px) {
      font-size: 1vw !important;
    }
  }
`
const Info = styled.div`
  margin: ${props => (props.isMobile ? '0' : '5em')};
  .collapseText {
    margin: ${props => (props.isMobile ? '1em' : '5em')};
    display: inline-block;
    width: 70vw;
  }
  p {
    font-family: Roboto;
    font-size: ${props => (props.isMobile ? '0.5em' : '1.5em')};
    font-weight: 400;
    color: #6a757c;
    margin: auto;
    line-height: 1.5em;
    text-align: left;
    font-weight: 100;
  }
`
const Logos = styled.div`
  display: grid;
  grid-gap: 0 2.25em;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
  height: 70vh;

  .rib {
    grid-area: 2/5/8/9;
  }
`

const LineBreak = styled.hr`
  grid-area: ${props => props.area};
  display: block;
  height: 0.1em;
  border: 0;
  margin: 1em 0;
  padding: 0;
  color: #0071fe;
  background-color: #0071fe;
`

const Team = styled.div`
  height: auto;
  .teamheader {
    h1 {
      text-align: center;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: ${props => (props.isMobile ? '1em' : '2.25')};
      margin: 5em;
      color: #8b8888;

      @media only screen and (min-aspect-ratio: 13/9) and (max-width: 1250px) {
        font-size: 1vw;
      }
    }
    h2 {
      font-family: Roboto;
      line-height: 1.5em;
      text-align: center;
      color: #8b8888;
      font-weight: 100;
      margin-top: 0;
      margin: 6em;
      font-size: ${props => (props.isMobile ? '1em' : '2.25')};
    }
  }

  .member {
    display: grid;
    height: 90vh;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(8, 1fr);
    .imagewrap {
      grid-area: 1/6/4/8;
      padding-top: 1em;
    }

    .cardbio {
      h2 {
        margin-top: 4em;
        grid-column: 3/11;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 2.25em;
        line-height: 0.07em;
        color: #8b8888;
        @media only screen and (min-aspect-ratio: 13/9) and (max-width: 1250px) {
          font-size: 1vw;
        }
      }
      p {
        grid-column: 4/10;
        font-family: Roboto;
        line-height: 1.25em;
        text-align: justify;
        color: #8b8888;
        font-weight: 100;
        margin-top: 0;
        font-size:0.75em;   
        /* height: ${props => !props.isMobile && '1em'}; */
      }
      .quote {
        font-style: italic;
        font-size: 1vw;
        grid-column: 4/10;
        font-family: Roboto;
        line-height: 1.5em;
        text-align: justify;
        color: #8b8888;
        font-weight: 100;
        margin-top: 0;
      }
      @media only screen and (min-aspect-ratio: 13/9) and (max-width: 1250px) {
        font-size: 1vw !important;
      }
      @media only screen {
        font-size: ${props => (props.isMobile ? '3vw' : '1.5em')};
      }
    }
  }
`

export { Hero, Mission, Info, Logos, LineBreak, Team }
