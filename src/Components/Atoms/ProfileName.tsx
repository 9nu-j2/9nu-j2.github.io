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

const ProfileName: FunctionComponent<DataProps> = function ({ site }) {
    return (
        <ProfileStyle>{site.siteMetadata.author}</ProfileStyle>
    )
}

const ProfileStyle = styled.div`
    height: 40px;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default ProfileName