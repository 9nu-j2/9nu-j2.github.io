import React, { FunctionComponent } from 'react'
import { styled, keyframes } from 'styled-components';
import Nav from '../Organisms/Navbar'
import AboutPost from '../Organisms/About.Post';

type HProp = {
    title: string;
    datePublished: string;
}

const PostHeader: FunctionComponent<HProp> = function ({ title, datePublished }) {
    return (
        <Header>
            <ImageStyle>
            </ImageStyle>
            <Nav title={"아직미정"}></Nav>
            <AboutPost title={title} datePublished={datePublished} />
        </Header>
    )
};

const Header = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ImageStyle = styled.div`
    position: absolute;
    transform: translate(-50%, -50%, 0%);
    width:100%;
    height: 100vh;
    z-index:-1;
`

export default PostHeader