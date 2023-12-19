import React, { FunctionComponent } from 'react'
import styled from 'styled-components';

const Title: FunctionComponent = function () {
    return <Blogtitle>
        <a href="/"></a>
    </Blogtitle>
}

const Blogtitle = styled.div`
    width: 120px;
    background: black;
`

export default Title