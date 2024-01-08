import * as React from 'react'
import { graphql } from 'gatsby'
import PostHeader from '../Components/Templates/Post.Header'
import PostBody from '../Components/Templates/Post.Body'
import { DataProps } from 'Types/Types'
import Footer from '../Components/Organisms/Footer'

const BlogPost = ({ data, children }) => {
    return (
        <div>
            <PostHeader title={data.mdx.frontmatter.title} datePublished={data.mdx.frontmatter.datePublished} data={data}></PostHeader>
            <PostBody children={children}></PostBody>
            <Footer></Footer>
        </div>
    )
}

export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>


export const query = graphql`
query ($id: String) {
    mdx(id: { eq: $id }) {
        frontmatter {
            title
            datePublished(formatString: "YYYY-MM-D")
            author
            slug
            hero_image_alt
            hero_image_credit_link
            hero_image_credit_text
            hero_image {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
        id
    }
}
`;

export default BlogPost;


