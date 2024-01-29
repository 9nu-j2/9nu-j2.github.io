import React, { FunctionComponent } from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

type TitleData = {
    title: boolean
}

const Title: FunctionComponent<TitleData> = function ({ title }) {
    return (
        <Blogtitle>
            <a href="/">
                {title == true ?
                    <StaticImage src="../../Statics/Icons/logo1.png" alt="Gmail" width={180} height={35} />
                    : <StaticImage src="../../Statics/Icons/logo2.png" alt="Gmail" width={180} height={35} />}</a>
        </Blogtitle>
    )
}

const Blogtitle = styled.div`
    width: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Title