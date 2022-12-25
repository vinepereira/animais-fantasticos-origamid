// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleClick(event) {
    event.preventDefault();

    linksInternos.forEach(item => {
        item.classList.remove('ativo');
    })

    this.classList.toggle('ativo');
}

linksInternos.forEach(item => {
    item.addEventListener('click', handleClick);
})
// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelectorAll('body *');

function mostrarElemento(event) {
    // console.log(event.currentTarget); // pode usar este também
    event.preventDefault();
    console.log(event.target.remove());
}

allElements.forEach(item => {
    item.addEventListener('click', mostrarElemento)
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
const html = document.documentElement;

const aumentaFonte = (event) => {
    if(event.key === 't') {
        html.classList.toggle('textomaior');
    } else {
        console.log(event.key)
    }
}
html.addEventListener('keydown', aumentaFonte);