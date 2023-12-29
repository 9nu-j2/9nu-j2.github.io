import React, { FunctionComponent } from 'react'
import styled from 'styled-components';

const Footer: FunctionComponent = function () {
    return (
        <FooterStyle>
            <div>Copyright © 2023, JUN9 All rights reserved.</div>
            <div>Built with <a href="https://www.gatsbyjs.com/">Gatsby</a></div>
        </FooterStyle>
    )
}

const FooterStyle = styled.footer`
    width: 100%;
    height: 240px;
    display: flex;
    gap: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f1f1f1;
`;

export default Footer;