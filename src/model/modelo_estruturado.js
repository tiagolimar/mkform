import { ar_condicionado } from './disciplinas/ar_condicionado.disciplina.js';

const formulario = {
    dados_gerais,
    disciplinas,
    observacoes,
}

const dados_gerais = [
    {
        valor: "DIRETRIZES DE INSTALAÇÕES PREDIAIS",
        tipo_de_valor: "text",
        tipo_de_elemento: "titulo",
    },
    {
        titulo: "NOME DA OBRA",
        valor: "Empreendimento Orion",
        tipo_de_valor: "text",
        tipo_de_elemento: "campo",
    },
    {
        titulo: "ENDEREÇO DA OBRA",
        valor: "Rua Jataí Nogueira, 1242, Meireles, Fortaleza-CE",
        tipo_de_valor: "text",
        tipo_de_elemento: "campo",
    },
    {
        titulo: "Nº DE REVISÃO",
        valor: 0,
        tipo_de_valor: "number",
        tipo_de_elemento: "campo",
    },
    {
        titulo: "DATA DA REVISÃO",
        valor: "01/12/2023",
        tipo_de_valor: "data",
        tipo_de_elemento: "campo",
    },
]

const disciplinas = [
    ar_condicionado,
]

const observacoes = [
    {
        nome: {
            valor: "Observação 01",
            tipo_de_valor: "text",
            tipo_de_elemento: "opcao",
        },
    },
]

export default formulario;
