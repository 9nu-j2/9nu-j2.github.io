import React, { FunctionComponent } from 'react'
import { styled, keyframes } from 'styled-components';
import Nav from '../Organisms/Navbar';
import Introduction from '../Organisms/About.Me';
import { MetaProps } from 'Types/Types';
import backg from "../../Statics/4.jpeg"


const HeaderTemplate: FunctionComponent<MetaProps> = function ({ title, description, author }) {
    return (
        <Header>
            <ImageStyle></ImageStyle>
            <Nav title={title}></Nav>
            <Introduction description={description} author={author}></Introduction>
        </Header>
    )
}

const move = keyframes`
    from{
        opacity:0;
        scale: 1.03;
    }
    to{
        opacity:0.8;
        scale: 1;
    }
`

const Header = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`

const ImageStyle = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    width:100%;
    height:600px;
    z-index:-1;
    background:url(${backg});
    background-size: cover;
    animation: ${move} 2s ease-out forwards;
`

export default HeaderTemplate