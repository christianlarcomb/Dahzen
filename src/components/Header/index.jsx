import React from 'react';
import styled from "styled-components";
import {ReactComponent as DahzShortLogo} from "../../assets/vectors/dahzen_short_vector_gray.svg";
import {notify} from "../Notifications";

const Header = styled.div`

    display: grid;
    height: 70px;
    background-color: rgba(242, 242, 242, 0.6);
    
    backdrop-filter: blur(75px) saturate(250%);
    -webkit-backdrop-filter: blur(75px) saturate(250%);
    
    grid-template-columns: 80px 115px;
    place-items: center;
    
    top: 0;
    justify-content: space-between;
    z-index: 404;
    
    svg:nth-child(1) { height: 34px; }
    
`

const Button = styled.div`

    background-color: rgba(240, 240, 240, 0.6);
    height: 45px;
    width: 100px;
    display: grid;
    border-style: none;
    border-radius: 10px;
    color: #3a3a3a;
    font-size: 18px;
    outline: none;
    place-items: center;
    cursor: pointer;
    
    &:hover
    {
        background-color: var(--blue-berry);
        color: white;
    }
    
    &:active
    {
        background-color: var(--almost-salmon);
        color: white;
    }
`

function AppHeader()
{
    return(
        <>
            <Header>

                <DahzShortLogo/>

                <Button onClick={() => notify('Heads up!', 'The investors page is currently under construction!')}>Investors</Button>

            </Header>
        </>
    )
}

export default AppHeader;