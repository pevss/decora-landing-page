"use strict"

document.getElementById("video-prototipo").style.display = "none"

const input = document.querySelector("#valor")

input.addEventListener("input", function () {
    const valor = input.value
    document.querySelector("#valor-interacao").textContent = `R$ ${valor * 10 + 990}`
    //mudar a foto de fundo para o frame de acordo com o valor
    // document.getElementById("interacao").style.backgroundImage = `url(../midias/frames/frame${valor}.jpg)`
})