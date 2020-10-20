var root = document.querySelector('#root');

console.log(root);

var tobeadded = document.createElement("h1");
tobeadded.textContent = "Minha página linda";

console.log(tobeadded);

root.append(tobeadded);

function novoElemento(tag, content) {
    return `<${tag}>${content}</${tag}>`;
}


root.insertAdjacentHTML("beforeend", "<p>Reudismam</p>");
root.insertAdjacentHTML("beforeend", novoElemento('h1', 'Reudismam'));

function h1(css, ...values) {
    return `<h1 style="${[...css]}">${values}</h1>`
}

function li(css, ...values) {
    return `<li style="${css}">${values}</li>`;
}

function ul(css, ...values) {
    return `<ul style="${css}">${values}</ul>`
}

function div(css, lista1, lista2) {
    return `<div style="${css}">${lista1 + lista2}</div>`
}


const tag = h1`
    background-color: blue;
    font-size: 100px;
    ${"Reudismam"}
]`

const li1 = li`
    ${"Arroz"}
`

const li2 = li`
    ${"Feijão"}
`

const li3 = li`
    ${"Bife"}
`

const li4 = li`
    ${"Batata"}
`

const li5 = li`
    ${"Cenoura"}
`

const li6 = li`
    ${"Cebola"}
`

const lista = ul`
    background-color: tomato;
    list-style: none;
    font-size: 3rem;
    ${li1 + li2 + li3}
`

const lista2 = ul`
    background-color: purple;
    list-style: none;
    font-size: 3rem;
    ${li4 + li5 + li6}
`





root.insertAdjacentHTML('beforeend', tag);

console.log(tag);

console.log(lista);
root.insertAdjacentHTML('beforeend', lista);

const divisao = div`
    background-color: violet;
    ${lista}
    ${lista2}
`
console.log(divisao);
root.insertAdjacentHTML('beforeend', divisao);