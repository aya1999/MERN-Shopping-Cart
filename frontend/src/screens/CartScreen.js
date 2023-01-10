import './CartScreen.css'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from "react"
import {Link} from 'react-router-dom'
import CartItem from '../components/CartItem'
import { addToCart, removeItem } from '../redux/cartSlice'

const CartScreen = () => {
  const dispatch = useDispatch()

  //to get cart from  state
  const cart = useSelector(state => state.cart.cart)


  useEffect(() => {}, [])


  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty))
  }

  const removeHandler= (id) => {
    dispatch(removeItem(id))
  }

  const getCartCount = () => {
    return cart.reduce((qty, item) => Number(item.quantity) + qty, 0)
  }

  const getCartTotal = () => {
    return cart.reduce((price, item) => (item.price * item.quantity) + price, 0)
  }

  return (
    <div className="cartscreen">
        <div className="cartscreen__left">
          <Link to="/" className='home_button'>Go To Home</Link>
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <div>
              Your cart is empty <Link to='/'>Go Back</Link>
            </div>
            ) : cart.map(item => (
              <CartItem key={item.product} item={item} qtyChangeHandler={qtyChangeHandler} removeHandler={removeHandler} />
            ))
          }
        </div>
        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) Items</p>
            <p>${getCartTotal().toFixed(2)}</p>
          </div>
          <div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
    </div>
  )
}

export default CartScreen