import { useState } from 'react'

const Counter = () => {
    const state = useState(0)
    console.log(state)

    const decrement = () => {
        state[1](state[0] - 1)
    }

    const increment = () => {
        state[1](state[0] + 1)
    }

    return (
    <div>
        <h1>{state[0]}</h1>
        <buttton onClick={decrement}>-</buttton>
        <buttton onClick={increment}>+</buttton>

    </div>
    )
}

export default Counter

