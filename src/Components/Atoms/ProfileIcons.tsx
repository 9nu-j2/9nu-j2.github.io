import React, { FunctionComponent } from 'react'
import styled from 'styled-components';

const ProfileIcons: FunctionComponent = function () {
    return (
        <ProfileStyle>
            <p>1</p><p>2</p><p>3</p><p>4</p>
        </ProfileStyle>
    )
}

const ProfileStyle = styled.div`
    height: 30px;
    width: 180px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export default ProfileIcons;