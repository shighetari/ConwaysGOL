export const IS_RUNNING = "IS_RUNNING"
export const GENERATION = "GENERATION"
export const SPEED = "SPEED"
export const GENERATION_RESET = "GENERATION_RESET"

export const isRunning = (props) => dispatch => {
    dispatch({ type: IS_RUNNING })
    //  props.runSimulation()
}

export const generationCounter = () => dispatch => {
        dispatch({type: GENERATION})
}

export const generationReset = () => dispatch => {
    console.log('generationReset invoked in actions')
    dispatch({type: GENERATION_RESET})
}

export const selectSpeed = () => dispatch => {
        dispatch({type: SPEED, payload: 10})
    
}
export const selectSpeedSlow = () => dispatch => {
    dispatch({type: SPEED, payload: 2000})
}

