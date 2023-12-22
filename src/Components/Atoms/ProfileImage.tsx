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

const move = keyframes`
    from{
        box-shadow: none;
        opacity:0;
    }
    to{
        box-shadow: -24px -10px 70px -3px #666666;
        opacity:1;
    }
`

const ProfileStyle = styled.div`
    width: 160px;
    height: 160px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: -24px -10px 70px -3px #666666;
    animation: ${move} 2s ease-out forwards;
`

export default ProfileImg