const produtos = [
    {
        id: 1,
        nome: 'Banana',
        preco: 4,
        secao: 'Hortifruti',
        categoria: 'Fruta',
        img: "./src/img/banana.png",
        promocao: true,
        precoPromocao: 2,
        componentes: [
            'Potássio',
            'Vitamina B6',
            'Vitamina C',
            'Folatos'
        ] 
    },
    {
        id: 2,
        nome: 'Morango',
        preco: 7,
        secao: 'Hortifruti',
        categoria: 'Fruta',
        img: './src/img/morango.png',
        promocao: false,
        precoPromocao: 5,
        componentes: [
            'Fibras',
            'Vitamina C',
            'Cálcio',
            'Ferro'
        ]
    },
    {
        id: 3,
        nome: 'Maçã',
        preco: 4,
        secao: 'Hortifruti',
        categoria: 'Fruta',
        img: './src/img/maca.png',
        promocao: true,
        precoPromocao: 2,
        componentes: [
            'Potássio',
            'Vitamina A',
            'Vitamina E',
            'Vitamina C'
        ]
    },
    {
        id: 4,
        nome: 'Pão',
        preco: 5,
        secao: 'Panificadora',
        categoria: 'Pães',
        img: './src/img/pao.png',
        promocao: true,
        precoPromocao: 3,
        componentes: [
            'Cálcio',
            'Sódio',
            'Fibra Alimentar',
            'Proteínas'
        ]
    },
    {
        id: 5,
        nome: 'Leite',
        preco: 7,
        secao: 'Laticínio',
        categoria: 'Leite',
        img: './src/img/leite.png',
        promocao: false,
        precoPromocao: 1,
        componentes: [
            'Carboidratos',
            'Proteínas',
            'Gorduras totais'
        ]
    },
    {
        id: 6,
        nome: 'Yogurt de Morango',
        preco: 3,
        secao: 'Laticínio',
        categoria: 'Doce',
        img: './src/img/yogurt-morango.png',
        promocao: false,
        precoPromocao: 2,
        componentes: [
            'Fibras',
            'Vitamina C',
            'Cálcio',
            'Ferro'
        ]
    },
    {
        id: 7,
        nome: 'Bolo',
        preco: 10,
        secao: 'Panificadora',
        categoria: 'Doce',
        img: './src/img/bolo.png',
        promocao: false,
        precoPromocao: 1,
        componentes: [
            'Carboidratos',
            'Proteínas',
            'Gorduras totais'
        ]
    },
    {
        id: 8,
        nome: 'Torta de Maçã',
        preco: 4,
        secao: 'Panificadora',
        categoria: 'Doce',
        img: './src/img/torta-maca.png',
        promocao: true,
        precoPromocao: 2,
        componentes: [
            'Fibras',
            'Vitamina C',
            'Cálcio',
            'Ferro'
        ]
    }
]