import { Link } from "react-router-dom"
import '../../styles/Item.css'

const Item = ({ id, name, img, category, price }) => {
    return (
        <div className="tarjeta">
            <img src={img} className="tarjeta-imagen" />
                <h3 className="tarjeta-titulo">{name}</h3>
                <p className="tarjeta-descripcion">Categoria: {category}</p>
                <h4 className="tarjeta-precio">${price}</h4>
                <Link to={`/detail/${id}`} className="boton-agregar">Ver detalle</Link>
        </div>
    )
}

export default Item