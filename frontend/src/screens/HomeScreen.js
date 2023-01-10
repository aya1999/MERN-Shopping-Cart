import './HomeScreen.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import Product from '../components/Product'

import {productsFetch} from '../redux/productSlice'


const HomeScreen = () => {

  const product = useSelector((state) => state.products)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(productsFetch())
  }, [dispatch])

  return (
    <div className="homescreen">
      <h2 className='homescreen__title'>Latest Products</h2>
      <Link to="/cart" className='cart_button'>Go To Cart</Link>
      <div className="homescreen__products">
        {product.loading && <div>Loading...</div>}
        {!product.loading && product.items.length ? (
            product.items.map((product) => 
            <Product 
            key={product._id} 
            productId={product._id}
            name={product.name}
            price={product.price}
            description={product.description}
            imageUrl={product.imageUrl}/>)
        ) : null}
      </div>
    </div>
  )
}

export default HomeScreen