import React from 'react'
import styled from 'styled-components'
import HeroImage from './assets/heroimage.webp'

const Hero = () => {
  return (
    <HeroContainer>
        <h1 id='Title'>Oriol  Serra</h1>
        <img src={HeroImage} alt="Cinema theater taken from the screen's perspective" id='HImage' />
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.section`
    width: 90%;
    height: 100vh;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
    h1 {
        cursor: default;
        position: absolute;
        text-transform: uppercase;
        color: #f5f5f5;
        bottom: 0;
        font-size: 14.5vw;
        line-height: 70%;
    }
`