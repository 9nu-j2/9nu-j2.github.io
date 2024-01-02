import React, { Suspense, FunctionComponent } from 'react'
import { styled, keyframes } from 'styled-components';
import Nav from '../Organisms/Navbar';
import Introduction from '../Organisms/About.Me';
import { MetaProps } from 'Types/Types';
import { Canvas } from "@react-three/fiber";


const HeaderTemplate: FunctionComponent<MetaProps> = function ({ title, description, author }) {
    return (
        <Header>
            <Container>
                <Canvas dpr={[1.5, 2]} linear shadows>
                </Canvas>
            </Container>
            <Nav title={title}></Nav>
            <TitlePart>
                Jun9 <span style={{ fontSize: '0.4em' }}></span>
                <br />
                <span>Blog</span>
            </TitlePart>
            {/* <Introduction description={description} author={author}></Introduction> */}
        </Header>
    )
}

const Header = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const Container = styled.div`
    position: absolute;
    /* top: 50%;
    left: 50%; */
    transform: translate(-50%, -50%, 0%);
    width:100%;
    height: 100vh;
    z-index:-1;
`

const TitlePart = styled.div`
    position: absolute;
    top: 120px;
    left: 300px;
    font-weight: 900;
    font-size: 5em;
    margin: 0;
    color: peru;
    line-height: 0.6em;
    letter-spacing: -2px;
    text-align: left;
`

export default HeaderTemplate