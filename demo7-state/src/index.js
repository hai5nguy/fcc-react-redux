import React from 'react'
import ReactDOM from 'react-dom'

import './index.html'
import './index.sass'



var product = {
    name: 'Pen',
    description: 'a pen to write with',
    price: 3.50,
    quantity: 1
}

class Product extends React.Component {
    constructor() {
        super()
        this.state = product
    }
    doubleTheQuantity = () => {
        var quantity = this.state.quantity * 2
        this.setState({
            quantity: quantity
        })
    }
    render () {
        return (
            <div className="product">
                <h3>{this.state.name}</h3>
                <div>Price: {this.state.price}</div>
                <div>Description: {this.state.description}</div>
                <div>Quantity: {this.state.quantity}</div>
                <button onClick={this.doubleTheQuantity}>Double The Quantity!</button>
            </div>
        )
    }
}




ReactDOM.render(
    <Product />,
    document.getElementById('mount')
)









