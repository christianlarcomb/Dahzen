import React from 'react';
import styled from "styled-components";

/* CSS Components */
const SwitchContainer = styled.div`
   height: 27px;
   width: 42px;
   position: relative;
   cursor: pointer;
`

const ButtonBack = styled.div`
    border-radius: 100px;
    height: 100%;
    width: 100%;
    background-color: ${props => props.toggled ? '#5A9B5A' : '#CDCDCD'};
`

const ButtonSwitch = styled.div`
    position: absolute;
    height: 25px;
    width: 25px;
    top: 1px;
    background-color: #fff;
    border-radius: 100px;
    left: ${props => props.toggled ? '16px' : '1px'};

    -webkit-filter: drop-shadow(0px 6px 6px rgba(0,0,0,0.15));
    filter:         drop-shadow(0px 6px 6px rgba(0,0,0,0.15));
`

/* Primary Function */
function ToggleButton(props)
{
    return (
        <>
            <SwitchContainer onClick={props.handleClick}>

                <ButtonSwitch toggled={props.toggled}/>
                <ButtonBack toggled={props.toggled}/>

            </SwitchContainer>
        </>
    );
}

export default ToggleButton;
