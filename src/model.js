const formulario = {
    nome:{
        valor:"DIRETRIZES DE INSTALAÇÕES PREDIAIS",
        tipo_de_valor: "text"    
    },
    nome_do_obra: {
        titulo: "NOME DA OBRA",
        valor:"Empreendimento Orion",
        tipo_de_valor: "text"
    },
    endereco_da_obra: {
        titulo: "ENDEREÇO DA OBRA",
        valor:"Rua Jataí Nogueira, 1242, Meireles, Fortaleza-CE",
        tipo_de_valor: "text"
    },
    revisao: {
        titulo: "Nº DE REVISÃO",
        valor:0,
        tipo_de_valor: "number"
    },
    data_da_revisao: {
        titulo: "DATA DA REVISÃO",
        valor:"01/12/2023",
        tipo_de_valor: "data"
    },
    disciplinas: [{
        nome: {
            valor: "HIDRÁULICA",
            tipo_de_valor: "text"
        },
        ativo: {
            titulo: "incluir",
            valor: true,
            tipo_de_valor: "radio",
        },
        legenda: [{
            titulo: "opção 01",
            valor: true,
            tipo_de_valor: "check"
        },
        {
            titulo: "opção 01",
            valor: true,
            tipo_de_valor: "check"
        }],
        topicos: [{
            nome: {
                valor: "Tópico 1",
                tipo_de_valor: "text"
            },
            ativo: {
                titulo: "incluir",
                valor: true,
                tipo_de_valor: "radio",
            },
            opcoes: [{
                    nome: {
                        valor: "Opção 1",
                        tipo_de_valor: "text"
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
                        {nome: {
                            valor: "Sub-opção 1",
                            tipo_de_valor: "text"
                        }}
                    ]
                }
            ]}
        ],
        observacoes: [{
            nome: {
                valor: "Observação 01",
                tipo_de_valor: "text",
            },
        }]
    }
    ],
    observacoes:[{
        nome: {
            valor: "Observação 01",
            tipo_de_valor: "text",
        },
    }]
}

export default formulario;