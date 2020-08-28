import React, { useState } from 'react'
import { connect } from 'react-redux'
import { isRunning } from '../actions/actions'
import { useHistory, Link } from 'react-router-dom'
// import Grid from './Grid'


const About = (props) => {
    const [isShown, setIsShown] = useState(false);
    const history = useHistory()

    const play = () => {
       history.push('/game')
    }
    
    return (
        <> <div> 
    These rules, which compare the behavior of the automaton to real life,
    <br/> can be condensed into the following: <br/> 
    <br/>
<center> 1- Any live cell with two or three live neighbours survives. </center>
<br/>
<center>2- Any dead cell with three live neighbours becomes a live cell.</center>
<br/>
<center>3- All other live cells die in the next generation. Similarly, all other dead cells stay dead.</center>
</div>
      <div>
          <button onClick = {play}>
             Click here to Play
          </button>
          <br/>
          <a href={'https://github.com/shighetari/ConwaysGOL.git'}> click here for the GitHub Repo</a>
          


          <div className="App">
      <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        Hover over me!
      </button>
      {isShown && (
        <div>
          I'll appear when you hover over the button., made in jsx/js
        </div>
      )}
    </div>
      </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        running: state.running
    }
}
export default connect(mapStateToProps, {isRunning})(About)

