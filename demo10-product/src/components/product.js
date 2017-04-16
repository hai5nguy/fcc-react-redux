import React from 'react'
import { connect } from 'react-redux'
import './product.sass'

import { doubleTheQuantity } from '../actions/actions.js'

function mapStateToProps(state, ownProps) {
    return {
        product: state.product
    }
}
class Product extends React.Component {
    doubleTheQuantityClicked = () => {
        doubleTheQuantity()
    }
    render () {
        var product = this.props.product
        return (
            <div className="product">
                <h3>{product.name}</h3>
                <div>Price: {product.price}</div>
                <div>Description: {product.description}</div>
                <div>Quantity: {product.quantity}</div>
                <button onClick={this.doubleTheQuantityClicked}>Double The Quantity!</button>
            </div>
        )
    }
}
export default connect(mapStateToProps)(Product)






