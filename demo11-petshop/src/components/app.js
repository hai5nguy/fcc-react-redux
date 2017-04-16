import React from 'react'

import ListOfAnimals from './list-of-animals.js'
import AnimalDetail from './animal-detail.js'

import './app.sass'

class App extends React.Component {
    render () {
        return (
            <div className="hai-pet-shop">
                <h1>Hai's Pet Shop</h1>
                <ListOfAnimals />
                <AnimalDetail />
            </div>
        )
    }
}

export default App
