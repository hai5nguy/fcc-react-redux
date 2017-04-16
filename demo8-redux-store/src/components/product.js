import React from 'react'
import { connect } from 'react-redux'

import './product.sass'

function mapStateToProps(state, ownProps) {
    return {
        product: state.product
    }
}
class Product extends React.Component {
    render () {
        var product = this.props.product
        return (
            <div className="product">
                <h3>{product.name}</h3>
                <div>Price: {product.price}</div>
                <div>Description: {product.description}</div>
                <div>Quantity: {product.quantity}</div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Product)






