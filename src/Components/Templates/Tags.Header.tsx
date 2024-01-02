import React, { FunctionComponent } from 'react'
import { styled, keyframes } from 'styled-components';
import Nav from '../Organisms/Navbar'

type HProp = {
    title: string
}

const TagsHeader: FunctionComponent<HProp> = function ({ title }) {
    return (
        <Header>
            <ImageStyle>
            </ImageStyle>
            <Nav title={title}></Nav>
        </Header>
    )
}

const Header = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ImageStyle = styled.div`
    position: absolute;
    transform: translate(-50%, -50%, 0%);
    width:100%;
    height: 100vh;
    z-index:-1;
`

export default TagsHeader