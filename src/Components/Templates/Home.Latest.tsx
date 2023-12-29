import React from 'react'
import { Link } from "gatsby"
import { styled, keyframes } from 'styled-components';

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

                {
                    allMdx.nodes.map(
                        node => <li key={node.id}>
                            <h2><Link to={`/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link></h2>
                            <p>Published: {node.frontmatter.datePublished}</p>
                            <p></p>
                        </li>
                    )
                }
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
    width: 652px;
`


export default LatestContents;