import React, { FunctionComponent } from 'react'
import { styled } from 'styled-components';
import Nav from '../Organisms/Navbar';
import Introduction from '../Organisms/About.Me';
import { MetaProps } from 'Types/Types';

const HeaderTemplate: FunctionComponent<MetaProps> = function ({ title, description, author }) {
    return (
        <Header>
            <Nav title={title}></Nav>
            <Introduction description={description} author={author}></Introduction>
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

export default HeaderTemplate