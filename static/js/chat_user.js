const destinatario = JSON.parse(localStorage.getItem("search_user"))
const remitente = JSON.parse(localStorage.getItem("user"))
const chat_user = document.getElementById("username_search")
const mensajes = document.getElementById("textarea")
const send_msj = document.getElementById("send")
const for_msj = document.getElementById("for_msj")

chat_user.innerHTML = `${destinatario.usuario}`

const msj_input = {
    mensaje: ""
}

mensajes.addEventListener("input",(e) => {
    msj_input.mensaje = e.target.value
    console.log(e.target.value)
})

function guardar_mensaje(){
    const msj_txt = JSON.stringify({message: msj_input.mensaje, destinatario: destinatario.usuario, remitente: remitente.usuario})
    let i = 0;
        while (i < localStorage.length){
            i++;
        }
        localStorage.setItem(`mensajes - ${i}`, msj_txt)
}
send_msj.addEventListener("click",(e)=>{
    msj_input.mensaje ? guardar_mensaje() : alert("COMPLETAR CASILLAS")
    window.location.href = "chat.html"
})

const key_mensaje = [];
for (let i = 0; i < localStorage.length; i++) {
    const find_mensaje = JSON.parse(localStorage.getItem(`mensajes - ${i}`))
    if(find_mensaje) {
        key_mensaje.push(find_mensaje);
    }
}
let msj_append = "";

if (key_mensaje.length > 0) {
    for (let i = 0; i < key_mensaje.length; i++) {
        const msj_find = key_mensaje[i];
        const right = `<div class="userChatRight"><p>${msj_find.message}</p><img src="../static/assests/img/avatar/avatar-default.png" class="img-fluid" alt="avatar"></div>`;
        const left = `<div class="userChatLeft"><img src="../static/assests/img/avatar/avatar-default.png" class="img-fluid" alt="avatar"><p>${msj_find.message}</p></div>`;
        msj_append += `${msj_find.remitente == remitente.usuario ? right : left}`;
    }
    for_msj.innerHTML = msj_append;
}