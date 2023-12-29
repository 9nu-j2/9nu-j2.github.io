import React, { FunctionComponent } from 'react'
import { styled, keyframes } from 'styled-components';
import Nav from '../Organisms/Navbar'
import backg from '../../Statics/2.jpg'

type HProp = {
    title: string
}

const PostHeader: FunctionComponent<HProp> = function ({ title }) {
    return (
        <Header>
            <ImageStyle>
            </ImageStyle>
            <Nav title={title}></Nav>
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
    justify-content: space-between;
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