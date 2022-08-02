import * as ActionTypes from '../actions'

const initialState = {
    results: []
}

const results = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.STORE_RESULT:
            const addedResults = [ ...state.results ]
            addedResults.unshift({ time: new Date(), value: action.counter })

            return {
                ...state,
                results: addedResults
            }
        case ActionTypes.DELETE_RESULT:
            return {
                ...state,
                results: [ ...state.results ].filter((_, index) => index !== action.index)
            }
        default: break
    }
    
    return state
}

export default results