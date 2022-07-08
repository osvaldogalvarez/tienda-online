
import {Card, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import React, { useContext } from 'react'

export const Item = ({id, title, price, description, pictureUrl}) => {
  
  return (
<Card style={{ width: '18rem' }} id="item">
    <Card.Img variant="top" src={pictureUrl} />
    <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title>precio: ${price}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
        <Button variant="secondary" size="lg" active>
           <Link to={`/item/${id}`} className="button-detail" >
           Ver detalles
           </Link>
        </Button>
    </Card.Body>
</Card>
  )
}
