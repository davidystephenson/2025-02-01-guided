import { Container } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";

export default function ProductsListPage () {
  const cards = products.map(product => {
    return <Product key={product.id} product={product} />
  })
  return (
    <Container>
      {cards}
    </Container>
  )
}