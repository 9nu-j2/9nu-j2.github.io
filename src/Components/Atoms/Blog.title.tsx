import React, { FunctionComponent } from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import logo1 from '../../Statics/Icons/logo1.svg'
import logo2 from '../../Statics/Icons/logo2.svg'

type TitleData = {
    title: boolean
}

const Title: FunctionComponent<TitleData> = function ({ title }) {
    return (
        <Blogtitle>
            <TitleLink href="/">
                {title == true ?
                    <TitleLogo src={logo1} />
                    : <TitleLogo src={logo2} />
                }
            </TitleLink>
        </Blogtitle>
    )
}

const Blogtitle = styled.div`
    width: 200px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const TitleLink = styled.a`
    width: 183px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TitleLogo = styled.img`
    width: 183px;
    height: 40px;
    margin:0;
`

export default Title