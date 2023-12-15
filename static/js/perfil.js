const datos_perfil = JSON.parse(localStorage.getItem("usuario"))
const user = JSON.parse(localStorage.getItem("user"))

const mostrar_user = document.querySelector("#usuario")
const mostrar_description = document.querySelector("#description")

if (datos_perfil && datos_perfil.length > 0) {

    if(user.usuario == datos_perfil[0].username){
        const username = datos_perfil[0].username;
        mostrar_user.innerHTML = `${username}`

        const user_description = datos_perfil[0].description;
        mostrar_description.innerHTML = `${user_description}`
    }
}