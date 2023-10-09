import React, { useEffect, useState }   from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { checkValidation } from '../../utils/checkValidation';
import { useParams } from 'react-router-dom';
import { Spinner, Tab, Tabs } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { getProductById, saveProduct } from './productSlice';
import FallbackLoader from '../../components/fallBackLoader';

const EditProduct = () => {
    let { id } = useParams();
   
    const dispatch = useDispatch();
    const { product }  = useSelector((state) => state.products);

    console.log('product', product)
    useEffect(() => {
       dispatch(getProductById(id))
        
    },[dispatch])

    useEffect(() => {
      
      if(product) {
        setFormData({...formData, ...product })
      }
    },[product])


  const [formData, setFormData] = useState({
    title:'',
    description:'',
    alias:'',
    keywords:'',
    itemcode:'',
    price:'',
    ean:'',
  })

  const validationRules = {
    title: {
      required: true,
      min:3,
      max:100,
      aplhabetOnly: true
    },
    description:{
      required: true
    }
  }
  const [ submit, setSubmit] = useState(false)
  const [ error, setError] = useState({})
  const { title, description, alias, keywords, itemcode, price, ean } = formData

  useEffect(() => {
    const allValues = Object.values(error).filter(val => val !== '')
    // const allTouched = Object.keys(formData).length ===  Object.values(error).length

    if(allValues.length == 0) {
        setSubmit(true)
    } else {
        setSubmit(false)
    } 
  },[error])

const onSubmit = async (event) => {
  event.preventDefault()
  console.log('cdcfsdsfsafdsd', formData);

  for (let inputName in formData) {
    if(inputName in validationRules ) {
      handleValidation(inputName, formData[inputName], validationRules[inputName])
    }
  }


  if(submit) {
  console.log('formData', formData)
    const body = JSON.stringify(formData);
    dispatch(saveProduct(id, body)  )
  }
}

const onInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
}

const handleValidation = (inputName, value, validationRules) => {
   const errorObj = checkValidation(inputName, value, validationRules)

   setError((prevState) => {
    return {...prevState,...errorObj}
  })

}

return (
    <>
    { product !== null ?
    (   
    <>
      <Form onSubmit={onSubmit} noValidate>
        <Tabs
            defaultActiveKey="General"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="General" title="General">      

              <Row className="mb-3">
                <Col xs={6}>
                  <Form.Group as={Col} controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" placeholder="Enter Product Title"
                    defaultValue={title}
                    onChange={e=> onInputChange(e)}
                    
                    onBlur={e =>handleValidation('title', e.target.value, validationRules['title'])} />
                    {error.title && (
                            <p className="invalid-text"> 
                              {error.title}
                            </p>
                          )
                        }
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                  <Col xs={6}>
                  <Form.Group as={Col} controlId="description">
                      <Form.Label>Description</Form.Label>
                      <Form.Control as="textarea" placeholder="Description" name="description" 
                      defaultValue={description}
                      onChange={e=> onInputChange(e)}
                      onBlur={e=>handleValidation('description', e.target.value, validationRules['description'])}/>
                      
                      {
                          error.description && (
                              <p className="invalid-text"> 
                                  {error.description}
                              </p>
                      )}
                  </Form.Group>
                  </Col>
              </Row>
      

              <Form.Group className="mb-3" controlId="alias">
                  <Form.Label>Alias</Form.Label>
                  <Form.Control placeholder="1234 Main St" name="alias"
                      defaultValue={alias}
                      onChange={e=> onInputChange(e)}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Keywords</Form.Label>
                  <Form.Control placeholder="keywords" name="keywords"
                      defaultValue={keywords}
                      onChange={e=> onInputChange(e)}/>
              </Form.Group>

              <Row className="mb-3">
                  <Form.Group as={Col} controlId="itemcode">
                  <Form.Label>Itemcode</Form.Label>
                  <Form.Control name="itemcode"
                      defaultValue={itemcode}
                      onChange={e=> onInputChange(e)}/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="price"
                      defaultValue={price}
                      onChange={e=> onInputChange(e)}>
                  <Form.Label>price</Form.Label>
                  <Form.Control name="price" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="EAN"
                      defaultValue={ean}
                      onChange={e=> onInputChange(e)}>
                  <Form.Label>EAN</Form.Label>
                  <Form.Control name="ean" />
                  </Form.Group>
              </Row>
              
            </Tab>

            <Tab eventKey="Images" title="Images">      
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Multiple files input example</Form.Label>
                <Form.Control type="file" multiple />
              </Form.Group>
            </Tab>

              
        </Tabs>
        <Button variant="primary" type="submit" disabled={!submit}>
                  Submit
              </Button>
        </Form>

    </>
        )
      : <FallbackLoader animation="border" role="status"/>       
    }
    </>
  );

}

export default EditProduct