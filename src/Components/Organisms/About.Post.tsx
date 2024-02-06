import React from "react";
import styled from "styled-components";
import { StaticImage } from 'gatsby-plugin-image';

interface PostProps {
    title: string;
    datePublished: string;
    summary: string;
}

const AboutPost = ({ title, datePublished, summary }: PostProps) => {
    return (
        <Container>
            <PostD><div>{datePublished}</div><StaticImage src="../../Statics/Icons/time.png" alt="onTime" width={21} /></PostD>
            <PostH>{title}</PostH>
            <PostContents>{summary}</PostContents>
        </Container>
    )
};

const Container = styled.div`
    background: transparent;
    width: 600px;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 20px;
    padding-bottom: 150px;
`;

const PostD = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
    text-shadow: 0 0 0.2rem black;
    width: 125px;
`

const PostH = styled.h1`
    margin:0;
    font-weight: 800;
    font-size: 2.6rem;
    color: white;
    text-shadow: 0 0 0.2rem black;
`

const PostContents = styled.p`
    color: white;
    text-shadow: 0 0 0.2rem black;
`


export default AboutPost;