import React from 'react'
import ReactDOM from 'react-dom'

import './index.html'

import './index.sass'

class Greetings extends React.Component {
    showAnAlert () {
        alert('dont ever use alerts Hai')
    }
    render () {
        return (
            <div className="greetings">
                <div onClick={this.showAnAlert}>Hello FCC Indy!</div>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <Greetings />
    </div>,
    document.getElementById('mount')
)









