//validaciones que se repiten en varios formularios
export const regexCorreo = /^[\w.+-]+@(gmail|outlook|duocuc)\.(com|cl)$/i
export const mensajeCorreo = "El correo debe ser de dominio @gmail, @outlook o @duocuc, junto al .com"

export const regexContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/
export const mensajeContra = "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número"

export const regexSoloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/