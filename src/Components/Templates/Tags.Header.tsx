import React, { FunctionComponent } from 'react'
import { styled, keyframes } from 'styled-components';
import Nav from '../Organisms/Navbar'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

type HProp = {
    title: string
}

const TagsHeader: FunctionComponent<HProp> = function ({ title }) {
    return (
        <Header>
            <Nav title={title}></Nav>
        </Header>
    )
}

const Header = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export default TagsHeader