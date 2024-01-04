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
    height: 20px;
    width: 320px;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default ProfileName