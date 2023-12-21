import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import Title from '../Atoms/Blog.title';
import Categories from '../Molecules/Categories';

type TitleData = {
    title: string
}

const Nav: FunctionComponent<TitleData> = function ({ title }) {
    return (
        <NavStyle>
            <Title title={title}></Title>
            <Categories></Categories>
        </NavStyle>
    )
}

const NavStyle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 950px;
    height: 40px;
`;

export default Nav;