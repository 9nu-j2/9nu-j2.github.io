import React, { FunctionComponent } from 'react'
import styled from 'styled-components';

type MeProps = {
    author: string,
}

const ProfileName: FunctionComponent<MeProps> = function ({ author }) {
    return (
        <ProfileStyle>{author}</ProfileStyle>
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