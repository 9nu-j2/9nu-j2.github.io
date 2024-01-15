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
            <TagListStyle>
                {tags.map((tag) => (
                    <li key={tag.fieldValue}>
                        <Link to={`/tags/${tag.fieldValue}/`}>{`${tag.fieldValue}`}</Link>{" "}
                        <small>{`${tag.totalCount}`}</small>
                    </li>
                ))}
            </TagListStyle>
        </Layout>
    );
};

const Layout = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const TagListStyle = styled.ul`
    
`

export default TagsList;