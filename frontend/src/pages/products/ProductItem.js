import React from "react"
import { CardItem, Card, CardText, CardTitle  } from "../../assets/styles/Card.style"
import Col from "react-bootstrap/esm/Col"
import { redirect } from "react-router-dom"
import { useNavigate } from "react-router-dom";


const ProductItem = ({product, click}) => {
    const navigate = useNavigate();

    return (
        <Col xs={3} key={product._id}>
            <Card onClick={()=> navigate(`/products/edit/${product._id}`) }>
                <CardItem>
                    <CardTitle>{product.title}</CardTitle>
                    <CardText>
                        {product.description}
                    </CardText>
                </CardItem>
            </Card>
        </Col>
    )
    
}

export default ProductItem