import { useEffect } from "react";
import  {Card, Button}  from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/cartSlice";
import { getProducts } from "../features/productSlice";
import { BuilderStatusEnum } from "../enums/BuilderStatusEnum";

function Products() {

  
  const dispatch = useDispatch()
  const addToCart = (product) => {
    dispatch(add(product))
  }
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  
  const {data:products, status} = useSelector(state => state.products)

  return (
    <div className="row">
      {
        status === BuilderStatusEnum.LOADING && <h3>Loading...</h3>
      }
      {
        status === BuilderStatusEnum.REJECTED && <h3>Error loading project</h3>
      }
      {
        products?.map(product =>(
          <div key={product.id} className="col-md-3 col-sm-6 mb-2 text-center">
            <Card  className="h-100">
              <div className="text-center py-2">
                <Card.Img variant="top" src={product.image} alt={product.price} style={{width:'120px', height:'120px'}} />
              </div>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  &#8358;{product.price}
                </Card.Text>
              </Card.Body>
                
              <Card.Footer className="bg-white">
                <Button onClick={() => addToCart(product)} variant="primary">Add to cart</Button>
              </Card.Footer>
            </Card>
          </div>
        ))
      }
    </div>
  );
}

export default Products;
