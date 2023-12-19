import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import Title from '../Atoms/Blog.title';
import Categories from '../Molecules/Categories';

const Nav: FunctionComponent = function () {
    return (
        <Navi>
            <Title></Title>
            <Categories></Categories>
        </Navi>
    )
}

const Navi = styled.div`
    display: flex;
    justify-content: space-between;
    width: 950px;
    height: 40px;
`;

export default Nav;