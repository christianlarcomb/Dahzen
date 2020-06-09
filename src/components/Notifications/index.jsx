import React from 'react';
import styled from 'styled-components'
import ee from 'event-emitter'

import { ReactComponent as AlertIcon } from '../../assets/vectors/warning.svg'
import { ReactComponent as ExitIcon } from '../../assets/vectors/cross.svg';

const Container = styled.div`

    /* Mobile */
    @media screen and (max-width: 760px)
    {
        background-color: var(--cream-back);

        color: gray;
        position: fixed;
        bottom: ${props => props.toggled ? '16' : '-160'}px;
        opacity: ${props => props.toggled ? '100' : '0'};
        left: 16px;
        z-index: 999;
        transition: bottom 0.25s ease, opacity 0.25s ease;
        width: calc(100% - 32px);
        
        border-radius: 10px;
        border-color: #dfdfdf;
        border-width: 1.5px;
        border-style: solid;
        
        -webkit-filter: drop-shadow(0px 25px 10px rgba(0, 0, 0, 0.09));
        filter: drop-shadow(0px 25px 10px rgba(0, 0, 0, 0.09));
        
        display: grid;
        grid-template-rows: 50px 1fr;
    }
    
    /* Desktop */
    @media screen and (min-width: 760px)
    {
        background-color: var(--cream-back);
        
        color: gray;
        position: fixed;
        bottom: ${props => props.toggled ? '16' : '-160'}px;
        opacity: ${props => props.toggled ? '100' : '0'};
        left: 16px;
        z-index: 999;
        transition: bottom 0.25s ease, opacity 0.25s ease;
        width: 350px;
        
        border-radius: 10px;
        border-color: #dfdfdf;
        border-width: 1.5px;
        border-style: solid;
        
        -webkit-filter: drop-shadow(0px 25px 10px rgba(0, 0, 0, 0.09));
        filter: drop-shadow(0px 25px 10px rgba(0, 0, 0, 0.09));
        
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
    background-color: #d7d7d7;
    border-radius: 100%;
    margin: 0 auto;
    display: grid;
    place-items: center;
    cursor: pointer;
    
    svg:nth-child(1)
    {
      height: 14px;
      width: 14px;
      fill: #737373;
      opacity:60%;
    }
`;

const emitter = new ee();

export const notify = (title, msg) =>
{
    emitter.emit('notification', title, msg)
}

export default class Notifications extends React.Component
{

    constructor(props)
    {
        super(props);

        this.state = {

            toggled: false,

            contents: {
                icon: '',
                title: '',
                msg: ''
            }
        }

        this.timeout = null;

        emitter.on('notification', (type, msg) => {
            this.onShow(type, msg)
        })
    }

    /* Determines how the showing of the notification functions: prevents looping or spammed notifications */
    onShow = (title, msg) =>
    {
        if(this.timeout)
        {

            console.log('this fired')

            clearTimeout(this.timeout);

            this.setState({
                toggled: false
            }, () => {
                this.timeout = setTimeout(() => {
                    this.showNotification(title, msg)
                }, 250)
            })

        } else {
            this.showNotification(title, msg)
        }
    }

    /* Sets the state of the notification and displays it: Implements a timeout */
    showNotification = (title, msg) =>
    {
        this.setState({

            toggled: true,

            contents:
                {
                    title: title,
                    msg: msg
                }

        }, () => {
            this.timeout = setTimeout(() => {
                this.setState({ toggled: false })
            }, 5000)
        })
    }

    /* Renders the notification on the DOM */
    render()
    {
        return(
            <Container toggled={this.state.toggled}>

                <Header>
                    <AlertIcon style={{height: 30, width: 30, 'margin': '0 auto', 'align-self':'center'}}/>

                    <span>{this.state.contents.title}</span>

                    <NotifExitBtn onClick={() => this.setState({ toggled: false })}>
                        <ExitIcon/>
                    </NotifExitBtn>
                </Header>

                <Message>{this.state.contents.msg}</Message>

            </Container>
        );
    }

}