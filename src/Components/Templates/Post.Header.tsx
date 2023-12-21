import React, { FunctionComponent } from 'react'
import { styled } from 'styled-components';
import Nav from '../Organisms/Navbar'

type HProp = {
    title: string
}

const PostHeader: FunctionComponent<HProp> = function ({ title }) {
    return (
        <Header>
            <Nav title={title}></Nav>
        </Header>
    )
}

const Header = styled.div`
    width: 100%;
    height: 550px;
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export default PostHeader