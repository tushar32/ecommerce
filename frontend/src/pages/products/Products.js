import React, { useEffect } from "react"
import ProductItem from "./ProductItem"
import { Link } from "react-router-dom";
import { Button, Stack, Row} from "react-bootstrap";
import { loadProducts } from "../../store/productStore/productAction";
import { useDispatch, useSelector } from "react-redux";


const Products = () => {
    const dispatch = useDispatch();
    const { list }  = useSelector((state) => state.products);

    console.log(list)
    useEffect(() => {
        dispatch(loadProducts())
      },[dispatch])


    return (
    <>
         <Stack direction="horizontal" gap={3}>
            <Button> <Link to="add">Add Product</Link></Button>
        </Stack>
        { list.length > 0 &&
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