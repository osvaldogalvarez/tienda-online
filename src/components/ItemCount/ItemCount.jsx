import React from 'react'
import { useState } from 'react'
import "./ItemCount.scss"

export const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    const Add = ()=>{
        setCount(count + 1)
    }
    const Res =()=>{
        setCount(count - 1)
    }
  return (
    <div id='item-count'>
        <div className='count'>
            <button onClick={Res} disabled={count === initial} >-</button>
            <h1>{count}</h1>
            <button onClick={Add} disabled={count === stock} >+</button>
        </div>
        <button className='add' onClick={()=>onAdd(count)}>Agregar al carrito</button>
    </div>
  )
}
