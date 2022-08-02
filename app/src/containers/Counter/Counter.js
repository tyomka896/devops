import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import * as ActionTypes from '../../store/actions'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    constructor() {
        super()

        this.state = {
            add: 5,
            sub: 5,
        }
    }

    render () {
        return (
            <Fragment>
                <CounterOutput value={this.props.counter} />
                <CounterControl
                    label="Increment"
                    clicked={ this.props.onIncrementCounter } />
                <CounterControl
                    label="Decrement"
                    clicked={ this.props.onDecrementCounter }  />
                <CounterControl
                    label={ "Add " + this.state.add }
                    clicked={ () => this.props.onAddCounter(this.state.add) }  />
                <CounterControl
                    label={ "Subtract " + this.state.sub  }
                    clicked={ () => this.props.onRemoveCounter(this.state.sub) }  />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ( {
    counter: state.counter.counter,
    results: state.results.results,
} )

const mapDispatchToProps = dispatch => ( {
    onIncrementCounter: () => dispatch({ type: ActionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: ActionTypes.DECREMENT }),
    onAddCounter: value => dispatch({ type: ActionTypes.ADD, value: value }),
    onRemoveCounter: value => dispatch({ type: ActionTypes.SUBTRACT, value: value }),
} )

export default connect(mapStateToProps, mapDispatchToProps)(Counter);