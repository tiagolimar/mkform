import { Container, Form } from "react-bootstrap";
import DadosGerais from "./components/DadosGerais/DadosGerais";
import Disciplinas from "./components/Disciplinas/Disciplinas";
import Observacoes from "./components/Observacoes/Observacoes";


function App() {
    return (
        <Container className="mt-4">
            <Form>
                <DadosGerais />
                <Disciplinas />
                <Observacoes />
            </Form>
        </Container>
    );
}

export default App;
