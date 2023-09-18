import React from 'react'
import { CardItem } from "../../assets/styles/Card.style"


const Card = ({ children }) => {
    

    return (
      <Card>
        <CardItem>
            {children}
        </CardItem>
      </Card>
    )
}