import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import ProfileName from '../Atoms/ProfileName';
import ProfileDescription from '../Atoms/ProfileDescription';
import ProfileIcons from '../Atoms/ProfileIcons';

const Context: FunctionComponent = function () {
    return <ContextStyle>
        <ProfileName></ProfileName>
        <ProfileDescription></ProfileDescription>
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