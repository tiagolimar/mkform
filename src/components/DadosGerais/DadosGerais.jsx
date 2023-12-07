import TituloGeral from './TituloGeral';
import CampoData from './CampoData';
import CampoNumero from './CampoNumero';
import CampoTexto from './CampoTexto';
import { Container } from 'react-bootstrap';

function DadosGerais() {
  return (
  <>
    <TituloGeral title="DIRETRIZES DE INSTALAÇÕES PREDIAIS" />
    <CampoTexto title="NOME DA OBRA" defaultValue="Empreendimento Orion" />
    <CampoTexto title="ENDEREÇO DA OBRA" defaultValue="Rua Jataí Nogueira, 1242, Meireles, Fortaleza-CE" />
    <CampoNumero title="Nº DE REVISÃO" defaultValue={0} />
    <CampoData title="DATA DA REVISÃO" defaultValue="01/12/2023" />
  </>
  )
}

export default DadosGerais;