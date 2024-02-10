import { useState } from 'react'

const ItemCount = ({ initial = 1, stock, onAdd }) => {
    const [count, setCount] = useState(initial)

    const decrement = () => {
        if(count > 1) {
            setCount(prev => prev - 1)
        }
    }

    const increment = () => {
        if(count < stock)
        setCount(prev => prev + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement} className="boton-agregar">-</button>
            <button onClick={() => onAdd(count)} className="boton-agregar">Agregar al carrito</button>
            <button onClick={increment} className="boton-agregar">+</button>
        </div>
    )
}

export default ItemCount