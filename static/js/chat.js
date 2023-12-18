//filtro user
const user = JSON.parse(localStorage.getItem("user"))
const datos_perfil = JSON.parse(localStorage.getItem("usuario"))
const search_user = document.getElementById("textarea")
const button_search = document.getElementById("search_user")
const msj = document.getElementById("mensajes")

//Mostrar mansajes
const key_msj = [];
function guardar_destino(){
    for (let i = 0; i < localStorage.length; i++) {
        const find_mensajes = JSON.parse(localStorage.getItem(`mensajes - ${i}`))
        if(find_mensajes){
            key_msj.unshift(find_mensajes);
        }
    }
}
guardar_destino()


let msj_append = ""
for (let i = 0; i < key_msj.length; i++) {
    if (key_msj[i].remitente !== user.usuario){
        msj_append += `<li>
            <a id="save_name">
                <img src="../static/assests/img/avatar/avatar-default.png" alt="avatar">
                <div class="user__txt">
                    <h4>${key_msj[i].remitente}"</h4>
                    <p>
                        ${key_msj[i].message}
                    </p>
                </div>
            </a>
            </li>`;
    }
}
msj.innerHTML = msj_append;

const user_chat = {
    usuario: ''
}

search_user?.addEventListener("input",(e) => {
    user_chat.usuario = e.target.value
})

function guardar_user(){
    if(key_msj[0].remitente !== user.usuario){
        const dato_user = JSON.stringify({ usuario: user_chat.usuario || key_msj[0].remitente})
        localStorage.setItem("search_user", dato_user)
        window.location.href = "chat.html"
    }
    else if (key_msj[0].destinatario !== user.usuario){
        const dato_user = JSON.stringify({ usuario: user_chat.usuario || key_msj[0].destinatario})
        localStorage.setItem("search_user", dato_user)
        window.location.href = "chat.html"
    }
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

const button = document.getElementById("save_name")
button.addEventListener("click",(e)=>{
    guardar_user()
})