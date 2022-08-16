import { useState} from 'react'
import './ItemCount.css';


const Counter = ({stock=0, initial=1, title, onAdd}) => {

    console.log(title)
    console.log(initial)

    const [count, setCount] = useState(initial)

    console.log(count)

    const decrement = () => {

        if(count > 1){
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

            <button className='counter_button' onClick={decrement}>-</button>
            <button className='counter_button' onClick={increment}>+</button>

        </div>
        <div className='count_container'>
            <button className='counter_button' onClick={()=> onAdd(count)}>Agregar al Carrito</button>
        </div>



    </div>
    )
}

export default Counter

