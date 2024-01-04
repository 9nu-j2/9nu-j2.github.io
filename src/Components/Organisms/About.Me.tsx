import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import ProfilePic from '../Atoms/ProfileImage';
import Context from '../Molecules/Profile.Context';

type MeProps = {
    description: string,
    author: string,
}

const Introduction: FunctionComponent<MeProps> = function ({ description, author }) {
    return <IntroBox>
        <ProfilePic></ProfilePic>
        <Context description={description} author={author}></Context>
    </IntroBox>
}

const IntroBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    background: white;
    border-radius: 5px;
`

export default Introduction