const formulario = {
    titulo: {
        valor: "DIRETRIZES DE INSTALAÇÕES PREDIAIS",
        tipo_de_valor: "text",
        tipo_de_elemento: "titulo",
    },
    nome_do_obra: {
        titulo: "NOME DA OBRA",
        valor: "Empreendimento Orion",
        tipo_de_valor: "text",
        tipo_de_elemento: "campo",
    },
    endereco_da_obra: {
        titulo: "ENDEREÇO DA OBRA",
        valor: "Rua Jataí Nogueira, 1242, Meireles, Fortaleza-CE",
        tipo_de_valor: "text",
        tipo_de_elemento: "campo",
    },
    revisao: {
        titulo: "Nº DE REVISÃO",
        valor: 0,
        tipo_de_valor: "number",
        tipo_de_elemento: "campo",
    },
    data_da_revisao: {
        titulo: "DATA DA REVISÃO",
        valor: "01/12/2023",
        tipo_de_valor: "data",
        tipo_de_elemento: "campo",
    },
    disciplinas: [
        {
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
            legenda: [
                {
                    nome: {
                        valor: "Legenda",
                        tipo_de_valor: "text",
                        tipo_de_elemento: "titulo",
                    },
                    op1: {
                        valor: "1: infraestrutura de ar condicionado Hi Wall",
                        tipo_de_valor: "text",
                        tipo_de_elemento: "opcao",
                    },
                    op2: {
                        valor: "2: infraestrutura de ar condicionado K7",
                        tipo_de_valor: "text",
                        tipo_de_elemento: "opcao",
                    },
                    op3: {
                        valor: "3: infraestrutura e equipamento Hi Wall",
                        tipo_de_valor: "text",
                        tipo_de_elemento: "opcao",
                    },
                    op4: {
                        valor: "4: infraestrutura e equipamento K7",
                        tipo_de_valor: "text",
                        tipo_de_elemento: "opcao",
                    },
                    op5: {
                        valor: "5: Apenas previsão de carga (personalização)",
                        tipo_de_valor: "text",
                        tipo_de_elemento: "opcao",
                    },
                },
            ],
            topicos: [
                {
                    nome: {
                        valor: "AMBIENTES ÁREA PRIVATIVA",
                        tipo_de_valor: "text",
                        tipo_de_elemento: "titulo",
                    },
                    ativo: {
                        titulo: "incluir",
                        valor: false,
                        tipo_de_valor: "checkbox",
                        tipo_de_elemento: "check",
                    },
                    opcoes: [
                        {
                            op1: {
                                titulo: "SUÍTES / QUARTOS SOCIAL",
                                valor: false,
                                tipo_de_valor: "checkbox",
                                tipo_de_elemento: "check",
                            },
                            op2: {
                                titulo: "ESTAR ÍNTIMO",
                                valor: false,
                                tipo_de_valor: "checkbox",
                                tipo_de_elemento: "check",
                            },
                            op3: {
                                titulo: "ESTAR /JANTAR",
                                valor: false,
                                tipo_de_valor: "checkbox",
                                tipo_de_elemento: "check",
                            },
                            op4: {
                                titulo: "VARANDA",
                                valor: false,
                                tipo_de_valor: "checkbox",
                                tipo_de_elemento: "check",
                            },
                            op5: {
                                titulo: "CLOSET",
                                valor: false,
                                tipo_de_valor: "checkbox",
                                tipo_de_elemento: "check",
                            },
                            op6: {
                                titulo: "QUARTO SERVIÇO (30% DE DEMANDA)",
                                valor: false,
                                tipo_de_valor: "checkbox",
                                tipo_de_elemento: "check",
                            },
                            op7: {
                                titulo: "COZINHA (30% DE DEMANDA)",
                                valor: false,
                                tipo_de_valor: "checkbox",
                                tipo_de_elemento: "check",
                            },
                            op8: {
                                titulo: "GABINETE",
                                valor: false,
                                tipo_de_valor: "checkbox",
                                tipo_de_elemento: "check",
                            },
                            op9: {
                                titulo: "SUÍTE CASAL",
                                valor: false,
                                tipo_de_valor: "checkbox",
                                tipo_de_elemento: "check",
                            },
                        },
                    ],
                },
                {
                    nome: {
                        valor: "AMBIENTES ÁREA COMUM",
                        tipo_de_valor: "text",
                        tipo_de_elemento: "titulo",
                    },
                    ativo: {
                        titulo: "incluir",
                        valor: false,
                        tipo_de_valor: "checkbox",
                        tipo_de_elemento: "check",
                    },
                    opcoes: [
                        {
                            op1: {
                                titulo: "SUÍTES / QUARTOS SOCIAL",
                                valor: false,
                                tipo_de_valor: "checkbox",
                                tipo_de_elemento: "check",
                            },
                            op2: {
                                titulo: "ESTAR ÍNTIMO",
                                valor: false,
                                tipo_de_valor: "checkbox",
                                tipo_de_elemento: "check",
                            },
                            op3: {
                                titulo: "ESTAR /JANTAR",
                                valor: false,
                                tipo_de_valor: "checkbox",
                                tipo_de_elemento: "check",
                            },
                            op4: {
                                titulo: "VARANDA",
                                valor: false,
                                tipo_de_valor: "checkbox",
                                tipo_de_elemento: "check",
                            },
                            op5: {
                                titulo: "CLOSET",
                                valor: false,
                                tipo_de_valor: "checkbox",
                                tipo_de_elemento: "check",
                            },
                            op6: {
                                titulo: "QUARTO SERVIÇO (30% DE DEMANDA)",
                                valor: false,
                                tipo_de_valor: "checkbox",
                                tipo_de_elemento: "check",
                            },
                            op7: {
                                titulo: "COZINHA (30% DE DEMANDA)",
                                valor: false,
                                tipo_de_valor: "checkbox",
                                tipo_de_elemento: "check",
                            },
                            op8: {
                                titulo: "GABINETE",
                                valor: false,
                                tipo_de_valor: "checkbox",
                                tipo_de_elemento: "check",
                            },
                            op9: {
                                titulo: "SUÍTE CASAL",
                                valor: false,
                                tipo_de_valor: "checkbox",
                                tipo_de_elemento: "check",
                            },
                        },
                    ],
                },
                {
                    nome: {
                        valor: "CENTRAL",
                        tipo_de_valor: "text",
                        tipo_de_elemento: "titulo",
                    },
                    ativo: {
                        titulo: "incluir",
                        valor: false,
                        tipo_de_valor: "checkbox",
                        tipo_de_elemento: "check",
                    },
                    opcoes: [
                        {
                            op1: {
                                titulo: "CHILLER ELÉTRICO AR",
                                valor: false,
                                tipo_de_valor: "checkbox",
                                tipo_de_elemento: "check",
                            },
                            op2: {
                                titulo: "CHILLER ELÉTRICO ÁGUA",
                                valor: false,
                                tipo_de_valor: "checkbox",
                                tipo_de_elemento: "check",
                            },
                            op3: {
                                titulo: "CHILLER À GÁS",
                                valor: false,
                                tipo_de_valor: "checkbox",
                                tipo_de_elemento: "check",
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
    observacoes: [
        {
            nome: {
                valor: "Observação 01",
                tipo_de_valor: "text",
                tipo_de_elemento: "opcao",
            },
        },
    ],
};

export default formulario;
