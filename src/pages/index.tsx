import React from 'react'
import type { HeadProps } from "gatsby"
import { PageProps, graphql } from "gatsby"
import HeaderTemplate from "../Components/Templates/Home.Header"
import Footer from '../Components/Organisms/Footer';
import { DataProps } from 'Types/Types'
import styled from 'styled-components';

const IndexRoute = ({ data: { site: { siteMetadata: {
  title, description, author
} } } }: PageProps<DataProps>) => {
  return (
    <main>
      <HeaderTemplate title={title} description={description} author={author}></HeaderTemplate>
      <TestDiv></TestDiv>
      <Footer></Footer>
    </main>
  )
}

const TestDiv = styled.div`
  height: 1000px;
`

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
