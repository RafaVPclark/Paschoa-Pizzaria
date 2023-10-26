
//  Função pra resgatar qual o produto
  function obterProdutoDaURL() {
    const parametros = new URLSearchParams(window.location.search);
    return parametros.get("produto");
  }
// Função para montar o produto
  function produto() {
    //Pegar o produto
    const produto = obterProdutoDaURL();
    //Pegar o local onde vamos escrever as informações
    let imagem = document.querySelector("#img_produto");
    let nomeProduto = document.querySelector("#nome_produto");
    let valorProduto = document.querySelector("#valor");
    //Informações para a pizza de calabresa
    if (produto === "Calabresa") {
      imagem.src = "img/calabresa.webp";
      nomeProduto.textContent = "Calabresa";
      valorProduto.textContent = "R$ 49,99";
    }
    //Pizza Portuguesa 
    else if (produto === "Portuguesa") {
      imagem.src = "img/portuguesa.webp";
      nomeProduto.textContent = "Portuguesa";
      valorProduto.textContent = "R$ 49,99";
    }
    //Pizza Muçarela
    else if (produto === "Mucarela") {
        imagem.src = "img/mucarela.webp";
        nomeProduto.textContent = "Muçarela";
        valorProduto.textContent = "R$ 49,99";
    }
    //Pizza Marguerita
    else if (produto === "Marguerita") {
        imagem.src = "img/marguerita.webp";
        nomeProduto.textContent = "Marguerita";
        valorProduto.textContent = "R$ 49,99";
    }
    //Pizza Quatro queijos
    else if (produto === "Quatroqueijos") {
        imagem.src = "img/quatroqueijos.webp";
        nomeProduto.textContent = "Quatro Queijos";
        valorProduto.textContent = "R$ 49,99";
    }
    //Pizza Frango com Catupiry
    else if (produto === "Frangocatupiry") {
        imagem.src = "img/frangocatupiry.webp";
        nomeProduto.textContent = "Frango com Catupiry";
        valorProduto.textContent = "R$ 49,99";
    }

    //Pizzas Diferentes


    //Pizza Pão de alho
    else if (produto === "Paodealho") {
        imagem.src = "img/paodealho.webp";
        nomeProduto.textContent = "Pão de Alho";
        valorProduto.textContent = "R$ 29,99";
    }
    //Pizza carne com banana
    else if (produto === "Carnebanana") {
        imagem.src = "img/carnebanana.webp";
        nomeProduto.textContent = "Carne seca com Banana";
        valorProduto.textContent = "R$ 29,99";
    }
     //Pizza alcachofra
     else if (produto === "Alcachofra") {
        imagem.src = "img/alcachofra.webp";
        nomeProduto.textContent = "Alcachofra";
        valorProduto.textContent = "R$ 29,99";
    }
     //Pizza Mexicana
    else if (produto === "Mexicana") {
        imagem.src = "img/mexicana.webp";
        nomeProduto.textContent = "Mexicana";
        valorProduto.textContent = "R$ 29,99";
    }
     //Pizza Mexicana
     else if (produto === "Hamburguer") {
        imagem.src = "img/hamburguer.webp";
        nomeProduto.textContent = "Hamburguer";
        valorProduto.textContent = "R$ 29,99";
    }
    //Pizzas gourmet
     //Pizza Francesa
     else if (produto === "Francesa") {
        imagem.src = "img/francesa.webp";
        nomeProduto.textContent = "Francesa";
        valorProduto.textContent = "R$ 59,99";
    }
     //Pizza Parma com rucula
     else if (produto === "Parmacomrucula") {
        imagem.src = "img/parmacomrucula.webp";
        nomeProduto.textContent = "Parma com rúcula";
        valorProduto.textContent = "R$ 59,99";
    }
     //Pizza Alho negro
     else if (produto === "Alhonegro") {
        imagem.src = "img/alhonegro.webp";
        nomeProduto.textContent = "Alho negro";
        valorProduto.textContent = "R$ 59,99";
    }
     //Pizza Scamorza
     else if (produto === "Scamorza") {
        imagem.src = "img/scamorza.webp";
        nomeProduto.textContent = "Scamorza";
        valorProduto.textContent = "R$ 59,99";
    }
  }
