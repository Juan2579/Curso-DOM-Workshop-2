const isIntersecting = (entry) => {
    return entry.isIntersecting //true dentro de la pantalla
}

const accion = () => {
    console.log("holis")
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(accion)
})

export const registerImage = (image) => {
    //IntersectionObserver => observer(image)
    observer.observe(image)
}