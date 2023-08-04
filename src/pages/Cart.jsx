import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {  useDispatch, useSelector } from 'react-redux'
import { remove } from '../features/cartSlice'

const Cart = () => {
  const carts = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const removeFromCart = (cart) => {
    dispatch(remove(cart))
  }
  return (
    <div className='container'>
        <h2 className='text-center my-2'>Cart</h2>
        <div className="my-2 row">
            {
                carts.length > 0 ? carts.map(cart =>(
                    <div key={cart.id} className="col-md-6 col-sm-6 mb-2 text-center">
                        <Card  className="h-100">
                            <div className="text-center py-2">
                                <Card.Img variant="top" src={cart.image} alt={cart.price} style={{width:'120px', height:'120px'}} />
                            </div>
                            <Card.Body>
                                <Card.Title>{cart.title}</Card.Title>
                                <Card.Text>
                                &#8358;{cart.price}
                                </Card.Text>
                            </Card.Body>
                                
                            <Card.Footer className="bg-white">
                                <Button onClick={() => removeFromCart(cart)} variant="primary">Remove from cart</Button>
                            </Card.Footer>
                        </Card>
                    </div>
                ))
                : "No item added to cart"
            }
        </div>
    </div>
  )
}

export default Cart