import React, { FunctionComponent } from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Link } from 'gatsby-link';

const ProfileIcons: FunctionComponent = function () {
    return (
        <ProfileStyle>
            <CoverStyle><AStyle href="https://github.com/9nu-j2"><StaticImage src="../../Statics/Icons/github.png" alt="Github" width={22} height={22} /></AStyle></CoverStyle>
            <CoverStyle>
                <AStyle href="mailto:jungu269@gmail.com"><StaticImage src="../../Statics/Icons/gmail.png" alt="Gmail" width={23} height={23} /></AStyle>
            </CoverStyle>
            <CoverStyle>
                <AStyle href="https://www.linkedin.com/in/jun9-lee/"><StaticImage src="../../Statics/Icons/in.png" alt="LinkedIN" width={20} height={20} /></AStyle></CoverStyle>
            <CoverStyle>
                <AStyle href="https://www.instagram.com/l.jun9/"><StaticImage src="../../Statics/Icons/insta.png" alt="Instagram" width={22} height={22} /></AStyle>
            </CoverStyle>
        </ProfileStyle>
    )
}

const ProfileStyle = styled.div`
    height: 40px;
    width: 180px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const CoverStyle = styled.div`
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const AStyle = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export default ProfileIcons;