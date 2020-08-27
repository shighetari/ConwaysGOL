import React from 'react'
import Grid from './Grid'
import Buttons from './Buttons'


const GamePage = () => {

    return (
        <>
            <div>
               Game Page
                <Buttons component={Grid} />
                <Grid />
            </div>
        </>
    )
}

export default GamePage
