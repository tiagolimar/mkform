import { legenda } from "./legendas/ar_condicionado.legenda.js";
import { area_privativa, area_comum, central } from "./topicos/ar_condicionados.topicos.js";

export const ar_condicionado = {
    nome: {
        valor: "AR CONDICIONADO",
        tipo_de_valor: "text",
        tipo_de_elemento: "titulo",
    },
    ativo: {
        titulo: "incluir",
        valor: false,
        tipo_de_valor: "checkbox",
        tipo_de_elemento: "check",
    },
    legenda,
    topicos: [
        area_privativa,
        area_comum,
        central,
    ],
    observacoes: [
        {
            obs1: {
                valor: "Observação 01",
                tipo_de_valor: "text",
                tipo_de_elemento: "opcao",
            },
            obs2: {
                valor: "Observação 01",
                tipo_de_valor: "text",
                tipo_de_elemento: "opcao",
            },
        },
    ],
}