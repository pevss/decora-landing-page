"use strict"

document.getElementById("video-prototipo").style.display = "none"

const input = document.querySelector("#valor")

input.addEventListener("input", function () {
    const valor = input.value
    document.querySelector("#valor-interacao").textContent = `R$ ${valor * 10 + 990}`
    //mudar a foto de fundo para o frame de acordo com o valor
    // document.getElementById("interacao").style.backgroundImage = `url(../midias/frames/frame${valor}.jpg)`
})

function order(words) {
    if (!words) return ""
    const arr = words.split(" ")

    let final = []
    for (const i of arr.keys()) {
        for (const part of arr) if (part.includes(`${i + 1}`)) final.push(part)
    }

    return final.join(" ")
}

console.log(order("is2 Thi1s T4est 3a"))
