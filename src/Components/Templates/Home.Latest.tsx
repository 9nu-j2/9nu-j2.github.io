import React from 'react'
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
        <main>
            <p>My cool posts will go in here</p>
            <ul>
                {
                    allMdx.nodes.map(
                        node => <li key={node.id}>
                            <h2>{node.frontmatter.title}</h2>
                            <p>Published: {node.frontmatter.datePublished}</p>
                            <p></p>
                        </li>
                    )
                }
            </ul>
        </main>
    )
};


export default LatestContents;