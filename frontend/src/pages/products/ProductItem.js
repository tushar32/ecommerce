import React from "react"
import { CardItem, Card, CardText, CardTitle  } from "../../assets/styles/Card.style"
import Col from "react-bootstrap/esm/Col"
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { cartItemAdded } from "../cart/cartSlice";


const ProductItem = ({product, click}) => {
    const navigate = useNavigate();
    const dispatch =  useDispatch()

    const addToCart = (e) => {
        e.preventDefault()
        dispatch(cartItemAdded({ item: product }))
    }


    return (
        <Col xs={3} key={product._id}>
            <Card>
                <CardItem>
                    <CardTitle  onClick={()=> navigate(`/products/edit/${product._id}`) }>{product.title}</CardTitle>
                    <CardText>
                        {product.description}
                    </CardText>
                <Button onClick={addToCart}> Add to Cart</Button>    
                </CardItem>
            </Card>
        </Col>
    )
    
}

export default ProductItem