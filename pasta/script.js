const paragrafo = document.querySelector('p');
paragrafo.textContent = "novo texto no parágrafo";

const h1Element = document.querySelector('h1');
h1Element.textContent = "novo h1";

document.title = "novo título";

const back = document.getElementsByTagName('body')[0];

function mudarFundo() {
    if (back.className === 'claro') {
        back.className = "escuro";
    }
    else if (back.className === 'escuro')
        back.className = 'claro'
}
function soma() {
    let numero1 = document.getElementById('numero1');
    let numero2 = document.getElementById('numero2');
    let result = Number(numero1) + Number(numero2);
    alert(result);
}