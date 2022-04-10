import React from 'react'
import styled from 'styled-components'
import Vapor from './assets/vapor.png'

const Pieces = () => {
  return (
    <PiecesContaier>
        <PiecesGrid>
            <Piece>
                <img src={Vapor} alt='' />
            </Piece>
            <Piece>
                <p>Coming soon.</p>
            </Piece>
            <Piece>
                <p>Coming soon.</p>
            </Piece>
        </PiecesGrid>
    </PiecesContaier>
  )
}

export default Pieces

const PiecesContaier = styled.div`
    width: 90%;
    height: 100vh;
    border-left: 5px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`
const PiecesGrid = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
    width: 70%;
    max-height: 90vh;
`
const Piece = styled.div`
    width: 40vw;
    height: 40vw;
    background-color: rgba(196, 196, 196, 0.3);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 100%;
        height: 100%;
    }
    p {
        opacity: 0;
        transition: 0.5s;
    }
    :hover {
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
        p {
            opacity: 0.3;
        }
    }
    @media only screen and (min-width: 500px) {
        width: 250px;
        height: 250px;
    }
`