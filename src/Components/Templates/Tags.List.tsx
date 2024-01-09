import * as React from "react";
import { Link, PageProps } from "gatsby";
import { styled, keyframes } from 'styled-components';

type TagsPageData = {
    allMdx: {
        group: {
            totalCount: number;
            fieldValue: string;
        }[];
    };
};

const TagsList = ({ data }: PageProps<TagsPageData>) => {
    const tags = data.allMdx.group.sort((a, b) => b.totalCount - a.totalCount);
    return (
        <Layout>
            <h1>tags</h1>
            <ul>
                {tags.map((tag) => (
                    <li key={tag.fieldValue}>
                        <Link to={`/tags/${tag.fieldValue}/`}>{`${tag.fieldValue}`}</Link>{" "}
                        <small>{`${tag.totalCount}`}</small>
                    </li>
                ))}
            </ul>
        </Layout>
    );
};

const Layout = styled.div`
    
`

export default TagsList;