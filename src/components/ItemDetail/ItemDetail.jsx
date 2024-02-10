import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import '../../styles/Item.css'
import { useNotification } from '../../notification/NotificationService'


const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
    const { addItem, getProductQuantity } = useCart()
    const { showNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        addItem(objProductToAdd)
        showNotification('info', `Se agregaron correctamente ${quantity} ${name}`)
    }

    const productQuantity = getProductQuantity(id)

    return (
        <article className="tarjeta">
            <header>
                <h2 className="tarjeta-titulo">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="tarjeta-imagen" />
            </picture>
            <section>
                <p className="tarjeta-descripcion">
                    Categoria: {category}
                </p>
                <p className="tarjeta-descripcion">
                    Descripción: {description}
                </p>
                <p className="tarjeta-precio">
                    Precio: ${price}
                </p>
            </section>
            <footer>
                {
                    <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity} />
                }
            </footer>
        </article>
    )
}

export default ItemDetail