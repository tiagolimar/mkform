/* eslint-disable react/prop-types */
import { Container } from "react-bootstrap"

function Disciplina(props) {
  return (
    <Container className="border rounded pb-2">
        <div>{props.title}</div>
    </Container>
  )
}

export default Disciplina