export const validarDireccion = (direccion) => {
    const length = direccion.length
    return (length > 3 && length < 50) ? true : false
}

export const validarCiudad = (ciudad) => {
    const length = ciudad.length
    return (length > 3 && length < 20) ? true : false
}

export const validarProvincia = (provincia) => {
    const length = provincia.length
    return (length > 3 && length < 20) ? true : false
}