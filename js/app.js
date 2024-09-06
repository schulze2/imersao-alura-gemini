function pesquisar() {
  // Função responsável por realizar a pesquisa e exibir os resultados na página.

  let section = document.getElementById("resultados-pesquisa");
  // Obtém a seção HTML onde os resultados serão exibidos.

  let campoPesquisa = document.getElementById('campo-pesquisa').value

  //  se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte </p>"
    return ;
  }
  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = "";
  let titulo ="";
  let descricao = "";
  let tags = "";
  // Inicializa uma string vazia para concatenar os resultados da pesquisa.

  for (let dado of dados) {
    titulo = dado.nome.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    //  se titulo includes campo Pesquisa
    // então, faça...
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Itera sobre cada item de dados da pesquisa.
      resultados += `
          <div class="item-resultado">
              <h2 class="descricao-meta">
                  <a href="#" target="_blank">${dado.nome}</a>
              </h2>
              <p>
                  ${dado.descricao}
              </p>
              <a href="${dado.link}" target="_blank">
                  Mais Informações
              </a>
          </div>
      `;
    } 

  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
  }

  section.innerHTML = resultados;
  // Atribui o conteúdo HTML gerado à seção de resultados.
}


// console.log(dados[0].nome)

