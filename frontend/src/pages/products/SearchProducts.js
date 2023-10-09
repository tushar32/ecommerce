import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchProducts = ({onInputChange}) => {


    return(
        <InputGroup className="mb-3">
        <Button variant="outline-secondary" id="button-addon1">
          Search
        </Button>
        <Form.Control
          aria-label="Search your products"
          
          onChange={e=> onInputChange(e)}
        />
      </InputGroup>
    )

}

 export default SearchProducts