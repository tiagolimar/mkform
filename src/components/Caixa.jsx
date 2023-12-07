/* eslint-disable react/prop-types */
import { Container } from "react-bootstrap";

function Caixa(props) {
  return (
    <Container className="border rounded pb-2 pt-2">
        {props.children}
    </Container>
  )
}

export default Caixa;