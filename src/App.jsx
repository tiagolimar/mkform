import { Container, Form } from "react-bootstrap";
import formulario from "./model/modelo_simples.js";
import componentes from "./components/componentes.jsx";

function renderCampo(prop_campo, prop_form) {
    const { tipo_de_elemento } = prop_campo;
    const componente = componentes[tipo_de_elemento]

    return componente(prop_campo, prop_form)
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

function jsonParaFormulario(obj){
    const formulario = obj
    return(
        Object.entries(formulario).map(([prop_form, valor], id) => {
            if (Array.isArray(valor)) {
                const lista = valor
                return renderArray(lista, prop_form, id);
            } else {
                const prop_campo = valor
                return renderCampo(prop_campo, prop_form);
            }
        })
    )
}

function App() {
    return (
        <Container className="mt-4">
            <Form>
                {jsonParaFormulario(formulario)}
            </Form>
        </Container>
    );
}

export default App;
