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
                        node => <LiContainer key={node.id}>
                            <Drawer title={node.frontmatter.title} date={node.frontmatter.datePublished} link={node.frontmatter.slug}></Drawer>
                        </LiContainer>
                    )
                }
                <MoreContainer>
                    <button>더보기</button>
                </MoreContainer>
            </LatestListContainer>
        </LatestContainer>
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

const MoreContainer = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`



export default LatestContents;