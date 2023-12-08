/* eslint-disable react/prop-types */
import { Container } from "react-bootstrap";

function Caixa(props) {
    return (
        <Container className={`bg-white border rounded pb-2 pt-2 mt-${props.mt || 4} shadow`}>
            {props.children}
        </Container>
    );
}

export default Caixa;
