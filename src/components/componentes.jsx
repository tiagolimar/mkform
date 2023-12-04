import { Form } from "react-bootstrap";

const componentes = {
    titulo,
    campo,
    check,
}

function campo(prop_campo, prop_form) {
    const { titulo, valor, tipo_de_valor } = prop_campo;
    return (
        <Form.Group key={prop_form} className="mt-2">
            <Form.Label sm={3} className="fw-bold">
                {titulo}
            </Form.Label>
            <Form.Control
                type={tipo_de_valor}
                defaultValue={valor}
            />
        </Form.Group>
    )}

function titulo(prop_campo, chave, id) {
    const { valor, tipo_de_valor } = prop_campo;
    return (
        <Form.Group key={id}>
            <Form.Control
                type={tipo_de_valor}
                defaultValue={valor}
                style={{
                    border: "none",
                    paddingLeft: 0,
                    fontWeight: "bold",
                }}
            />
        </Form.Group>
    )}

function check(prop_campo, prop_form, id) {
    const { titulo, valor, tipo_de_valor } = prop_campo;
    return (
        <Form.Check
            key={prop_form}
            type={tipo_de_valor}
            id={id}
            label={titulo}
            defaultChecked={valor}
            className="mt-2"
        />
    );
}

export default componentes;