import React from 'react'
import type { HeadProps } from "gatsby"
import { PageProps } from "gatsby"
import HeaderTemplate from "../Components/Templates/Home.Template"
import Footer from '../Components/Organisms/Footer';
import { DataProps } from 'Types/Types'

const IndexRoute = ({ data: { site: { siteMetadata: {
  title, description, author
} } } }: PageProps<DataProps>) => {
  return (
    <main>
      <HeaderTemplate title={title} description={description} author={author}></HeaderTemplate>
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

