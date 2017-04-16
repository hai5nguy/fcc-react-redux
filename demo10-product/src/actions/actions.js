import { dispatch, store } from '../store/store.js'

export const doubleTheQuantity = () => {
    var state = store.getState()

    var action = {
        type: 'PRODUCT_SET_QUANITY',
        quantity: state.product.quantity * 2
    }
    dispatch(action)
    
}





