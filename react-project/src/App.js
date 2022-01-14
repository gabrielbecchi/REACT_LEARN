import React from 'react'

//import { Article, Brand, CTE, Feature, Navbar} from './components'

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers'
import { Brand, CTA, Navbar} from './components'
import './App.css'

export const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
