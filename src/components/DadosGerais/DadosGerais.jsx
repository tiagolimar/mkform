import TituloGeral from "./TituloGeral.jsx";
import Titulo from "../Titulo.jsx"
import Campo from "./Campo.jsx";
import Caixa from "../Caixa.jsx";

function DadosGerais() {
    return (
        <>
            <TituloGeral title="DIRETRIZES DE INSTALAÇÕES PREDIAIS" />
            <Caixa>
                <Titulo title="DADOS GERAIS" />
                <Campo type="text" title="NOME DA OBRA" defaultValue="Empreendimento Orion" />
                <Campo type="text" title="ENDEREÇO DA OBRA" defaultValue="Rua Jataí Nogueira, 1242, Meireles, Fortaleza-CE" />
                <Campo type="number" title="Nº DE REVISÃO" defaultValue={0} />
                <Campo type="data" title="DATA DA REVISÃO" defaultValue="01/12/2023" />
            </Caixa>
        </>
    );
}

export default DadosGerais;
