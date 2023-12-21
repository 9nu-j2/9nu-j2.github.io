import React, { FunctionComponent } from 'react'
import styled from 'styled-components';

const ProfileName: FunctionComponent = function () {
    return (
        <ProfileStyle></ProfileStyle>
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