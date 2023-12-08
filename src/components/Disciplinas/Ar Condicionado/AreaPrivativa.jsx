const opcoes = [
    "SUÍTES / QUARTOS SOCIAL",
    "ESTAR ÍNTIMO",
    "ESTAR /JANTAR",
    "VARANDA",
    "CLOSET",
    "QUARTO SERVIÇO (30% DE DEMANDA)",
    "COZINHA (30% DE DEMANDA)",
    "GABINETE",
    "SUÍTE CASAL",
];

function AreaPrivativa() {
    return opcoes.map((opcao,id) => {return <div key={id}>{opcao}</div>})
}

export default AreaPrivativa;
