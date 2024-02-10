import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"

const CartView = () => {
    const { cart, total, removeItem } = useCart()

    return (
        <>
            <h1>CART</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio por unidad</th>
                        <th scope="col">Subtotal</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(prod => (
                        <tr key={prod.id}>
                            <td>{prod.name}</td>
                            {/* <td>
                                <button
                                    className="btn btn-ouline-primary"
                                    onClick={() => decrement(prod.id)}
                                >-</button>
                                <button className="btn btn-primary">{prod.quantity}</button>
                                <button
                                    className="btn btn-ouline-primary"
                                    onClick={() => increment(prod.id)}
                                >+</button>
                            </td> */}

                            { <td>{prod.quantity}</td>  }
                            <td>${prod.price}</td>
                            <td>${prod.quantity * prod.price}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => removeItem(prod.id)}>Remover</button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <th colSpan="3"><b>TOTAL: </b></th>
                        <td></td>
                        <td>${total}</td>
                    </tr>
                </tbody>
            </table>

            <div className="d-grid gap-2">
                <Link to='/checkout'
                    className="btn btn-primary"
                >COMPRAR </Link>
            </div>
        </>
    )
}

export default CartView