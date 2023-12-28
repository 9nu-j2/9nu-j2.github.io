import * as React from 'react'
import { PageProps, graphql } from 'gatsby'

type BlogProps = {
    allMdx: {
        nodes: {
            frontmatter: {
                title: string,
                datePublished: string,
                author: string,
                slug: string,
            }
        }
    }
}

const BlogPage = ({ data }: PageProps<BlogProps>) => {
    return (
        <main>
            <p>My cool posts will go in here</p>
            <ul>
                {
                    data.allMdx.nodes.map(
                        node => <li key={node.frontmatter.title}>{node.frontmatter.title}</li>
                    )
                }
            </ul>
        </main>
    )
}

export const query = graphql`
query {
    allMdx {
        nodes {
            frontmatter {
                title
                datePublished(formatString: "MMMM D, YYYY")
                author
                slug
            }
            id
        }
    }
}
`

export default BlogPage