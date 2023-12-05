const formulario = {
    disciplinas: [
        {
            nome: {
                valor: "HIDRÁULICA",
                tipo_de_valor: "text",
                tipo_de_elemento: "titulo",
            },
            ativo: {
                titulo: "incluir",
                valor: true,
                tipo_de_valor: "checkbox",
                tipo_de_elemento: "check",
            },
            legenda: [
                {
                    nome: {
                        valor: "Legenda",
                        tipo_de_valor: "text",
                        tipo_de_elemento: "titulo",
                    },
                    op1: {
                        valor: "Opção 01",
                        tipo_de_valor: "text",
                        tipo_de_elemento: "opcao",
                    },
                    op2: {
                        valor: "Opção 02",
                        tipo_de_valor: "text",
                        tipo_de_elemento: "opcao",
                    },
                },
            ],
            topicos: [
                {
                    nome: {
                        valor: "Tópico 1 - Materiais de Tubulações",
                        tipo_de_valor: "text",
                        tipo_de_elemento: "titulo",
                    },
                    ativo: {
                        titulo: "incluir",
                        valor: true,
                        tipo_de_valor: "checkbox",
                        tipo_de_elemento: "check",
                    },
                    opcoes: [
                        {
                            nome: {
                                valor: "Opção 1",
                                tipo_de_valor: "text",
                                tipo_de_elemento: "opcao",
                            },
                            subop1: {
                                valor: "Sub-opção 1",
                                tipo_de_valor: "text",
                                tipo_de_elemento: "opcao",
                            },
                            imagem_de_referencia: {
                                valor: "Imagem",
                                tipo_de_valor: "text",
                                tipo_de_elemento: "opcao",
                            },
                        },
                    ],
                },
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
        },
    ],
};

export default formulario;
