import React from 'react'
import type { HeadProps } from "gatsby"
import { Link, PageProps, graphql } from "gatsby"
import TagsHeader from '../Components/Templates/Tags.Header'
import Footer from '../Components/Organisms/Footer'
import { DataProps } from 'Types/Types';

const MainPage = ({ data }: PageProps) => {
    return (
        <main>
            <TagsHeader data={data}></TagsHeader>
            {/* 게시글 무한 로딩 */}
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