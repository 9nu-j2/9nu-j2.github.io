import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import ProfilePic from '../Atoms/ProfilePhoto';
import Context from '../Molecules/Profile.Context';

type DataProps = {
    site: {
        siteMetadata: {
            title: string,
            description: string,
            author: string,
        }
    }
}

const Introduction: FunctionComponent<DataProps> = function ({ site }) {
    return <IntroBox>
        <ProfilePic></ProfilePic>
        <Context site={site}></Context>
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