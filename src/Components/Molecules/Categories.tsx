import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import Menu from '../Atoms/Menu';

const Categories: FunctionComponent = function () {
    return (
        <CategoriesPart>
            <Menu context={"Home"} link={"/"}>
            </Menu>
            <Menu context={"Category"} link={"/tags"}>
            </Menu>
        </CategoriesPart>
    );
}

const CategoriesPart = styled.div`
    width: 172px;
    height: 40px;
    display: flex;
    justify-content: space-between;
`

export default Categories