import React, { FunctionComponent } from 'react'
import styled, { keyframes } from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const ProfileImg: FunctionComponent = function () {
    return (
        <ProfileStyle>
            <StaticImage src="../../Statics/1.jpeg" alt="Profile Image" width={180} height={180} />
        </ProfileStyle>
    )
}

const ProfileStyle = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin-top: 10px;
    margin-bottom: 10px;
`

export default ProfileImg