import { Form } from "react-bootstrap";

const componentes = {
    tituloDeSecao,
    Campo,
    check,
}

function Campo(campo, chave, id) {
    const { titulo, valor, tipo_de_valor } = campo;
    return (
        <Form.Group key={id} className="mt-2">
            <Form.Label sm={3} className="fw-bold">
                {titulo}
            </Form.Label>
            <Form.Control
                type={tipo_de_valor}
                defaultValue={valor}
            />
        </Form.Group>
    )}

function tituloDeSecao(campo, chave, id) {
    const { valor, tipo_de_valor } = campo;
    return (
        <Form.Group key={id} className="mt-2">
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

function check(campo, chave, id) {
    const { titulo, valor, tipo_de_valor } = campo;
    return (
        <Form.Check
            key={id}
            type={tipo_de_valor}
            id={chave}
            label={titulo}
            defaultChecked={valor}
        />
    );
}

export default componentes;