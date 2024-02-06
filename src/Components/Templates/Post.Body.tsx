import React from "react";
import styled from "styled-components";
import { MDXProvider } from "@mdx-js/react"

interface PostBodyProps {
    children: JSX.Element;
}

const PostBody = ({ children }: PostBodyProps) => {

    return (
        <Container>
            <MDXProvider>
                <MdxPart>
                    {children}
                </MdxPart>
            </MDXProvider>
        </Container>
    )
};

const Container = styled.div`
    background: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-attachment: "fixed";
`;

const MdxPart = styled.div`
    width: 700px;
    padding-top: 170px;
    padding-bottom: 100px;
`

export default PostBody;