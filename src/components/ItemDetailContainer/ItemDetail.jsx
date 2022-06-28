import React from 'react'

import { Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
export const ItemDetail = ({title, description, price, pictureUrl}) => {
    return (
        
        <Card style={{ width: '28rem' }}>
        <div>
        <Card.Img variant="top" src={pictureUrl} />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <br />
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>${price}</ListGroupItem>
          <ListGroupItem>Tipo de uso: Profesional</ListGroupItem>
        <ListGroupItem>   
            Capacidad RAM: 8GB
            Velocidad: DDR4 2400 Mhz
            Capacidad máxima: 16GB
        </ListGroupItem>
        </ListGroup>
        <Card.Body>
          
        <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
      
      
    )
  }
  