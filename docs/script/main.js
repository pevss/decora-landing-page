"use strict"

document.getElementById("video-prototipo").style.display = "none"

// Interação do input range HERO

const input = document.querySelector("#valor")
document.getElementById("interacao").style.backgroundImage = "url('midias/interacao/frame1.jpg')"

input.addEventListener("input", function () {
    const valor = input.value
    document.querySelector("#valor-interacao").textContent = `R$ ${valor * 25 + 475}`

    //mudar a foto de fundo para o frame de acordo com o valor
    document.getElementById("interacao").style.backgroundImage = `url('${`midias/interacao/frame${valor}.jpg`}')`
})


// Mudança de frases FOOTER

const autor = document.querySelector("#autor")
const frase = document.querySelector("#frase-txt")
const fraseWrapper = document.querySelector("#frase")
const imagemFrases = document.querySelector("#imagens-prova-social")

let currIndex = 0

const autores = ["Bartzen",
    "Bartzen",
    "Evviva",
    "Evah",
    "Italínea",
]

const frases = ["Será uma plataforma de trabalho fantástica...",
    "O que vocês estão propondo é uma ferramenta muito bacana.",
    "Vai ser ótimo, muito bom para nós!",
    "Vocês estão seguindo o caminho certo para a plataforma!",
    "Ideia muito interessante, muito legal.",
]

autor.innerText = `- ${autores[0]}`
frase.innerText = `"${frases[0]}"`
//imagemFrases.style.src = `midias/imagens/prova-social-${0}`

document.querySelector("#prox-frase").addEventListener("click", function () {
    fraseWrapper.style.animationName = "texto-saindo"

    setTimeout(function () {
        autor.innerText = `- ${autores[currIndex]}`
        frase.innerText = `"${frases[currIndex]}"`
        fraseWrapper.style.animationName = "texto-entrando"
        //imagemFrases.style.src = `midias/imagens/prova-social (${currIndex})`
    }, 998)

    if (currIndex === autores.length - 1) {
        currIndex = 0
        return
    }

    currIndex++
})
