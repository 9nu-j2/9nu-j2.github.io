import * as React from 'react'
import { PageProps, graphql } from 'gatsby'

type BlogProps = {
    allFile: {
        nodes: {
            name: {

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
                    data.allFile.nodes.map(
                        node => <li key={node.name}>{node.name}</li>
                    )
                }
            </ul>
        </main>
    )
}

export const query = graphql`
query {
    allFile {
        nodes {
            name
        }
    }
}
`



export default BlogPage