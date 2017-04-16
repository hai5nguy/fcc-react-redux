import { createStore } from 'redux'

function reducer(state, action) {
	return state
}

var initialState = {
	product: {
		name: 'Pen',
		description: 'a pen to write with',
		price: 3.50,
		quantity: 1
	}
}

export const store = createStore(reducer, initialState)

export const dispatch = store.dispatch





