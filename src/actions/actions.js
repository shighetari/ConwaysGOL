// import { useCallback } from "react"
// import { connect } from "react-redux"

export const IS_RUNNING = "IS_RUNNING"

export const isRunning = (props) => dispatch => {
     dispatch({type: IS_RUNNING})
    //  props.runSimulation()
}

// export const runSimulation = useCallback((props) => {
//     if (!props.running) {
//         return
//     }
//     //simulate
    
// }, [])

// const mapStateToProps = state => {
//     return {
//         running: state.running
//     }
// }
// export default connect(mapStateToProps)(runSimulation)