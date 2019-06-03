import React from 'react'
import styled from 'styled-components'

const Hero = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 5vh;

  h1 {
    font-weight: 100;
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

const heroImageOrtientation = isMobile => {
  const height = isMobile ? '80vh' : 'auto'

  return {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: height,
    zIndex: -1,
  }
}
const Mission = styled.div`
  height: auto;
  display: grid;
  grid-gap: 0 2.25em;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 0.5fr);
  .backgroundTrain {
    grid-area: 1/1/9/13;
  }
  h1 {
    grid-area: 2/3/3/11;
    text-align: center;
    font-weight: 300;
    letter-spacing: 0.05em;
    font-size: ${props => (props.isMobile ? '1.5em' : '5em')};
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
    font-size: ${props => (props.isMobile ? '1em' : '1.5em')};
    font-weight: 400;
    color: #555353;
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
    grid-area: ${props => (props.isMobile ? '1/4/8/10' : '2/5/8/9')};
  }
`

const LineBreak = styled.hr`
  grid-area: ${props => props.area};
  display: block;
  height: 0.1em;
  border: 0;
  margin: ${props => (props.area ? '1em' : '2em 8em 3em 8em')};
  padding: 0;
  color: #0071fe;
  background-color: #0071fe;
  text-align: center;
`

const Team = styled.div`
  margin: 0;
  .teamheader {
    h1 {
      text-align: center;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: ${props => (props.isMobile ? '2em' : '3em 6em 3em 6em')};
      margin:  ${props => (props.isMobile ? '2em' : '0')};
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
      margin: ${props => (props.isMobile ? '2em' : '6em 12em 6em 12em')};
      font-size: ${props => (props.isMobile ? '0.75em' : '1em')};
    }
  }
  .member {
    height:auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(13, 5em);
    margin: 5em 0 18em 0;
    .imagewrap {
      grid-area: ${props => (props.isMobile ? '1/4/7/10' : '1/5/6/9')};
      height: 100vw;
      padding-top: 1em;
    }

    .cardbio {
      margin: 0;
      h2 {
       
        margin: 30% 0 0 0;
        grid-column: 3/11;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 2em;
        color: #328cfd;
        @media only screen and (min-aspect-ratio: 13/9) and (max-width: 1250px) {
          font-size: 1vw;
        }
        @media only screen and (min-width: 768px) {
          margin: 25% 0 0 0 !important;
      }
      }
      .text-content{
        grid-column: ${props => (props.isMobile ? '2/12' : '3/11')};
        p {
        grid-column: 4/10;
        font-family: Roboto;
        line-height: 1.25em;
        text-align: justify;
        color: #555353;
        font-weight: 100;
        margin-top: 0;
        font-size:1.5em;   
        /* height: ${props => !props.isMobile && '1em'}; */
      }
      .quote {
        font-style: italic;
        font-size: 1em;
        grid-column: 4/10;
        font-family: Roboto;
        line-height: 1.5em;
        text-align: justify;
        color: #8b8888;
        font-weight: 100;
        margin-top: 0;
      }
      }
     
      

      @media only screen and (min-aspect-ratio: 13/9) and (max-width: 1250px) {
        font-size: 1vw !important;
      }
      /* @media only screen and (min-width: px){
        font-size: ${props => (props.isMobile ? '10px' : '24px')};
      } */
    }
  }
  @media only screen and (min-width: 100px) {
        font-size: 10px;
      }
      @media only screen and (min-width: 768px) {
        font-size: 20px;
      }
      @media only screen and (min-width: 1250px) {
        font-size: 26px;
      }
`

export { Hero, Mission, Info, Logos, LineBreak, Team, heroImageOrtientation }
