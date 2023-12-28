import React, { FunctionComponent } from 'react'
import { styled, keyframes } from 'styled-components';
import Nav from '../Organisms/Navbar'
import backg from '../../Statics/2.jpg'

type HProp = {
    title: string
}

const TagsHeader: FunctionComponent<HProp> = function ({ title }) {
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
    height: 550px;
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ImageStyle = styled.div`
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:760px;
    z-index:-1;
    background:url(${backg});
    background-size: 100%;
    animation: ${move} 2s linear infinite;
`

export default TagsHeader