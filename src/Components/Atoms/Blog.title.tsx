import React, { FunctionComponent } from 'react'
import styled from 'styled-components';

type TitleData = {
    title: string
}

const Title: FunctionComponent<TitleData> = function ({ title }) {
    return <Blogtitle>
        <a href="/">{title}</a>
    </Blogtitle>
}

const Blogtitle = styled.div`
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Title