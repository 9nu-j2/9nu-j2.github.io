import React, { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';

type TitleProps = {
    children: ReactNode;
    context: string
    link: string
}

const Menu: FunctionComponent<TitleProps> = ({ context, link }) => {
    return (
        <MenuItem>
            <Link to={`${link}`}>{context}</Link>
        </MenuItem >
    )
}

const MenuItem = styled.div`
    width: 60px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Menu