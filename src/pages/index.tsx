import React from 'react'
import type { HeadProps } from "gatsby"
import { PageProps, graphql } from "gatsby"
import HeaderTemplate from "../Components/Templates/Home.Header"
import Footer from '../Components/Organisms/Footer';
import { DataProps } from 'Types/Types';
import LatestContents from '../Components/Templates/Home.Latest';

const IndexRoute = ({ data: { site: { siteMetadata: {
  title, description, author
} }, allMdx } }: PageProps<DataProps>) => {
  return (
    <main>
      <HeaderTemplate title={title} description={description} author={author}></HeaderTemplate>
      <LatestContents allMdx={allMdx}></LatestContents>
      <Footer></Footer>
    </main>
  )
}

export default IndexRoute

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
    allMdx(sort: { frontmatter: { datePublished: DESC } }, limit: 5) {
      nodes {
          frontmatter {
              title
              datePublished(formatString: "YYYY.MM.D")
              author
              slug
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
