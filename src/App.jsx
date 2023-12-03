import { Container, Form } from "react-bootstrap";
import formulario from "./model";

function renderCampo(campo, chave, id) {
    const { titulo, valor, tipo_de_valor } = campo;

    switch (tipo_de_valor) {
        case "check":
            console.log("check");
            return (
                <Form.Check
                    key={id}
                    type="checkbox"
                    id={chave}
                    label={titulo}
                    defaultChecked={valor}
                />
            );

        case "radio":
            console.log("radio");
            return (
                <Form.Check
                    key={id}
                    type="radio"
                    id={id}
                    label={titulo}
                    defaultChecked={valor}
                />
            );

        default:
            return (
                <Form.Group key={id} className="mt-2">
                    <Form.Label sm={3} className="fw-bold">
                        {titulo}
                    </Form.Label>
                    <Form.Control
                        type={tipo_de_valor}
                        defaultValue={valor}
                        style={{
                            border: titulo ? "1px solid #ced4da" : "none",
                            paddingLeft: titulo ? "12px" : 0,
                            fontWeight: titulo ? "normal" : "bold",
                        }}
                    />
                </Form.Group>
            );
    }
}

function renderArray(campo, chave, id) {
    return (
        <Container key={id} className="border p-3 mt-3">
            <Form.Label>{"um titulo bacana"}</Form.Label>
            {campo.map((item) => {
                Object.entries(item).map(([chave, campo], id) => {
                    if (Array.isArray(campo)) {
                        return renderArray(campo, chave, id);
                    } else {
                        return renderCampo(campo, chave, id);
                    }
                });
            })}
        </Container>
    );
}

function App() {
    return (
        <Form>
            <Container className="mt-4">
                {Object.entries(formulario).map(([chave, campo], id) => {
                    if (Array.isArray(campo)) {
                        return renderArray(campo, chave, id);
                    } else {
                        return renderCampo(campo, chave, id);
                    }
                })}
            </Container>
        </Form>
    );
}

export default App;
