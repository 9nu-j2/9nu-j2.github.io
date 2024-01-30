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
        defaultLayouts: {
          default: path.resolve('./src/Components/Templates/Post.tsx'),
        },
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: `${__dirname}/src/Statics`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-remark-images',
      options: {
        maxWidth: 800,
        backgroundColor: 'none',
      },
    },
    `gatsby-remark-relative-images`,
  ],
};

export default config;
