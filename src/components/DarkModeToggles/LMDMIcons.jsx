import React from 'react';
import styled from 'styled-components'

import { ReactComponent as LightModeVect } from '../../assets/vectors/light_mode_toggle.svg';
import { ReactComponent as DarkModeVect } from '../../assets/vectors/dark_mode_toggle.svg';

/* CSS Component */
const VectorContainer = styled.div`

    position: relative;
    height: 30px;
    width: 30px;
    
    svg:nth-child(1)
    {
      position: absolute;
    
      height: 28px;
      width: 28px;
      
      left: 1px;
      fill: var(--inactive-clr);
      opacity: ${props => props.toggled ? '0' : '100'};
      
      transition: opacity ${props => props.transitionSpeed}s;
    }
    
    svg:nth-child(2)
    {
      position: absolute;
      
      height: 24px;
      width: 24px;
      
      top: 2px;
      left: 3px;
      
      fill: var(--inactive-clr);
      opacity: ${props => props.toggled ? '100' : '0'};
      
      transition: opacity ${props => props.transitionSpeed}s;
    }
    
`;

/* Primary Function */
function LMDMIcons(props)
{
    return (
        <>
            <VectorContainer
                toggled={props.toggled}
                transitionSpeed={props.transitionSpeed ? props.transitionSpeed : 0.2}
            >

                <LightModeVect/>
                <DarkModeVect/>

            </VectorContainer>
        </>
    );
}

export default LMDMIcons;