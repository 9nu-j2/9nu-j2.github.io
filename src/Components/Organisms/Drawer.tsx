import React from 'react'
import { styled, keyframes } from 'styled-components';
import { Link } from "gatsby"

const Drawer = ({ title, date, link }) => {
    return (
        <Link to={`/${link}`}>
            <CardContainer>
                <div></div>
                <NameCard>
                    <h2>{title}</h2>
                    <p>{date} 발행됨.</p>
                </NameCard>
            </CardContainer>
        </Link>
    )
}

const CardContainer = styled.section`
    height: 300px;
    width: 600px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #f2f2f2;
`

const NameCard = styled.div`
    height:100%;
    width: 50%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default Drawer