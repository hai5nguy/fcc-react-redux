import { combineReducers, createStore } from 'redux'

var initialAnimalsState = {
	list: [
		{
			name: 'puppies',
			quantity: 3
		},{
			name: 'kittens',
			quantity: 5
		},{
			name: 'hamsters',
			quantity: 20
		},{
			name: 'fishies',
			quantity: 40
		},{
			name: 'birdies',
			quantity: 9
		}
	],
	selectedAnimal: {
	}
}

function animalsReducer(state = initialAnimalsState, action) {
	switch (action.type) {
		case 'ANIMALS_SET_SELECTED':
			var state = Object.assign({}, state)
			state.selectedAnimal = action.animal;
			return state
		default:
			return state
	}
}

var reducers = combineReducers({
	animals: animalsReducer
})

export const store = createStore(reducers, {})

export const dispatch = store.dispatch





