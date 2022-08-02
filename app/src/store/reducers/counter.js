import * as ActionTypes from '../actions'

const initialState = {
    counter: 0
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT: return {
                ...state,
                counter: state.counter + 1
            }
        case ActionTypes.DECREMENT: return {
                ...state,
                counter: state.counter - 1
            }
        case ActionTypes.ADD: return {
                ...state,
                counter: state.counter + action.value
            }
        case ActionTypes.SUBTRACT: return {
                ...state,
                counter: state.counter - action.value
            }
        default: break
    }
    
    return state
}

export default counter