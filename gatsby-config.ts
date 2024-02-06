import type { GatsbyConfig } from 'gatsby';
import path from 'path';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `아직미정`,
    description: `문제를 해결하는게 재밌어서, 재밌던 기억들을 남깁니다.`,
    author: `JUN9`,
    siteUrl: `https://9nu-j2.github.io`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: './src/Statics/Icons/icon.svg',
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
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 400,
              showCaptions: ['title', 'alt'],
              quality: 50,
              wrapperStyle: 'margin: 0 0; aspect-ratio: auto;',
              srcSetBreakpoints: [100, 200, 300, 400],
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
          },
        ],
        mdxOptions: {
          remarkPlugins: [require('remark-gfm')],
        },
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
  ],
};

export default config;
