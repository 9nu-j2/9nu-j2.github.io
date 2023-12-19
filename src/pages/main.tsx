import React, { FunctionComponent } from 'react'
import type { HeadProps } from "gatsby"
import { PageProps } from "gatsby"


const MainPage: FunctionComponent = function () {
    return (
        <main>
            <h1>About Me</h1>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </main>
    )
}

export default MainPage

export const Head = () => <title>About Me</title>