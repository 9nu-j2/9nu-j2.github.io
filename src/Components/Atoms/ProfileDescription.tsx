import React, { FunctionComponent } from 'react'
import styled, { keyframes } from 'styled-components';

type MeProps = {
    description: string,
}

const ProfileDescription: FunctionComponent<MeProps> = ({ description }) => {
    return (
        <ProfileStyle><CursorStyle>{description}</CursorStyle></ProfileStyle>
    )
}

const blink = keyframes`
    50% {
        border-color: transparent;
    }
`

const typing = keyframes`
    0% {
        width:0;
    }
    
`

const ProfileStyle = styled.div`
    height: 45px;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const CursorStyle = styled.div`
    width: 100%;
    animation: ${typing} 3s steps(30, jump-start), ${blink} .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid grey;
`

export default ProfileDescription