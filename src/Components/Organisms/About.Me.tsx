import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import ProfilePic from '../Atoms/ProfilePhoto';
import Context from '../Molecules/Profile.Context';

const Introduction: FunctionComponent = function () {
    return <IntroBox>
        <ProfilePic></ProfilePic>
        <Context></Context>
    </IntroBox>
}

const IntroBox = styled.div`
    width: 400px;
    
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
`

export default Introduction