console.log(window.location.href);

var pageWidth = document.body.offsetWidth;
var pageHeight = document.body.offsetHeight;

let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

const TITLE = document.title;

document.getElementById('div-page').innerText = `
    Url da página: ${window.location.href}
    Título da página: ${TITLE}

    Largura da página: ${pageWidth}
    Altura da página: ${pageHeight}

    Largura da tela: ${screenWidth}
    Altura da tela ${screenHeight}

    Última alteração: ${document.lastModified}
`

setTimeout(() => {
    alert(`Posição da barra de rolagem: ${window.pageYOffset}px`)
}, 3000);

document.getElementById('button').addEventListener('click', () => window.history.back());

const newPosition = () => {
    let value;
    while (isNaN(value)){
        value = parseInt(window.prompt('Digite a posição'));
    }
    window.scrollTo(0, value);
}

document.getElementById('setScrollBarPosition').addEventListener('click', () => newPosition());

document.getElementById('goTo').addEventListener('click', () => {
    if(window.confirm('Tem certeza que deseja ir para o site da semana acadêmica de TSI?'))
    window.open('http://semana.tsi.gp.utfpr.edu.br');
});
