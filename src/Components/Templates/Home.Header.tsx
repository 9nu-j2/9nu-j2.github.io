import React, { FunctionComponent, Suspense, useEffect, useRef, useState } from 'react'
import { styled, keyframes } from 'styled-components';
import Nav from '../Organisms/Navbar';
import { MetaProps } from 'Types/Types';
import { Canvas } from '@react-three/fiber'
import { Model } from "../Organisms/3dpea"
import { Environment, ContactShadows, OrbitControls } from "@react-three/drei"

const HeaderTemplate: FunctionComponent<MetaProps> = function ({ title, description, author }) {
    return (
        <Header>
            <Container>
                <Canvas camera={{ position: [-5, 0, -15], fov: 55 }}>
                    <pointLight position={[10, 10, 10]} intensity={1.5} />
                    <Suspense fallback={null}>
                        <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
                            <Model description={description} author={author} />
                        </group>
                        <Environment preset="city" />
                    </Suspense>
                    <ContactShadows position={[0, -3.0, 0]} scale={20} blur={2} far={4.5} />
                    <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
                    <Environment preset="city" />
                </Canvas>
            </Container>
            <Nav title={title}></Nav>
            <TitlePart>
                Welcome<span style={{ fontSize: '0.4em' }}></span>
                <br />
                Jun9's<span></span>
            </TitlePart>
            <SubTitlePart>
                Solving<span style={{ fontSize: '0.4em' }}></span>
                <br />
                <span>Log</span>
            </SubTitlePart>
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
    background: #2c4866;
`

const Container = styled.div`
    position: absolute;
    transform: translate(-50%, -50%, 0%);
    width:100%;
    height: 100vh;
    z-index:1;
`

const TitlePart = styled.div`
    position: absolute;
    top: 200px;
    left: 15%;
    font-weight: 900;
    font-size: 5em;
    margin: 0;
    color: peru;
    line-height: 0.6em;
    letter-spacing: -2px;
    text-align: left;
`

const SubTitlePart = styled.div`
    position: absolute;
    top: 360px;
    right: 15%;
    font-weight: 900;
    font-size: 5em;
    margin: 0;
    color: peru;
    line-height: 0.6em;
    letter-spacing: -2px;
    text-align: right;
`

export default HeaderTemplate