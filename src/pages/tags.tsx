import React from 'react'
import type { HeadProps } from "gatsby"
import { Link, PageProps, graphql } from "gatsby"
import TagsHeader from '../Components/Templates/Tags.Header'
import Footer from '../Components/Organisms/Footer'
import { DataProps } from 'Types/Types';
import TagsList from '../Components/Templates/Tags.List'

const MainPage = ({ data }: PageProps) => {
    return (
        <main>
            <TagsHeader title={data.site.siteMetadata.title}></TagsHeader>
            <TagsList data={data}></TagsList>
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
query{
    site {
        siteMetadata {
            title
            description
            author
        }
    }
    allMdx {
        group(field: { frontmatter: { tags: SELECT } }) {
            fieldValue
            totalCount
        }
    }
}
`