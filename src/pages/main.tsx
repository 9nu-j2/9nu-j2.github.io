import React from 'react'
import type { HeadProps } from "gatsby"
import { PageProps, graphql } from "gatsby"
import { DataProps } from 'Types/Types'


const MainPage = ({ data: { site: {
    siteMetadata
} } }: PageProps<DataProps>) => {
    return (
        <main>
            <h1>About Me</h1>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
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
}
`