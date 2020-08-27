import React from 'react'
import { connect } from 'react-redux'
import { isRunning } from '../actions/actions'
// import Grid from './Grid'


const Buttons = (props) => {
    // const isRunning = () => {
    //     props.isRunning()
    //     // props.runSimulation()
    // }
    return (
        <>
        {/* <button onClick={isRunning}
        >{props.running ? 'stop' : 'start'}</button> */}
      
        </>
    )
}
const mapStateToProps = state => {
    return {
        running: state.running
    }
}
export default connect(mapStateToProps, {isRunning})(Buttons)

