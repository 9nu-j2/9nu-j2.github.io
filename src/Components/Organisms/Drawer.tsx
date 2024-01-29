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
                    <TitleStyle>{title}</TitleStyle>
                    <TimePart>
                        <DateStyle>{date}</DateStyle>
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
`

const NameCard = styled.div`
    height:100%;
    width: 400px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: black;
    padding-top: 40px;
    padding-bottom: 50px;
    border-radius: 15px;

    ${CardContainer}:hover & {
        
    }
`

const TimePart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 8px;

    ${CardContainer}:hover & {
        
    }
`

const TitleStyle = styled.h2`
    ${CardContainer}:hover & {
        
    }
`

const DateStyle = styled.div`
    ${CardContainer}:hover & {
        
    }
`

export default Drawer