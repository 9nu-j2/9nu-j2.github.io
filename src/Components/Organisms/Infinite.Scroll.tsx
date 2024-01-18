import React from 'react'
import styled from 'styled-components';
import { useRecoilState, useResetRecoilState } from "recoil";
import { selectedCategory } from "../../states/atom";
import useInfiniteScroll from '../../Hooks/useInfiniteScroll';
import Drawer from '../Organisms/Drawer';

const InfiniteScroll = ({ data }) => {
    const posts = data.allMdx.nodes
    const [category, setCategory] = useRecoilState(selectedCategory);
    const { containerRef, postList } = useInfiniteScroll(category, posts)
    return (
        <LatestListContainer ref={containerRef}>
            {
                postList.map(
                    (node) => (
                        <LiContainer key={node.id}>
                            <Drawer title={node.frontmatter.title} date={node.frontmatter.datePublished} link={node.frontmatter.slug} thumnail={node.frontmatter.hero_image} thumnailAlt={node.frontmatter.hero_image_alt}></Drawer>
                        </LiContainer>
                    )
                )
            }
        </LatestListContainer>)
}

const LatestListContainer = styled.ul`
    width: 100vw;
    list-style-type: none;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
`

const LiContainer = styled.li`
    padding:60px 0 0 0;
    margin:0;
`

export default InfiniteScroll