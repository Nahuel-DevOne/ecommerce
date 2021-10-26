import { ItemCount } from "../ItemCount/ItemCount"

const Item = ({nombre, desc, precio, stock}) => {
    return (
        <div className="container">
            <div className="row mt-3 justify-content-center">
                <div className="col-4">
                    <div class="card">
                        <img className="card-img-top" src="#" alt="" />
                        <div className="card-body text-center">
                            <h4>Componente ITEM</h4>
                            <h4 className="card-title">{nombre}</h4>
                            <p className="card-text">{desc}</p>
                            <h5 className="card-subtitle text-muted mb-2">$ {precio}</h5>
                            <ItemCount stock={stock} initial={0}/>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item

