import React, { FunctionComponent } from 'react'
import styled from 'styled-components';

const ProfilePic: FunctionComponent = function () {
    return (
        <ProfileStyle></ProfileStyle>
    )
}

const ProfileStyle = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 9999px;
    background: #DDDDDD;
`

export default ProfilePic