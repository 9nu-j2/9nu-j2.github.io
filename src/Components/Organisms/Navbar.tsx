import React, { FunctionComponent, useState, useEffect } from 'react'
import styled from 'styled-components';
import Title from '../Atoms/Blog.title';
import Categories from '../Molecules/Categories';

type TitleData = {
    title: string
}

const Nav: FunctionComponent<TitleData> = function ({ title }) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [headerColor, setHeaderColor] = useState("#ffffff");
    const [bottomBorder, setBottomBorder] = useState("transparent");
    const [vh, setVh] = useState(0);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    }, []);

    useEffect(() => {
        setVh(window.innerHeight * 0.01);
    }, [scrollPosition]);

    useEffect(() => {
        if (scrollPosition <= 100 * vh) {
            setHeaderColor("transparent");
            setBottomBorder("none");
        } else {
            setHeaderColor("#ffffff");
            setBottomBorder("#DFDFDF");
        }
    }, [scrollPosition]);
    return (
        <NavStyle headercolor={headerColor} bottom={bottomBorder}>
            <RealNav>
                <Title title={title}></Title>
                <Categories></Categories>
            </RealNav>
        </NavStyle>
    )
}

const NavStyle = styled.nav<{ headercolor: string, bottom: string }>`
    position: fixed;
    top:0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100vw;
    height: 60px;
    z-index:3;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid ${(props) => props.bottom};
    border-width: 0 0 1px 0;
    background-color: ${(props) => props.headercolor};
    transition: background-color 0.1s ease-out;
`;

const RealNav = styled.div`
    width: 100%;
    height: 40px;
    max-width: 980px;
    display: flex;
    justify-content: space-between;
`

export default Nav;