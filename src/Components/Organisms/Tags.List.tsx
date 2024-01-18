import React, { useState, useEffect } from 'react'
import { Link, PageProps } from "gatsby";
import { styled, keyframes } from 'styled-components';
import { useRecoilState, useResetRecoilState } from "recoil";
import { selectedCategory } from "../../states/atom";

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
    const [category, setCategory] = useRecoilState(selectedCategory);

    const select = (value: string) => {
        setCategory(value);
    }

    return (
        <Layout>
            <h1>TAGS</h1>
            <TagListStyle>
                {tags.map((tag) => (
                    <div onClick={select(tag.fieldValue)} style={{ textDecoration: "none", color: "white" }} >
                        <TagList key={tag.fieldValue}>
                            <Pstyle>{`${tag.fieldValue}`}</Pstyle>
                        </TagList>
                    </div>
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
    grid-template-columns: repeat(auto-fill,minmax(100px, auto));
    grid-auto-rows: auto;
    width: 800px;
    gap: 10px 10px;
    grid-auto-flow: dense;
    text-decoration: none;
    margin: 0;
    padding-bottom: 60px;
    padding-top: 30px;
`

const TagList = styled.li`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: #2c4866;
    border-radius: 5px;

    &:hover {
        border-color: #2c4866;
        background: white;
        border: 1px;
        color: #2c4866;
    }
`
const Pstyle = styled.p`
    padding: 0px;
    margin: 0px;
`

export default TagsList;