import { useState } from 'react'
import './ItemCount.css';



const Counter = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(1)


    const decrement = () => {
        if(count > initial){
            setCount((prevCount) => prevCount - 1)
        }



    }


    const increment = () => {

        if(count < stock){
            setCount((prevCount) => prevCount + 1)
        }

    }



    return (
    <div className='container_father'>
        <h1>{count}</h1>
        <div className='count_container'>

            <buttton className='counter_button' onClick={decrement}>-</buttton>
            <buttton className='counter_button' onClick={increment}>+</buttton>

        </div>
        <div className='count_container'>
            <buttton className='counter_button' onClick={()=> onAdd(count)}>Agregar al Carrito</buttton>
        </div>



    </div>
    )
}

export default Counter

