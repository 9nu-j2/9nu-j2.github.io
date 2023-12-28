import React, { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components';

type TitleProps = {
    children: ReactNode;
    context: string
    link: string
}

const Menu: FunctionComponent<TitleProps> = ({ context, link }) => {
    return (
        <MenuItem>
            <FontStyle href={`${link}`}>{context}</FontStyle>
        </MenuItem >
    )
}

const MenuItem = styled.div`
    width: 70px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FontStyle = styled.a`
    font-weight: 700;
    color: white;
    opacity: 0.8;
    text-decoration: none;
    text-shadow: 0 0 0.2rem black;

    &:hover {
        opacity: 1;
    }
`

export default Menu