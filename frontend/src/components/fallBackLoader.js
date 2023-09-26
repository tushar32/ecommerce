import React from "react";
import { Spinner } from 'react-bootstrap';

export function FallbackLoader() {

  return (
    <Spinner animation="border" role="status"></Spinner>  
  )
}

