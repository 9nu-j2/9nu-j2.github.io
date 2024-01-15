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
                    <Link to={`/tags/${tag.fieldValue}/`}>
                        <TagList key={tag.fieldValue}>
                            {`${tag.fieldValue}`}{" "}<Blank />
                            <p>{`${tag.totalCount}`}</p>
                        </TagList>
                    </Link>
                ))}
            </TagListStyle>
        </Layout>
    );
};

const Layout = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`

const TagListStyle = styled.ul`
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
    grid-template-rows: 100px 100px 100px;
`

const TagList = styled.li`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`


const Blank = styled.div`
    width: 10px;
`

export default TagsList;