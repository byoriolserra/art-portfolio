import React from 'react'
import styled from 'styled-components'
import image from './assets/aboutme.JPG'

const AboutMe = () => {
  const paragraph = 'Vapor, my first film, is currently in the distribution process, and I am already writing a second script. In addition, I am starting to get into music production.'
  return (
    <AboutMeContainer>
        <img src={image} alt='Me with a cinema clapperboard' />
        <TextDiv>
          <h2>Interdisciplinary artist<br/> based in Barcelona</h2>
          <p>{paragraph}</p>
        </TextDiv>
    </AboutMeContainer>
  )
}

export default AboutMe

const AboutMeContainer = styled.section`
    width: 90%;
    height: 100vh;
    border-left: 5px solid black;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    @media only screen and (min-width: 1200px) {
      flex-direction: row;
      align-items: flex-start;
    }
    img {
      object-position: top;
      width: 100%;
      height: 60%;
      object-fit: cover;
      @media only screen and (min-width: 426px) {
        width: 400px;
        margin: 10px 0;
      }
      @media only screen and (min-width: 1200px) {
      width: 600px;
      height: auto;
      margin: 87px 0 0 75px;
      }
    }
`
const TextDiv = styled.div`
  h2, p {
    padding: 10px;
    font-size: 120%;
  }
  h2 {
    font
  }
  @media only screen and (min-width: 426px) {
    width: 80%;
  }
  @media only screen and (min-width: 800px) {
    width: 40%;
  }
  @media only screen and (min-width: 1200px) {
    margin-top: 110px;
    width: 770px;
    right: 0;
    position: absolute;
    h2 {
      font-size: 64px;
      text-align: right;
      padding-right: 120px;
    }
    p {
      text-align: left;
      position: absolute;
      margin-left: 170px;
      width: 450px;
      font-size: 30px;
      line-height: 50px;
    }
  }
`
