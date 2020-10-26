const root = document.querySelector('#app');

var tobeinserted = document.createElement('h1');
tobeinserted.textContent = "Olha aê";

root.append(tobeinserted);

const texto = "Outro Texto";

const h1Element = `<h1>${texto}</h1>`;

root.insertAdjacentHTML('beforeend', h1Element);

function novoElemento(tag, content) {
    return `<${tag}>${content}</${tag}>`;
}

const pElement = novoElemento('p', 'Este é um elemento p');
root.insertAdjacentHTML('beforeend', pElement);

console.log(tobeinserted);
console.log(root);

function h1(css, ...values) {
    return `<h1 style="${css}">${values}</h1>`
}

function li(css, ...values) {
    return `<li style="${css}">${values}</li>`;
}

function ul(css, ...values) {
    return `<ul style="${css}">${values}</ul>`;
}

function div(css, lista1, lista2) {
    return `<div style="${css}">${lista1 + lista2}</div>`
}

const h1Styled = h1`
    background-color: purple;
    ${"Este é o conteúdo do H1"}
`

const li1 = li`
    ${"Rapadura"}
`

const li2 = li`
    ${"Batida"}
`

const li3 = li`
    ${"Alfinin"}
`

const li4 = li`
    ${"Arroz"}
`

const li5 = li`
    ${"Feijão"}
`

const li6 = li`
    ${"Cuscuz"}
`

const lista = ul`
    background-color: violet;
    ${li1 + li2 + li3}
`

const listaFeira = ul`
    background-color: pink;
    ${li4 + li5 + li6}
`

const divStyled = div`
    background-color: green;
    ${lista}
    ${listaFeira}
`

console.log(li1);
console.log(lista);

console.log(h1Styled);
root.insertAdjacentHTML('beforeend', h1Styled);
root.insertAdjacentHTML('beforeend', lista);
root.insertAdjacentHTML('beforeend', listaFeira);
root.insertAdjacentHTML('beforeend', divStyled);