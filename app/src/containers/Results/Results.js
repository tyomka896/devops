import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as ActionTypes from '../../store/actions'

import './Results.css'

class Results extends Component {
    render () {
        const list = this.props.results.map((elem, index) => {
            return (
                <li
                    key={ index }
                    className="list__item"
                    onClick={ () => this.props.onDeleteResult(index) }
                >
                    { elem.value }
                </li>
            )
        })

        return (
            <Fragment>
                <button
                    className="btn__result"
                    onClick={ () => this.props.onStoreResult(this.props.counter) }
                >
                    Store Result
                </button>

                <ol className="list">
                    { list }
                </ol>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ( {
    counter: state.counter.counter,
    results: state.results.results,
} )

const mapDispatchToProps = dispatch => ( {
    onStoreResult: counter => dispatch({ type: ActionTypes.STORE_RESULT, counter: counter }),
    onDeleteResult: index => dispatch({ type: ActionTypes.DELETE_RESULT, index: index }),
} )

export default connect(mapStateToProps, mapDispatchToProps)(Results)
