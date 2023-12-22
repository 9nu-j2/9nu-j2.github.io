import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import ProfileName from '../Atoms/ProfileName';
import ProfileDescription from '../Atoms/ProfileDescription';
import ProfileIcons from '../Atoms/ProfileIcons';

type MeProps = {
    description: string,
    author: string,
}

const Context: FunctionComponent<MeProps> = function ({ description, author }) {
    return <ContextStyle>
        <ProfileName author={author}></ProfileName>
        <ProfileDescription description={description}></ProfileDescription>
        <ProfileIcons></ProfileIcons>
    </ContextStyle>
}

const ContextStyle = styled.div`
    width: 400px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default Context;