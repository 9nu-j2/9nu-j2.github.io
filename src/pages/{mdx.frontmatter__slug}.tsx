import * as React from 'react'
import { graphql } from 'gatsby'
import PostHeader from '../Components/Templates/Post.Header'
import PostBody from '../Components/Templates/Post.Body'
import { DataProps } from 'Types/Types'
import Footer from '../Components/Organisms/Footer'

// type BlogProps = {
//     data: {
//         mdx: {
//             frontmatter: {
//                 title: string,
//                 datePublished: string,
//                 author: string,
//                 slug: string,
//             }
//             id: string;
//         }
//     },
//     children: any;
// }

const BlogPost = ({ data, children }) => {
    return (
        <div>
            <PostHeader title={data.mdx.frontmatter.title} datePublished={data.mdx.frontmatter.datePublished}></PostHeader>
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
        }
        id
    }
}
`;

export default BlogPost;


