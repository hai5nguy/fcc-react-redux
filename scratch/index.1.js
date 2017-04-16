




var product = {
    name: 'Pen',
    description: 'a pen to write with',
    price: 3.50,
    quantity: 1
}

class Product extends React.Component {
    doubleTheQuantity = () => {
        product.quantity = product.quantity * 2
        //re-render???
    }
    render () {
        var product = this.props.product
        return (
            <div className="product">
                <h3>{product.name}</h3>
                <div>Price: {product.price}</div>
                <div>Description: {product.description}</div>
                <div>Quantity: {product.quantity}</div>
                <button onClick={this.doubleTheQuantity}>Double The Quantity!</button>
            </div>
        )
    }
}



