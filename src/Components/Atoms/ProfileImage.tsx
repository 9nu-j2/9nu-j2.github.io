import React, { FunctionComponent } from 'react'
import styled from 'styled-components';

const PROFILE_IMAGE_LINK = ""

const ProfileImg: FunctionComponent = function () {
    return (
        <ProfileStyle src={PROFILE_IMAGE_LINK} alt="Profile Image"></ProfileStyle>
    )
}

const ProfileStyle = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 50%;
`

export default ProfileImg