//@ts-check
import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import { Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
export const ItemDetail = ({title, description, price, pictureUrl}) => {
  const onAdd = (count) => {
    alert( `Agregaste ${count} items al carrito` )
  }
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
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      </Card>
      
      
    )
  }
  