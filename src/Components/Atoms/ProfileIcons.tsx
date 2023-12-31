import React, { FunctionComponent } from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const ProfileIcons: FunctionComponent = function () {
    return (
        <ProfileStyle>
            <CoverStyle><AStyle href="https://github.com/9nu-j2"><StaticImage src="../../Statics/Icons/github.png" alt="Github" width={17} height={17} /></AStyle></CoverStyle>
            <CoverStyle>
                <AStyle href="mailto:jungu269@gmail.com"><StaticImage src="../../Statics/Icons/gmail.png" alt="Gmail" width={18} height={18} /></AStyle>
            </CoverStyle>
            <CoverStyle>
                <AStyle href="https://www.linkedin.com/in/jun9-lee/"><StaticImage src="../../Statics/Icons/in.png" alt="LinkedIN" width={15} height={15} /></AStyle></CoverStyle>
            <CoverStyle>
                <AStyle href="https://www.instagram.com/l.jun9/"><StaticImage src="../../Statics/Icons/insta.png" alt="Instagram" width={17} height={17} /></AStyle>
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