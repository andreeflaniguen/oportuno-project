import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { useCart } from "../../context/CartContext"

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
        <div>
            <Badge badgeContent={totalQuantity} color="secondary">
                <ShoppingCart color="action" />
            </Badge>
        </div>
    )
}

export default CartWidget