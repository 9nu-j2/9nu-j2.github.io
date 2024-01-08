import React from 'react'
import { styled, keyframes } from 'styled-components';
import Drawer from '../Organisms/Drawer';

type BlogProps = {
    allMdx: {
        nodes: {
            frontmatter: {
                title: string;
                datePublished: string;
                author: string;
                slug: string;
            }
            id: string;
        }
    }
}

const LatestContents = ({ allMdx }: BlogProps) => {
    return (
        <LatestContainer>
            <LatestListContainer>
                <DividerText>최근 게시물</DividerText>
                {
                    allMdx.nodes.map(
                        (node) => (
                            <LiContainer key={node.id}>
                                <Drawer title={node.frontmatter.title} date={node.frontmatter.datePublished} link={node.frontmatter.slug} thumnail={node.frontmatter.hero_image} thumnailAlt={node.frontmatter.hero_image_alt}></Drawer>
                            </LiContainer>
                        )
                    )
                }
            </LatestListContainer>
        </LatestContainer >
    )
};

const LatestContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 100px;
`

const LatestListContainer = styled.ul`
    width: 770px;
    list-style-type: none;
`

const LiContainer = styled.li`
    padding:60px 0 0 0;
    margin:0;
`

const DividerText = styled.h3`
    color: #5a5a5a;
`

export default LatestContents;