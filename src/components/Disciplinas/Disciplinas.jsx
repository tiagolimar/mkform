import { Container } from "react-bootstrap";
import Titulo from "./../Titulo";
import Disciplina from './Disciplina';

const disciplinas = ["AR CONDICIONADO", "HIDRÁULICA", "SANITÁRIA", "ELÉTRICA"];

function Disciplinas() {
    return (
        <Container className="border rounded pb-2">
            <Titulo title="DISCIPLINAS" />
            {disciplinas.map((disciplina, id) => {
                return <Disciplina key={id} title={disciplina} />
            })}
        </Container>
    );
}

export default Disciplinas;
