import { dispatch, store } from '../store/store.js'

export const setSelectedAnimal = (animal) => {
    var action = {
        type: 'ANIMALS_SET_SELECTED',
        animal: animal
    }
    dispatch(action)
}





