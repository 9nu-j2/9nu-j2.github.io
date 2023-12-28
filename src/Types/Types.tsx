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
    title: string,
    description: string,
    author: string,
}