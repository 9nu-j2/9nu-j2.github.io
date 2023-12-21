import React, { FunctionComponent } from 'react'
import { PageProps, graphql } from "gatsby"
import styled from 'styled-components';
import { DataProps } from 'Types/Types';

const ProfileDescription: FunctionComponent = () => {
    return (
        <ProfileStyle></ProfileStyle>
    )
}

const ProfileStyle = styled.div`
    height: 40px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default ProfileDescription