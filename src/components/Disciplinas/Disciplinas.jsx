import Titulo from "./../Titulo";
import Disciplina from "./Disciplina";
import Caixa from "../Caixa.jsx";
import ArCondicionado from "./componentes/ArCondicionado.jsx";

const disciplinas = [
    ["AR CONDICIONADO", ArCondicionado],
    ["HIDRÁULICA - ÁGUA FRIA", ArCondicionado],
    ["HIDRÁULICA - ÁGUA QUENTE", ArCondicionado],
    ["HIDRÁULICA - ÁGUA MINERAL", ArCondicionado],
    ["SANITÁRIA", ArCondicionado],
    ["ELÉTRICA", ArCondicionado],
    ["COMUNICAÇÃO", ArCondicionado],
    ["COMBATE À INCÊNDIO", ArCondicionado],
    ["GÁS", ArCondicionado],
    ["SPDA", ArCondicionado],
];

function Disciplinas() {
    return (
        <Caixa>
            <Titulo title="DISCIPLINAS" />
            {disciplinas.map(([nome, Componente], id) => {
                return (
                    <Disciplina key={id} id={`${nome}-${id}`} title={`${id + 1}. ${nome}`}>
                        <Componente />
                    </Disciplina>
                );
            })}
        </Caixa>
    );
}

export default Disciplinas;
