import { registerImage } from "./lazy"

const API = "https://randomfox.ca/floof/"
const app = document.querySelector("#images")
const buttonCreate = document.querySelector("#buttonCreate")
const buttonRemove = document.querySelector("#buttonRemove")


// const random = () => {
//     const maximum = 122
//     const minimun = 1

//     return Math.floor(Math.random() * (maximum - minimun) + minimun)
// }

async function createFoxes(){
    const response = await fetch(API)
    const data = await response.json()

    const imageFox = data.image
    
    const div = document.createElement("div");
    div.className = "p-4"
    div.id = "img"
    
    const img = document.createElement("img");
    img.className = "mx-auto"
    img.width = "320"
    img.height = "120"
    img.src = imageFox

    div.appendChild(img)
    app.appendChild(div)

    return div
}

const addImage = async() => {
    const newImage = await createFoxes()
    registerImage(newImage)
}


const removeFoxes = () => {
    const foxes = document.querySelectorAll("#img")

    const arrayFoxes = [...foxes]

    arrayFoxes.forEach(item => item.remove())

}

buttonCreate.addEventListener("click",addImage)
buttonRemove.addEventListener("click",removeFoxes)