import React, { useEffect } from "react"
import ProductItem from "./ProductItem"
import { Link } from "react-router-dom";
import { Button, Stack, Row} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "./productSlice";


const Products = () => {
    const dispatch = useDispatch();
    const { list }  = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(loadProducts())
      },[dispatch])


    return (
    <>
         <Stack direction="horizontal" gap={3}>
            <Button> <Link to="add">Add Product</Link></Button>
        </Stack>
        { list.length &&
            (
                <Row xs={1} md={2} className="g-4">     
                    {list.map(product => {
                        return  (
                            
                        <ProductItem product={product} key={product._id}
                            />
                            
                            )
                        })
                    }
                </Row>
                
            )
        }
    </>
    )
    
}

export default Products