import React from 'react'
import './App.css'
import styled from 'styled-components'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <AppContainer>
      <Navbar>
        <ul>
          <li>About Me</li>
          <li>Pieces</li>
          <li>Contact</li>
        </ul>
      </Navbar>
      {/* <Hero /> */}
      <AboutMe />
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  background-color: #f5f5f5;
  font-family: forma-djr-deck, sans-serif;
  display: flex;
`
const Navbar = styled.nav`
  width: 10%;
  white-space: nowrap;
  font-size: 6vw;
  font-weight: bold;
  color: #161616;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 426px) {
    font-size: 40px;
  }
  ul {
    height: 100vh;
    display: flex;
    justify-content: space-around;
    list-style: none;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    li {
      :hover {
        cursor: pointer;
        text-decoration: underline;
        @media only screen and (min-width: 1400px) {
          text-underline-offset: 8px;
        }
      }
    }
  }
`