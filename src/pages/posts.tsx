import React from 'react'
import type { HeadProps } from "gatsby"
import { Link, PageProps, graphql } from "gatsby"
import TagsHeader from '../Components/Templates/Tags.Header'
import Footer from '../Components/Organisms/Footer'
import { DataProps } from 'Types/Types';
import InfiniteScroll from '../Components/Organisms/Infinite.Scroll'

const MainPage = ({ data }: PageProps) => {
    return (
        <main>
            <TagsHeader data={data}></TagsHeader>
            <InfiniteScroll data={data}></InfiniteScroll>
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
        nodes {
            frontmatter {
                title
                datePublished(formatString: "YYYY.MM.D")
                author
                slug
                tags
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
                hero_image {
                    childImageSharp{
                        gatsbyImageData
                    }
                }
            }
            id
        }
    }
}
`