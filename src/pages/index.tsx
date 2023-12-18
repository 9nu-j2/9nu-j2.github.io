import * as React from "react"
import type { HeadProps } from "gatsby"
import { graphql, PageProps } from "gatsby"

type DataProps = {
  site: {
    siteMetadata: {
      title: string,
      description: string,
      author: string,
    }
  }
}

const IndexRoute = ({ data: { site } }: PageProps<DataProps>) => {
  return (
    <main>
      <h1>{site.siteMetadata.title}</h1>
      <p>Hello</p>
      <p>{site.siteMetadata.description}</p>
      <p>{site.siteMetadata.author}</p>
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