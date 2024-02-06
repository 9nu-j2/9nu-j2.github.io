import React, { FunctionComponent } from 'react'
import { styled, keyframes } from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Nav from '../Organisms/Navbar'
import AboutPost from '../Organisms/About.Post';

type HProp = {
    title: string;
    datePublished: string;
    data: any;
}

const style = {
    position: "absolute",
    zIndex: "-1",
    width: "100%",
    height: "100vh",
    backgroundAttachment: "scroll",
    filter: "brightness(0.67)"
}

const PostHeader: FunctionComponent<HProp> = function ({ title, datePublished, data }) {
    const image = getImage(data.mdx.frontmatter.hero_image)

    return (
        <Header>
            <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} style={style} imgStyle={{ overflow: "hidden", objectFit: "cover" }} />
            <Nav></Nav>
            <AboutPost title={title} datePublished={datePublished} />
        </Header>
    )
};

const Header = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export default PostHeader