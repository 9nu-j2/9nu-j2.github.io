import React, { FunctionComponent } from 'react'
import { styled, keyframes } from 'styled-components';
import Nav from '../Organisms/Navbar'
import TagsList from '../Organisms/Tags.List'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const TagsHeader: FunctionComponent = function ({ data }) {
    return (
        <Header>
            <Nav title={data.site.siteMetadata.title}></Nav>
            <TagsList data={data}></TagsList>
        </Header>
    )
}

const Header = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export default TagsHeader