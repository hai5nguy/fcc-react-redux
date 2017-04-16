import React from 'react'
import { connect } from 'react-redux'
import './animal-detail.sass'


function mapStateToProps(state, ownProps) {
    return {
        animal: state.animals.selectedAnimal
    }
}
class AnimalDetail extends React.Component {
    render () {
        var animal = this.props.animal
        return (
            <div className="animal-detail">
                <div>Selected Animal: {animal.name}</div>
            </div>
        )
    }
}
export default connect(mapStateToProps)(AnimalDetail)






