import React from 'react'
import type { HeadProps } from "gatsby"
import { PageProps, graphql } from "gatsby"
import HeaderTemplate from "../Components/Templates/Home.Header"
import Footer from '../Components/Organisms/Footer';
import { DataProps } from 'Types/Types';
import FrontTest from '../Components/Templates/Home.FrontTest';
import LatestContents from '../Components/Templates/Home.Latest';

const IndexRoute = ({ data: { site: { siteMetadata: {
  title, description, author
} }, allMdx } }: PageProps<DataProps>) => {
  return (
    <main>
      <HeaderTemplate title={title} description={description} author={author}></HeaderTemplate>
      <FrontTest></FrontTest>
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
    allMdx(sort: { frontmatter: { datePublished: DESC } }) {
      nodes {
          frontmatter {
              title
              datePublished(formatString: "YYYY-MM-D")
              author
              slug
          }
          id
      }
  }
}
`
