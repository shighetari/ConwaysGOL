import React, { useState, useCallback, useRef } from 'react'
import produce from 'immer'
import { connect } from 'react-redux'
import { isRunning } from '../actions/actions'

const numRows = 50
const numCols = 50
const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
]
const Grid = (props) => {
    const [grid, setGrid] = useState(() => {
        const rows = [];
        for (let i = 0; i < numRows; i++) {
            rows.push(Array.from(Array(numCols), () => 0))
        }
        return rows
    })
    // console.log(grid)
    const isRunning = () => {
        props.isRunning()
        runSimulation()
    }

    // START SIMULATION \\
    const refRunning = useRef(props.running)
    const runSimulation = useCallback((props) => {
        console.log('METHOD IS BEING CLICKED')
        if (!refRunning) {
            return
        }
        //simulate
        setGrid((g) => {
            return produce(g, gridCopy => {
                for (let i = 0; i < numRows; i++) {
                    for (let k = 0; k < numCols; k++) {
                        let neighbours = 0;
                        operations.forEach(([x, y]) => {
                            const newI = i + x
                            const newK = k + y
                            if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                                neighbours += g[newI][newK]
                            }
                        })
                        if (neighbours < 2 || neighbours > 3) {
                            gridCopy[i][k] = 0
                        } else if (g[i][k] === 0 && neighbours === 3) {
                            gridCopy[i][k] = 1
                        }
                    }
                }
            })
        })

        setTimeout(runSimulation, 1000)
    }, [])

    return (
        <>
            <div>
            <button onClick={isRunning}>
                {props.running ? 'stop' : 'start'}
            </button>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${numCols}, 20px)`
            }}>
                {grid.map((rows, i) =>
                    rows.map((col, k) =>
                        <div
                            key={`${i}-${k}`}
                            onClick={() => {
                                // const newGrid = grid
                                // newGrid[i][k] = grid[i][k] ? 0 : 1
                                // setGrid(newGrid)
                                const newGrid = produce(grid, gridCopy => {
                                    gridCopy[i][k] = grid[i][k] ? 0 : 1
                                })
                                setGrid(newGrid)
                            }
                            }


                            style={{
                                width: 20, height: 20, backgroundColor: grid[i][k] ? 'pink' : 'black',
                                border: 'solid 1px black'
                            }} />
                    ))}

            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        running: state.running,
    }
}
export default connect(mapStateToProps, {isRunning})(Grid)


