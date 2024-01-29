import React, { FunctionComponent } from 'react'
import { styled, keyframes } from 'styled-components';
import Nav from '../Organisms/Tags.Navbar'
import TagsList from '../Organisms/Tags.List'

const TagsHeader: FunctionComponent = ({ data }) => {
    return (
        <Header>
            <Nav></Nav>
            <TagsList data={data}></TagsList>
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