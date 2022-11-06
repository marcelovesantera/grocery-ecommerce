// FUNÇÕES DOS BOTÕES DE FILTROS E CAMPO DE BUSCA
const btnTodosProdutos = document.querySelector("#todosProdutos");
const btnHortifruti = document.querySelector("#hortifruti");
const btnPanificadora = document.querySelector("#panificadora");
const btnLaticinios = document.querySelector("#laticinios");

btnTodosProdutos.addEventListener("click", function () {
    btnHortifruti.classList.remove("estiloBotoesSelecionado");
    btnHortifruti.classList.add("estiloBotoes");

    btnPanificadora.classList.remove("estiloBotoesSelecionado");
    btnPanificadora.classList.add("estiloBotoes");

    btnLaticinios.classList.remove("estiloBotoesSelecionado");
    btnLaticinios.classList.add("estiloBotoes");

    btnTodosProdutos.classList.remove("estiloBotoes");
    btnTodosProdutos.classList.add("estiloBotoesSelecionado");

    return mostrarCards(produtos);
});

btnHortifruti.addEventListener("click", function () {
    btnTodosProdutos.classList.remove("estiloBotoesSelecionado");
    btnTodosProdutos.classList.add("estiloBotoes");

    btnPanificadora.classList.remove("estiloBotoesSelecionado");
    btnPanificadora.classList.add("estiloBotoes");

    btnLaticinios.classList.remove("estiloBotoesSelecionado");
    btnLaticinios.classList.add("estiloBotoes");

    btnHortifruti.classList.remove("estiloBotoes");
    btnHortifruti.classList.add("estiloBotoesSelecionado");

    const categoria = "Hortifruti";
    return mostrarCards(produtos, categoria);
});

btnPanificadora.addEventListener("click", function () {
    btnTodosProdutos.classList.remove("estiloBotoesSelecionado");
    btnTodosProdutos.classList.add("estiloBotoes");

    btnHortifruti.classList.remove("estiloBotoesSelecionado");
    btnHortifruti.classList.add("estiloBotoes");

    btnLaticinios.classList.remove("estiloBotoesSelecionado");
    btnLaticinios.classList.add("estiloBotoes");

    btnPanificadora.classList.remove("estiloBotoes");
    btnPanificadora.classList.add("estiloBotoesSelecionado");

    const categoria = "Panificadora";
    return mostrarCards(produtos, categoria);
});

btnLaticinios.addEventListener("click", function () {
    btnTodosProdutos.classList.remove("estiloBotoesSelecionado");
    btnTodosProdutos.classList.add("estiloBotoes");

    btnHortifruti.classList.remove("estiloBotoesSelecionado");
    btnHortifruti.classList.add("estiloBotoes");

    btnPanificadora.classList.remove("estiloBotoesSelecionado");
    btnPanificadora.classList.add("estiloBotoes");

    btnLaticinios.classList.remove("estiloBotoes");
    btnLaticinios.classList.add("estiloBotoesSelecionado");

    const categoria = "Laticínio";
    return mostrarCards(produtos, categoria);
});

const btnBuscar = document.querySelector(".botaoBuscar");
const strCaixa = document.querySelector(".campoBusca");


btnBuscar.addEventListener("click", function () {
    btnHortifruti.classList.remove("estiloBotoesSelecionado");
    btnHortifruti.classList.add("estiloBotoes");

    btnPanificadora.classList.remove("estiloBotoesSelecionado");
    btnPanificadora.classList.add("estiloBotoes");

    btnLaticinios.classList.remove("estiloBotoesSelecionado");
    btnLaticinios.classList.add("estiloBotoes");

    btnTodosProdutos.classList.remove("estiloBotoesSelecionado");
    btnTodosProdutos.classList.add("estiloBotoes");

    let input = strCaixa.value;
    let arrInputNome = [];
    let newStrNome = "";
    let arrInputSecao = [];
    let newStrSecao = "";

    for (let i = 0; i < produtos.length; i++) {
        newStrNome = produtos[i].nome.toLowerCase();
        if (newStrNome.includes(input.toLowerCase())) {
            arrInputNome.push(produtos[i]);
        }
    }

    for (let i = 0; i < produtos.length; i++) {
        newStrSecao = produtos[i].secao.toLowerCase();
        if (newStrSecao.includes(input.toLowerCase())) {
            arrInputSecao.push(produtos[i]);
        }
    }

    if (arrInputNome.length > 0) {
        mostrarCards(arrInputNome);
    } else if (arrInputSecao.length > 0) {
        mostrarCards(arrInputSecao);
    }
});


// CRIAÇÃO DOS CARDS
function criarCard(produto) {
    const ul = document.querySelector(".listaCards");

    const itemLista = document.createElement("li");
    itemLista.classList.add("cardProduto");

    const imgCard = criarImgCard(produto);
    const titleCard = criarTitleCard(produto);
    const secaoCard = criarSecaoCard(produto);
    const nutriCard = criarNutriCard(produto);
    const divPrecoBtn = criarPrecoCard(produto);

    itemLista.append(imgCard);
    itemLista.append(titleCard);
    itemLista.append(secaoCard);
    itemLista.append(nutriCard);
    itemLista.append(divPrecoBtn);
    ul.append(itemLista);
}

function criarImgCard(produto) {
    const imgCard = document.createElement("img");
    imgCard.classList.add("imgProduto");
    imgCard.src = produto.img;

    return imgCard;
}

function criarTitleCard(produto) {
    const titleCard = document.createElement("h3");
    titleCard.innerText = produto.nome;

    return titleCard;
}

function criarSecaoCard(produto) {
    const secaoCard = document.createElement("span");
    secaoCard.innerText = produto.secao;

    return secaoCard;
}

function criarNutriCard(produto) {
    const paragrafoNutri = document.createElement("p");
    paragrafoNutri.classList.add("nutrientesCard");

    const ordenedListNutri = document.createElement("ol");
    paragrafoNutri.append(ordenedListNutri)

    for (let i = 0; i < produto.componentes.length; i++) {
        const nutriCard = document.createElement("li");
        nutriCard.classList.add("nutrienteItem");

        ordenedListNutri.append(nutriCard);
        nutriCard.innerText = produto.componentes[i];
    }

    return paragrafoNutri;
}

function criarPrecoCard(produto) {
    const divPrecoBtn = document.createElement("div");
    divPrecoBtn.classList.add("divPrecoBtnComprar");

    const precoCard = document.createElement("p");
    divPrecoBtn.append(precoCard);
    precoCard.innerText = `R$ ${produto.preco}.00`;

    const btnComprar = document.createElement("button");
    btnComprar.classList.add("comprarItem");
    btnComprar.id = produto.id;
    divPrecoBtn.append(btnComprar);
    btnComprar.innerText = "Comprar";

    return divPrecoBtn;
}

function filtrarSecao(listaProdutos, secao) {
    const produtosFiltrados = listaProdutos.filter((produto) => {
        return produto.secao === secao;
    });
    return produtosFiltrados;
}

function mostrarCards(listaProdutos, secao) {
    document.querySelector(".listaCards").innerHTML = "";

    if (secao === undefined) {
        for (let i = 0; i < listaProdutos.length; i++) {
            const produto = listaProdutos[i];
            criarCard(produto);
        }
    } else {
        const produtosFiltrados = filtrarSecao(listaProdutos, secao);

        for (let i = 0; i < produtosFiltrados.length; i++) {
            const produto = produtosFiltrados[i];
            criarCard(produto);
        }
    }

    const btnAddCarrinho = document.querySelectorAll('.comprarItem');

    btnAddCarrinho.forEach((btnAdd) => btnAdd.addEventListener("click", (element) => {
        const btnClicado = element.target.id;
        // console.log(btnClicado);
        pushArrayCarrinho(btnClicado);
    }));
}

// FUNÇÃO SOMA E CARRINHO
let carrinho = [];

function mostrarSoma(arrayCarrinho) {
    const valorTotal = document.querySelector('.spanSomaPreco');
    valorTotal.innerText = '';

    let soma = 0;

    for (let i = 0; i < arrayCarrinho.length; i++) {
        soma += arrayCarrinho[i].preco;
    }
    return valorTotal.innerText = `R$ ${soma}.00`;
}

function criarItemCarrinho(itemProduto, index) {
    const listaItens = document.querySelector(".listaCarrinho");

    const itemCarrinho = document.createElement("li");
    itemCarrinho.classList.add("itemAdicionado");

    const divItemCarrinho = document.createElement("div");
    divItemCarrinho.classList.add("infosCarrinho");

    const imgBtnCarrinho = document.createElement("img");
    imgBtnCarrinho.classList.add("imgIconeRemover");
    imgBtnCarrinho.src = "./src/img/trash.svg";
    imgBtnCarrinho.id = index;

    const imgItemCarrinho = document.createElement("img");
    imgItemCarrinho.classList.add("imgItemCarrinho");
    imgItemCarrinho.src = itemProduto.img;

    const infosItemCarrinho = document.createElement("div");
    infosItemCarrinho.classList.add("infosItemCarrinho");

    const tituloItemCarrinho = document.createElement("h1");
    tituloItemCarrinho.classList.add("tituloItemCarrinho")
    tituloItemCarrinho.innerText = itemProduto.nome;

    const secaoItemCarrinho = document.createElement("h2");
    secaoItemCarrinho.classList.add("secaoItemCarrinho")
    secaoItemCarrinho.innerText = itemProduto.secao;

    const precoItemCarrinho = document.createElement("p");
    precoItemCarrinho.classList.add("precoItemCarrinho")
    precoItemCarrinho.innerText = `R$ ${itemProduto.preco}.00`;

    const btnItemCarrinho = document.createElement("button");
    btnItemCarrinho.classList.add("iconeRemover");

    infosItemCarrinho.append(tituloItemCarrinho, secaoItemCarrinho, precoItemCarrinho);
    itemCarrinho.append(divItemCarrinho, btnItemCarrinho);
    btnItemCarrinho.append(imgBtnCarrinho);
    divItemCarrinho.append(imgItemCarrinho, infosItemCarrinho);
    listaItens.append(itemCarrinho);
}

function addItemCarrinho(arrayCarrinho) {
    if (arrayCarrinho.length == 0) {
        const divCaixaCarrinho = document.querySelector(".caixaCarrinho");
        divCaixaCarrinho.innerHTML = "";

        divCaixaCarrinho.classList.remove("caixaCarrinhoComItems");
        divCaixaCarrinho.classList.add("caixaCarrinho");
    } else if (arrayCarrinho.length == 1) {
        const divCaixaCarrinho = document.querySelector(".caixaCarrinho");
        divCaixaCarrinho.innerHTML = "";

        divCaixaCarrinho.classList.remove("caixaCarrinho");
        divCaixaCarrinho.classList.add("caixaCarrinhoComItems");

        const listaItens = document.createElement("ul");
        listaItens.classList.add("listaCarrinho");
        divCaixaCarrinho.append(listaItens);

        for (let i = 0; i < arrayCarrinho.length; i++) {
            const itemProduto = arrayCarrinho[i];
            const index = i;
            criarItemCarrinho(itemProduto, index);
        }
    } else if (arrayCarrinho.length > 1) {
        const listaItens = document.querySelector(".listaCarrinho");
        listaItens.innerHTML = "";

        for (let i = 0; i < arrayCarrinho.length; i++) {
            const itemProduto = arrayCarrinho[i];
            const index = i;
            criarItemCarrinho(itemProduto, index);
        }
    }

    const btnItemCarrinho = document.querySelectorAll(".imgIconeRemover");

    btnItemCarrinho.forEach((btnRemover) => btnRemover.addEventListener("click", (element) => {
        const btnClicadoRemov = element.target.id;
        // console.log(btnClicadoRemov);
        removeArrayCarrinho(btnClicadoRemov);
    }));
}

function removerItemCarrinho(arrayCarrinho) {
    if(arrayCarrinho.length >= 1) {
        const listaItens = document.querySelector(".listaCarrinho");
        listaItens.innerHTML = "";

        for (let i = 0; i < arrayCarrinho.length; i++) {
            const itemProduto = arrayCarrinho[i];
            const index = i;
            criarItemCarrinho(itemProduto, index);
        }
    }else if(arrayCarrinho.length === 0){
        const divCaixaCarrinho = document.querySelector(".caixaCarrinhoComItems");
        divCaixaCarrinho.innerHTML = "";

        divCaixaCarrinho.classList.remove("caixaCarrinhoComItems");
        divCaixaCarrinho.classList.add("caixaCarrinho");

        const iconeVazio = document.createElement("img");
        iconeVazio.classList.add("iconeVazio");
        iconeVazio.src = "./src/img/shopping-bag.svg"

        const textoVazio = document.createElement("p");
        textoVazio.classList.add("textoCorpoCarrinho");
        textoVazio.innerText = "Por enquanto não temos produtos no carrinho";

        divCaixaCarrinho.append(iconeVazio, textoVazio);
    }

    const btnItemCarrinho = document.querySelectorAll(".imgIconeRemover");

    btnItemCarrinho.forEach((btnRemover) => btnRemover.addEventListener("click", (element) => {
        const btnClicadoRemov = element.target.id;
        // console.log(btnClicadoRemov);
        removeArrayCarrinho(btnClicadoRemov);
    }));
}

function pushArrayCarrinho(idProduto) {
    for (let i = 0; i < produtos.length; i++) {
        if (idProduto == produtos[i].id) {
            carrinho.push(produtos[i]);
            mostrarSoma(carrinho);
            addItemCarrinho(carrinho);
        }
    }
}

function removeArrayCarrinho(idProduto) {
    let auxArray = [];

    for (let i = 0; i < carrinho.length; i++) {
        if (i != idProduto) {
            auxArray.push(carrinho[i])
        }
    }
    carrinho = auxArray

    mostrarSoma(carrinho);
    removerItemCarrinho(carrinho);
}

mostrarCards(produtos, );;