import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import ProfileName from '../Atoms/ProfileName';
import ProfileDescription from '../Atoms/ProfileDescription';
import ProfileIcons from '../Atoms/ProfileIcons';

type DataProps = {
    site: {
        siteMetadata: {
            title: string,
            description: string,
            author: string,
        }
    }
}

const Context: FunctionComponent<DataProps> = function ({ site }) {
    return <ContextStyle>
        <ProfileName site={site}></ProfileName>
        <ProfileDescription site={site}></ProfileDescription>
        <ProfileIcons></ProfileIcons>
    </ContextStyle>
}

const ContextStyle = styled.div`
    width: 300px;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default Context;