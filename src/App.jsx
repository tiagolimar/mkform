import { Container, Form } from "react-bootstrap";
import formulario from "./model/modelo_disciplina.js";
import componentes from "./components/componentes.jsx";

function renderCampo(prop_campo, prop_form, id) {
    const { tipo_de_elemento } = prop_campo;
    const componente = componentes[tipo_de_elemento];

    return componente(prop_campo, prop_form, id);
}

function renderArray(lista, prop_form, id) {
    return (
        <Container key={`${prop_form}-${id}`} className="border p-3">
            {lista.map((secao) => {
                    return(Object.entries(secao).map(([prop_form, valor], subId) => {
                        if (Array.isArray(valor)) {
                            const lista = valor;
                            return renderArray(lista, prop_form, subId);
                        } else {
                            const prop_campo = valor;
                            return renderCampo(prop_campo, prop_form);
                        }
                    }))
            })}
        </Container>
    );
}

function jsonParaFormulario(obj) {
    const formulario = obj;
    return Object.entries(formulario).map(([prop_form, valor], id) => {
        if (Array.isArray(valor)) {
            const lista = valor;
            return renderArray(lista, prop_form, id);
        } else {
            const prop_campo = valor;
            return renderCampo(prop_campo, prop_form, id);
        }
    });
}

function App() {
    return (
        <Container className="border mt-3 p-3">
            <Form>{jsonParaFormulario(formulario)}</Form>
        </Container>
    );
}

export default App;
