import Titulo from "./../Titulo";
import Disciplina from './Disciplina';
import Caixa from "../Caixa.jsx";

const disciplinas = [
    "AR CONDICIONADO",
    "HIDRÁULICA - ÁGUA FRIA",
    "HIDRÁULICA - ÁGUA QUENTE",
    "HIDRÁULICA - ÁGUA MINERAL",
    "SANITÁRIA",
    "ELÉTRICA",
    "COMUNICAÇÃO",
    "COMBATE À INCÊNDIO",
    "GÁS",
    "SPDA",
];

function Disciplinas() {
    return (
        <Caixa>
            <Titulo title="DISCIPLINAS" />
            {disciplinas.map((disciplina, id) => {
                return <Disciplina key={id} title={`${id+1}. ${disciplina}`} />
            })}
        </Caixa>
    );
}

export default Disciplinas;
