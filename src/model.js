const formulario = {
    nome:{
        titulo: "",
        valor:"DIRETRIZES DE INSTALAÇÕES PREDIAIS",
        tipo_de_valor: "string"    
    },
    nome_do_obra: {
        titulo: "NOME DA OBRA",
        valor:"Empreendimento Orion",
        tipo_de_valor: "string"
    },
    endereco_da_obra: {
        titulo: "ENDEREÇO DA OBRA",
        valor:"Rua Jataí Nogueira, 1242, Meireles, Fortaleza-CE",
        tipo_de_valor: "string"
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
            titulo: "",
            valor: "HIDRÁULICA",
            tipo_de_valor: "string"
        },
        ativo: {
            titulo: "",
            valor: true,
            tipo_de_valor: "boolean"
        },
        legenda: ["opção 01", "opção 02"],
        topicos: [{
            nome: "o nome do tópico aqui",
            ativo: "true ou false",
            opções: [{
                    nome: "o nome da opção",
                    imagem_de_referencia: "imagem",
                    quantidade_sub_opções: 0,
                    sub_opcoes: [
                        {nome: "nome da sub opção"}
                    ]
                }
            ]}
        ],
        observacoes: [
            "sua observação aqui"
        ]
    }
    ],
    observacoes:[
        "Sua observação aqui"
    ]
}

export default formulario;