import React from 'react'
import { styled, keyframes } from 'styled-components';
import { Link } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Drawer = ({ title, date, link, thumnail, thumnailAlt }) => {
    const image = getImage(thumnail);

    const style = {
        height: "300px",
        width: "300px",
        backgroundColor: "#f2f2f2",
        borderRadius: "15px",
    }
    return (
        <Link to={`/${link}`}>
            <CardContainer>
                <GatsbyImage image={image} alt={thumnailAlt} style={style} imgStyle={{ overflow: "hidden", objectFit: "cover" }} />
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
    border-color: black;
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