import React, { FunctionComponent } from 'react'
import styled from 'styled-components';

type MeProps = {
    description: string,
}

const ProfileDescription: FunctionComponent<MeProps> = ({ description }) => {
    return (
        <ProfileStyle>{description}</ProfileStyle>
    )
}

const ProfileStyle = styled.div`
    height: 45px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default ProfileDescription