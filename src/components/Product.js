import { Card } from "react-bootstrap"

export default function Product (props) {
  return (
    <Card>
      <Card.Img src={props.product.image} width={100} height={100} />
      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <Card.Text>${props.product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}