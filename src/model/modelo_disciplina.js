const formulario = {
    disciplinas: [
        {
            nome: {
                valor: "HIDRÁULICA",
                tipo_de_valor: "text",
            },
            ativo: {
                titulo: "incluir",
                valor: true,
                tipo_de_valor: "radio",
            },
            legenda: [
                {
                    titulo: "opção 01",
                    valor: true,
                    tipo_de_valor: "check",
                },
                {
                    titulo: "opção 01",
                    valor: true,
                    tipo_de_valor: "check",
                },
            ],
            topicos: [
                {
                    nome: {
                        valor: "Tópico 1",
                        tipo_de_valor: "text",
                    },
                    ativo: {
                        titulo: "incluir",
                        valor: true,
                        tipo_de_valor: "radio",
                    },
                    opcoes: [
                        {
                            nome: {
                                valor: "Opção 1",
                                tipo_de_valor: "text",
                            },
                            imagem_de_referencia: {
                                titulo: "Imagem",
                                valor: "Imagem",
                                tipo_de_valor: "text",
                            },
                            quantidade_sub_opções: {
                                titulo: "Nº sub-opções",
                                valor: 1,
                                tipo_de_valor: "number",
                            },
                            sub_opcoes: [
                                {
                                    nome: {
                                        valor: "Sub-opção 1",
                                        tipo_de_valor: "text",
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            observacoes: [
                {
                    nome: {
                        valor: "Observação 01",
                        tipo_de_valor: "text",
                    },
                },
            ],
        },
    ],
};

export default formulario;
