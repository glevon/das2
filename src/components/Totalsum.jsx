import React, { Component } from 'react'

class Totalsum extends Component {
    render() {
        return (
            <div>
                <h3><i>Total sum:{this.props.state.sum}</i></h3>
            </div>
        )
    }
}

export default Totalsum
