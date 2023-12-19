import React, { FunctionComponent } from 'react'
import type { HeadProps } from "gatsby"
import { graphql, PageProps } from "gatsby"
import HeaderTemplate from "../Components/Templates/Home.Template"

type DataProps = {
  site: {
    siteMetadata: {
      title: string,
      description: string,
      author: string,
    }
  }
}

const IndexRoute: FunctionComponent<DataProps> = function ({ site }) {
  return (
    <main>
      <HeaderTemplate site={site}></HeaderTemplate>
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
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`