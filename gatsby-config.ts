import type { GatsbyConfig } from 'gatsby';
import path from 'path';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `아직미정`,
    description: `문제를 해결하는게 재밌어서, 재밌던 기억들을 남깁니다.`,
    author: `JUN9`,
    siteUrl: `https://9nu-j2.github.io`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `mdx`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};

export default config;
