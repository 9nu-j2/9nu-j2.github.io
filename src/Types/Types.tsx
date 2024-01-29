export type DataProps = {
    site: {
        siteMetadata: MetaProps
    },
    allMdx: {
        nodes: {
            frontmatter: {
                title: string;
                datePublished: string;
                author: string;
                slug: string;
            },
            id: string;
        }
    }
}

export type MetaProps = {
    description: string,
    author: string,
}