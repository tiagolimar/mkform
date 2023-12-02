import { Container, Form } from "react-bootstrap";
import formulario from "./model";

function renderCampo(campo, chave) {
    const { titulo, valor, tipo_de_valor } = campo;

    switch (tipo_de_valor) {
        case "boolean":
            return (
                <Form.Check
                    key={chave}
                    type="checkbox"
                    id={chave}
                    label={titulo}
                    defaultChecked={valor}
                />
            );

        default:
            return (
                <Form.Group key={chave} className="mt-2">
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

function renderArray(campo, chave) {
    const { titulo } = campo;

    return (
        <Container key={chave} className="border p-3 mt-3">
            <Form.Label>{titulo}</Form.Label>
            {campo.map((item, index) => {
                if (Array.isArray(item)) {
                    return renderArray(item, index);
                } else {
                    return renderCampo(item, index);
                }
            })}
        </Container>
    );
}

function App() {
    return (
        <Form>
            <Container className="mt-4">
                {Object.entries(formulario).map(([chave, campo]) => {
                    if (Array.isArray(campo)) {
                        return renderArray(campo, chave);
                    } else {
                        return renderCampo(campo, chave);
                    }
                })}
            </Container>
        </Form>
    );
}

export default App;
