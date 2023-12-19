import React, { FunctionComponent } from 'react'
import { styled } from 'styled-components';
import Nav from '../Organisms/Navbar';
import Introduction from '../Organisms/About.Me';

type DataProps = {
    site: {
        siteMetadata: {
            title: string,
            description: string,
            author: string,
        }
    }
}

const HeaderTemplate: FunctionComponent<DataProps> = function ({ site }) {
    return (
        <Header>
            <Nav></Nav>
            <Introduction site={site}></Introduction>
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