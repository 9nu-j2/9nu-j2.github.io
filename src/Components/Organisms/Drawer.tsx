import React from 'react'
import { styled, keyframes } from 'styled-components';
import { Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'

const Drawer = ({ title, date, link, thumnail, thumnailAlt }) => {
    const image = getImage(thumnail);

    const style = {
        height: "300px",
        width: "300px",
        backgroundColor: "#f2f2f2",
        borderRadius: "15px",
    }
    return (
        <Link to={`/${link}`} style={{ textDecoration: "none" }}>
            <CardContainer>
                <GatsbyImage image={image} alt={thumnailAlt} style={style} imgStyle={{ overflow: "hidden", objectFit: "cover" }} />
                <NameCard>
                    <h2>{title}</h2>
                    <TimePart>
                        <div>{date}</div>
                        <StaticImage src="../../Statics/Icons/time.png" alt="onTime" style={{ width: "19px", height: "16px" }} imgStyle={{ objectFit: "fill" }} />
                    </TimePart>
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
    color: black;
`

const TimePart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 8px;
`

export default Drawer