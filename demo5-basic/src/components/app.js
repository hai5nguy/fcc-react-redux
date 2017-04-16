import React from 'react'

import Header from './header'
import Products from './products'
import Footer from './footer'

import './app.sass'

class App extends React.Component {
    render () {
        return (
            <div className="ra-app">
                <Header />
                <Products />
                <Footer />
            </div>
        )
    }
}

module.exports = App




