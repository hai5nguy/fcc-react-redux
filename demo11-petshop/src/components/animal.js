import React from 'react'
import { connect } from 'react-redux'
import './animal.sass'

import { setSelectedAnimal } from '../actions/actions'

function mapStateToProps(state) {
    return {
        selectedAnimalName: state.animals.selectedAnimal.name
    }
}
class Animal extends React.Component {
    onClick = () => {
        setSelectedAnimal(this.props.animal)
    }
    render () {
        var animal = this.props.animal
        var selectedAnimalName = this.props.selectedAnimalName

        var styles = {}
        if (selectedAnimalName === animal.name) {
            styles = {
                background: 'blue'
            }
        }

        return (
            <div className="animal" onClick={this.onClick} style={styles}>
                <div className="quantity">{animal.quantity}</div>
                <div className="name">{animal.name}</div>
            </div>
        )
    }
}
export default connect(mapStateToProps)(Animal)






