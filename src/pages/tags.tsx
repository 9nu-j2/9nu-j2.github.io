import React from 'react'
import type { HeadProps } from "gatsby"
import { PageProps, graphql } from "gatsby"
import { DataProps } from 'Types/Types'
import TagsHeader from '../Components/Templates/Tags.Header'
import Footer from '../Components/Organisms/Footer'

const MainPage = ({ data: { site: {
    siteMetadata: {
        title
    }
} } }: PageProps<DataProps>) => {
    return (
        <main>
            <TagsHeader title={title}></TagsHeader>
            <Footer></Footer>
        </main>
    )
}

export default MainPage

export function Head(props: HeadProps<DataProps>) {
    return (
        <title>{props.data.site.siteMetadata.author}</title>
    )
}

export const query = graphql`
{
    site {
        siteMetadata {
            title
            description
            author
        }
    }
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