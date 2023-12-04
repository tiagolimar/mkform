import { Container, Form } from "react-bootstrap";
import formulario from "./model/modelo_disciplina.js";
import componentes from "./components/componentes.jsx";

function renderCampo(prop_campo, prop_form) {
    const { tipo_de_elemento } = prop_campo;
    const componente = componentes[tipo_de_elemento]

    return componente(prop_campo, prop_form)
}

function renderArray(lista, prop_form, id) {
    return (
        <Container key={id} className="border p-3">
            {lista.map((item) => {
                Object.entries(item).map(([prop_form, prop_campo], id) => {
                    if (Array.isArray(prop_campo)) {
                        return renderArray(prop_campo, prop_form, id);
                    } else {
                        return renderCampo(prop_campo, prop_form, id);
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
                console.log(prop_form, "é uma lista");
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
        <Container className="border mt-3 p-3">
            <Form>
                {jsonParaFormulario(formulario)}
            </Form>
        </Container>
    );
}

export default App;
