import React from 'react'
import { styled, keyframes } from 'styled-components';
import { Link } from "gatsby"

const Drawer = ({ title, date, link }) => {
    return (
        <Link to={`/${link}`}>
            <CardContainer>
                <ImageCard></ImageCard>
                <NameCard>
                    <h2>{title}</h2>
                    <p>{date}</p>
                </NameCard>
            </CardContainer>
        </Link>
    )
}

const CardContainer = styled.section`
    height: 300px;
    width: 770px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const ImageCard = styled.div`
    height:300px;
    width: 300px;
    background: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
`

const NameCard = styled.div`
    height:100%;
    width: 400px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export default Drawer