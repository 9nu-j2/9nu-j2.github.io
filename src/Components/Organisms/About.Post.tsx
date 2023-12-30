import React from "react";
import styled from "styled-components";

interface PostProps {
    title: string;
    datePublished: string;
}

const AboutPost = ({ title, datePublished }: PostProps) => {
    return (
        <Container>
            <p>{datePublished} 발행됨</p>
            <PostH>{title}</PostH>
            <p>내용 요약입니다</p>
        </Container>
    )
};

const Container = styled.div`
    background: transparent;
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 500px;
`;

const PostH = styled.h1`
    margin:0;
    font-weight: 800;
    font-size: 2.6rem;
`


export default AboutPost;