//filtro user
const user = JSON.parse(localStorage.getItem("user"))
const datos_perfil = JSON.parse(localStorage.getItem("usuario"))
const search_user = document.getElementById("textarea")
const button_search = document.getElementById("search_user")

const user_chat = {
    usuario: ''
}

search_user?.addEventListener("input",(e) => {
    user_chat.usuario = e.target.value
})

function guardar_user(){
    const dato_user = JSON.stringify({ usuario: user_chat.usuario })
    localStorage.setItem("search_user", dato_user)
    window.location.href = "chat.html"
}
function alerta(){
    const alert = document.querySelector("#alert")
    alert.innerHTML = Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Completa el campo",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
}
button_search?.addEventListener("click",(e)=>{
    user_chat.usuario ? guardar_user() : alerta()
})