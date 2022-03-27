import React from 'react'
import './App.css'
import styled from 'styled-components'

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
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  font-family: forma-djr-deck, sans-serif;
`
const Navbar = styled.nav`
  transform-origin: left top;
  transform: rotate(-90deg) translateX(-100%);
  height: 122px;
  width: 100vh;
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #161616;
  text-transform: uppercase;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    list-style: none;
    display: flex;
    justify-content: space-around;
    li {
      :hover {
        cursor: pointer;
        text-decoration: underline;
        text-underline-offset: 8px;
      }
    }
  }
`