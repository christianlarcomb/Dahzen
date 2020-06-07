import React from 'react';
import styled from 'styled-components'

import Celebration from "../../assets/imgs/celebration.png";
import iOSAppLM from "../../assets/imgs/ios_mockup_lm.png";
import iOSAppDM from "../../assets/imgs/ios_mockup_dm.png";
import desktopLM from "../../assets/imgs/desktop_mockup_lm.png";
import desktopDM from "../../assets/imgs/desktop_mockup_dm.png";

const ImageContainer = styled.div`

  @media screen and (min-width: 760px)
  {
    height: 800px;
    display: grid;
    grid-gap: 30px;
    grid-template-rows: repeat(2, max-content);
    position: relative;
    
    & img
    {
      height: 700px;
      position: absolute;
    }
    
    & img:nth-child(1)
    {
      left: -900px;
      top: -125px;
      height: 1000px;
      z-index: -1;
    }
    
    & img:nth-child(2)
    {
      z-index: 2;
      left: 20%;
      
      opacity: ${props => props.toggled ? '0' : '100'};
    }
    
    & img:nth-child(3)
    {
      -webkit-filter: drop-shadow(-64px 90px 24px rgba(0, 0, 0, 0.09));
      filter: drop-shadow(-64px 90px 24px rgba(0, 0, 0, 0.09));
      left: 20%;
    }
    
    /* Desktop Light Mode */
    & img:nth-child(4)
    {
      z-index: 2;
      left: 55%;
      
      border-radius: 6px;
      
      opacity: ${props => props.toggled ? '0' : '100'};
    }
    
    /* Desktop Dark Mode */
    & img:nth-child(5)
    {
      left: 55%;
      
      -webkit-filter: drop-shadow(-64px 90px 24px rgba(0, 0, 0, 0.09));
      filter: drop-shadow(-64px 90px 24px rgba(0, 0, 0, 0.09));
      
      border-radius: 7px;
    }
    
  }
  
  @media screen and (max-width: 760px)
  {
    height: 600px;
    display: grid;
    grid-gap: 30px;
    grid-template-rows: repeat(2, max-content);
    position: relative;
    
    /* All Images */
    & img
    {
      height: 500px;
      position: absolute;
    }
    
    
    & img:nth-child(1)
    {
      left: -700px;
      top: -100px;
      height: 800px;
      z-index: -1;
    }
    
    /* iOS Light Mode */
    & img:nth-child(2)
    {
      z-index: 4;
      left: 2%;
      
      opacity: ${props => props.toggled ? '0' : '100'};
    }
    
    /* iOS Dark Mode */
    & img:nth-child(3)
    {
      -webkit-filter: drop-shadow(-64px 90px 24px rgba(0,0,0,0.09));
      filter:         drop-shadow(-64px 90px 24px rgba(0,0,0,0.09));
      left: 2%;
      z-index: 3;
    }
    
    /* Desktop Light Mode */
    & img:nth-child(4)
    {
      z-index: 2;
      left: 55%;
      
      border-radius: 6px;
      
      opacity: ${props => props.toggled ? '0' : '100'};
    }
    
    /* Desktop Dark Mode */
    & img:nth-child(5)
    {
      left: 55%;
      
      -webkit-filter: drop-shadow(-64px 90px 24px rgba(0,0,0,0.09));
      filter:         drop-shadow(-64px 90px 24px rgba(0,0,0,0.09));
      
      border-radius: 7px;
    }
    
  }
`

/* Primary Function */
function DailyAppImages(props)
{
    return (
        <>
            <ImageContainer toggled={props.toggled}>

                <img src={Celebration} alt=""/>

                <img src={iOSAppLM}    alt=""/>
                <img src={iOSAppDM}    alt=""/>

                <img src={desktopLM}   alt=""/>
                <img src={desktopDM}   alt=""/>

            </ImageContainer>
        </>
    );
}

export default DailyAppImages;