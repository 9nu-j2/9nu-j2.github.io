import React from "react";
import styled from "styled-components";
import { MDXProvider } from "@mdx-js/react"

interface PostBodyProps {
    children: JSX.Element;
}

const PostBody = ({ children }: PostBodyProps) => {

    return (
        <MDXProvider>
            <Container>
                <MdxPart>
                    {children}
                </MdxPart>
            </Container>
        </MDXProvider>
    )
};

const Container = styled.div`
    background: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MdxPart = styled.div`
    width: 652px;
    padding-top: 170px;
    padding-bottom: 100px;
`

export default PostBody;