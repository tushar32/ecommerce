import React, { useState } from "react"
import ProductItem from "./ProductItem"
import { Link } from "react-router-dom";
import { Button, Stack, Row} from "react-bootstrap";
import FallbackLoader from "../../components/fallBackLoader";
import UseProducts from "./UseProducts";
import SearchProducts from "./SearchProducts";


const Products = () => {
    const [searchData, setSearchData] = useState({q:''})
    const { list }  = UseProducts({searchData: searchData.q})

    
    const onInputChange = (e) => {
        setSearchData({
          q: e.target.value
        })  
    
      }
      
    const renderProducts = () => (
        <Row xs={1} md={2} className="g-4">     
            {list.map(product => {
                return  (
                    <ProductItem product={product} key={product._id} />
                
                )})
            }
        </Row>
    )

        
    return (
    <>
         <Stack direction="horizontal" gap={3}>
            <Button> <Link to="add">Add Product</Link></Button>
             <SearchProducts onInputChange={onInputChange}/>
        </Stack>
        { list.length > 0 ?
            renderProducts() : <FallbackLoader animation="border" role="status"/>       
        }
    </>
    )
    
}

export default Products