import React, {useState} from 'react'
import "./ItemCount.css"

export const ItemCount = ({ stock, initial }) => {

    const [ cantidad, setCantidad] = useState( stock );
    const [ counter, setCounter ] = useState( initial );

    //Para agregar productos. Tiena la condición de sumar mientras el contador sea menor que el stock. Si alcanza el mismo valor que el stock, ya no permite sumar
    const handleAdd = () => {
        if(cantidad > 0)
            setCounter(counter +1)
            setCantidad(cantidad -1)
    } 
    //Para sacar productos. Tiene la condición de restar mientras el contador sea mayor a cero. Si llega a ser igual a cero, ya no permite restar
    const handleSubtract = () => {
        if(counter > 0){
            setCounter(counter -1)
            setCantidad(cantidad +1)
        }
    } 

    const onAdd = () => {
        if(counter !== 0)
        alert(`Se agregarán: ${counter} unidades a su carrito`)
    }          

    return (
        <div>
            <h3 className="text-dark m-3 p-3 fs-3 text-center">ItemCount</h3>
            <p className="text-dark m-1 p-1 fs-3 text-center">Stock disponible: {cantidad}</p>
            <div className="text-center d-flex align-items-center justify-content-center">
                <button className="btn btn-danger btn-lg m-3 p-2" onClick={handleSubtract} disabled={stock === 0}> -1 </button>
                <h3 className="m-3">{ counter }</h3>
                <button className="btn btn-danger btn-lg m-3 p-2" onClick={handleAdd} disabled={cantidad === 0}>+1</button>
            </div>
            <div className="text-center">
                <button className="btn btn-dark btn-lg mb-4 p-2" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}
