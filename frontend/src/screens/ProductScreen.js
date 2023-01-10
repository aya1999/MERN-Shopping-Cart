import './ProductScreen.css'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Link } from 'react-router-dom'

import { addToCart } from '../redux/cartSlice'
import { productsByIDFetch } from '../redux/productSlice'

import {useParams} from 'react-router-dom'



const ProductScreen = ({match, history}) => {

  const params = useParams();


  const product = useSelector((state) => state.products.items)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(productsByIDFetch(String(params.id)))
  }, [dispatch, params])

 
  const [qty, setQty] = useState(1)

  const addToCartHandler = () => {
    console.log(qty)
    for (let i = 0; i < qty; i++) {
      dispatch(addToCart(product)) //loop qty 
    }
  }

  return (
    <div className="productscreen">
      {product.loading ? <h2>Loading...</h2> : product.error ? <h2>{product.error}</h2> :( 
       <>
        <div className='productscreen_left'>
            <div className="left__image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p>${product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>
          <div className='productscreen_right'>
            <div className="right__info">
              <p>
                Price: <span>${product.price}</span>
              </p>
              <p>
                Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x+1} value={x+1}>{x+1}</option>
                  ))}
                </select>
              </p>
              <p>
              <Link to="/cart" onClick={addToCartHandler} className='right__info_button'>
                Add To Cart
              </Link>
              </p>
            </div>
          </div>
       </>
      )}
    </div>
  )
}

export default ProductScreen