
import React from 'react'
import { connect } from 'react-redux'
import './list-of-animals.sass'

import Animal from './animal'

function mapStateToProps(state, ownProps) {
    return {
        listOfAnimals: state.animals.list
    }
}
class ListOfAnimals extends React.Component {
    render () {
        var allAnimals = this.props.listOfAnimals.map((a, i) => <Animal key={i} animal={a} />)
        return (
            <div className="animals">
                {allAnimals}
            </div>
        )
    }
}
export default connect(mapStateToProps)(ListOfAnimals)






