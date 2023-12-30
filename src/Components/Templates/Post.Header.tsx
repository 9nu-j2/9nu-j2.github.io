import React, { FunctionComponent } from 'react'
import { styled, keyframes } from 'styled-components';
import Nav from '../Organisms/Navbar'
import backg from '../../Statics/2.jpg'
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
}

const move = keyframes`
    0%{
        background-color: rgba( 255, 255, 255, 0.1 );
    }
    35%{
        background-color: rgba( 255, 255, 255, 0.2 );
    }
    70%{
        background-color: rgba( 255, 255, 255, 0.3 );
    }
    100%{
        background-color: rgba( 255, 255, 255, 0.5 );
    }
`

const Header = styled.div`
    width: 100%;
    height: 850px;
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const ImageStyle = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    width:100%;
    height:850px;
    z-index:-1;
    background:url(${backg});
    background-size: cover;
    animation: ${move} 2s ease-out forwards;
`

export default PostHeader