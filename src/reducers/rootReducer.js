import {
    IS_RUNNING
} from '../actions/actions'

const initialState = {
    running: false,
    // grid: (() =>{
    //     const numRows = 50
    //     const numCols = 50
    //     const rows = [];
    //     for (let i = 0; i < numRows; i++) {
    //         rows.push(Array.from(Array(numCols), () => 0))
    //     }
    //     return rows
    // })

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
                
            

        default: return state
    }
}
export default rootReducer