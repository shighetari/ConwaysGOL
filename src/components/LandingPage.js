import React from "react"
import { useHistory } from "react-router-dom"

const LandingPage = () => {
    const history = useHistory()

const playGame = () => {
   history.push('/game')
}

    return (
        <>
        <div>
            TEST LandingPage
            <br/>
            <button
            onClick={playGame}
            > Click here to Play</button>
        </div>
        </>
    )
}

export default LandingPage