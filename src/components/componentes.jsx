import { Form } from "react-bootstrap";

const componentes = {
    titulo,
    campo,
    check,
    opcao,
}

function campo(prop_campo, prop_form, id) {
    const { titulo, valor, tipo_de_valor } = prop_campo;
    return (
        <Form.Group key={`${prop_form}-${id}`} className="mt-2">
            <Form.Label sm={3} className="fw-bold">
                {titulo}
            </Form.Label>
            <Form.Control
                type={tipo_de_valor}
                defaultValue={valor}
            />
        </Form.Group>
    )}

function titulo(prop_campo, prop_form, id) {
    const { valor, tipo_de_valor } = prop_campo;
    const comprimento = valor.length > 10 ? valor.length*1.25 : 10;
    return (
        <Form.Group key={`${prop_form}-${id}`}>
            <Form.Control
                type={tipo_de_valor}
                defaultValue={valor}
                style={{
                    border: "none",
                    paddingLeft: 0,
                    fontWeight: "bold",
                    width: `${comprimento}ch`,
                }}
            />
        </Form.Group>
    )}

function opcao(prop_campo, prop_form, id) {
    const { valor, tipo_de_valor } = prop_campo;
    const comprimento = valor.length > 15 ? valor.length*0.9 : 15;
    return (
        <Form.Group key={`${prop_form}-${id}`}>
            <Form.Control
                type={tipo_de_valor}
                defaultValue={valor}
                style={{
                    border: "none",
                    paddingLeft: 0,
                    width: `${comprimento}ch`,
                }}
            />
        </Form.Group>
    )}

function check(prop_campo, prop_form, id) {
    const { titulo, valor, tipo_de_valor } = prop_campo;
    return (
        <Form.Check
            key={`${prop_form}-${id}`}
            type={tipo_de_valor}
            id={`${prop_form}-${id}`}
            label={titulo}
            defaultChecked={valor}
            className="mt-2 me-4"
        />
    );
}

export default componentes;