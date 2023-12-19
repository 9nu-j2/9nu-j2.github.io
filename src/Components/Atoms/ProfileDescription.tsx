import React, { FunctionComponent } from 'react'
import styled from 'styled-components';

type DataProps = {
    site: {
        siteMetadata: {
            title: string,
            description: string,
            author: string,
        }
    }
}

const ProfileDescription: FunctionComponent<DataProps> = function ({ site }) {
    return (
        <ProfileStyle>{site.siteMetadata.description}</ProfileStyle>
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