import {
    IS_RUNNING, GENERATION, GENERATION_RESET
} from '../actions/actions'

const initialState = {
    running: false,
    generation: 0,
    speed: 1000,
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // case IS_RUNNING:
        //     return {
        //         ...state,
        //         running: !state.running
        //     }
        case IS_RUNNING:
            return Object.assign({}, state, {
                running: !state.running
            })
        case GENERATION:
            return Object.assign({}, state, {
                generation: state.generation + 1
            })
        case GENERATION_RESET:
            return Object.assign({}, state, {
                generation: state.generation = 0
            })

        default: return state
    }
}
export default rootReducer