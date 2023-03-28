import cart from './assets/carrito.svg'

const CartWidget = () => {
    return (
        <div>
            <img class="carrito"  src={cart} alt="carrito de compras"/>
            0
        </div>
    )
}

export default CartWidget