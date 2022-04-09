import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react';

const Contact = () => {
  return (
    <ContactContainer>
        <ContactContent>
            <SocialMedia>
                <a href="https://twitter.com/byoriolserra" target="_blank" rel="noreferrer"><Icon icon="akar-icons:twitter-fill" color="black" style={{ cursor: 'pointer' }} /></a>
                <a href="https://www.instagram.com/byoriolserra/" target="_blank" rel="noreferrer"><Icon icon="akar-icons:instagram-fill" color="black" style={{ cursor: 'pointer' }} /></a>
                <a href="mailto:hello@byoriolserra.com"><Mail icon="fluent:mail-24-regular" style={{ cursor: 'pointer' }} /></a>
            </SocialMedia>
            <a href="mailto:hello@byoriolserra.com" className="mail"><p>hello@byoriolserra.com</p></a>
        </ContactContent>
    </ContactContainer>
  )
}

export default Contact

const ContactContainer = styled.div`
    width: 90%;
    height: 100vh;
    border-left: 5px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContactContent = styled.div`
    font-size: 64px;
    letter-spacing: 1.92px;
    font-weight: bold;
    a {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
    .mail {
        display: none;
        @media only screen and (min-width: 910px) {
            display: block;
        }
    }
`
const SocialMedia = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 55px;
    margin-bottom: 50px;
    @media only screen and (min-width: 910px) {
        flex-direction: row;
    }
`

const Mail = styled(Icon)`
    @media only screen and (min-width: 910px) {
        display: none;
    }
`