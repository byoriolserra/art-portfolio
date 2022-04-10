import React from 'react'
import './App.css'
import styled from 'styled-components'
import { Routes, Route, Link } from 'react-router-dom'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Pieces from './components/Pieces'
import Contact from './components/Contact'

function App() {
  return (
    <AppContainer>
      <Navbar>
        <ul>
          <NavLink to="contact"><li>Contact</li></NavLink>
          <NavLink to="pieces"><li>Pieces</li></NavLink>
          <NavLink to="about-me"><li>About Me</li></NavLink>
        </ul>
      </Navbar>
      <Routes>
        <Route path="art-portfolio" element={<Hero />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="pieces" element={<Pieces />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
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
const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`