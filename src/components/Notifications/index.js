import React from 'react';
import styled from 'styled-components'
import ee from 'event-emitter'

import { ReactComponent as AlertIcon } from '../../assets/vectors/warning.svg'
import { ReactComponent as ExitIcon } from '../../assets/vectors/cross.svg';

const Container = styled.div`

    /* Mobile */
    @media screen and (max-width: 760px)
    {
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(50px) saturate(250%);
        color: white;
        position: fixed;
        bottom: ${props => props.bottom}px;
        opacity: ${props => props.opacity}%;
        left: 16px;
        z-index: 999;
        transition: bottom 0.25s ease;
        width: calc(100% - 32px);
        
        border-radius: 10px;
        display: grid;
        grid-template-rows: 50px 1fr;
    }
    
    /* Desktop */
    @media screen and (min-width: 760px)
    {
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(50px) saturate(250%);
        color: white;
        position: fixed;
        bottom: ${props => props.bottom}px;
        opacity: ${props => props.opacity}%;
        left: 16px;
        z-index: 999;
        transition: bottom 0.25s ease;
        width: 350px;
        
        border-radius: 10px;
        display: grid;
        grid-template-rows: 50px 1fr;
    }
    
`;

const Header = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    align-items: center;
    font-size: 20px;
`;

const Message = styled.span`
    font-size: 18px;
    margin: 0 12px;
    opacity: 80%;
    padding-bottom: 12px;
`;

const NotifExitBtn = styled.div`
    height: 32px;
    width: 32px;
    background-color: rgba(200, 200 ,200, 0.4);
    border-radius: 100%;
    margin: 0 auto;
    display: grid;
    place-items: center;
    cursor: pointer;
`;

const emitter = new ee();

export const notify = (type, msg) =>
{
    emitter.emit('notification', type, msg)
}

export default class Notifications extends React.Component
{

    constructor(props)
    {
        super(props);

        this.state = {
            bottom: -200,
            opacity: 40,
            type: '',
            msg: ''
        }

        this.timeout = null;

        emitter.on('notification', (type, msg) => {
            this.onShow(type, msg)
        })

    }

    onShow = (type, msg) =>
    {

        if(this.timeout)
        {

            console.log('this fired')

            clearTimeout(this.timeout);

            this.setState({ bottom: -125 , opacity: 1}, () => {
                this.timeout = setTimeout(() => {
                    this.showNotification(type, msg)
                }, 250)
            })

        } else {
            this.showNotification(type, msg)
        }
    }

    showNotification = (type, msg) =>
    {
        this.setState({
            bottom: 16,
            opacity: 100,
            type: type,
            msg: msg
        }, () => {
            this.timeout = setTimeout(() => {
                this.setState({
                    bottom: -125,
                    opacity: 40
                })
            }, 5000)
        })
    }

    render()
    {
        return(
            <Container bottom={this.state.bottom} opacity={this.state.opacity}>
                <Header>
                    <AlertIcon style={{height: 30, width: 30, 'margin': '0 auto', 'align-self':'center'}}/>
                    <span>Heads up!</span>
                    <NotifExitBtn onClick={() => this.setState({bottom: -125, opacity: 30})}>
                        <ExitIcon style={{height: "14px", width: "14px", fill: "white", opacity:'60%'}}/>
                    </NotifExitBtn>
                </Header>
                <Message>{this.state.msg}</Message>
            </Container>
        );
    }

}