import Legenda from "../componentes/Legenda";
import AreaPrivativa from './AreaPrivativa';
import AreaComum from './AreaComum';
import Central from './Central';

const topicos = [
    ["AMBIENTES ÁREA PRIVATIVA", AreaPrivativa],
    ["AMBIENTES ÁREA COMUM", AreaComum],
    ["CENTRAL", Central],
];

function ArCondicionado() {
    return (
        <>
            <Legenda />
            {topicos.map(([topico, Componente], id) => {
                return <Componente key={id} title={topico} />;
            })}
        </>
    );
}

export default ArCondicionado;

