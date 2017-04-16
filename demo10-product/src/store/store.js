import { combineReducers, createStore } from 'redux'

var initialProductState = {
	name: 'Pen',
	description: 'a pen to write with',
	price: 3.50,
	quantity: 1
}
function productReducer(state = initialProductState, action) {
	switch (action.type) {
		case 'PRODUCT_SET_QUANITY':
			var state = Object.assign({}, state)
			state.quantity = action.quantity
			return state
		default:
			return state
	}
}

var reducers = combineReducers({
	product: productReducer
})

export const store = createStore(reducers, {})

export const dispatch = store.dispatch





