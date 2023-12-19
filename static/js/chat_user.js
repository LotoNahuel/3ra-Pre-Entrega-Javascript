const destinatario = JSON.parse(localStorage.getItem("search_user"))
const remitente = JSON.parse(localStorage.getItem("user"))
const chat_user = document.getElementById("username_search")
const mensajes = document.getElementById("textarea")
const send_msj = document.getElementById("send")
const for_msj = document.getElementById("for_msj")

chat_user.innerHTML = `<h3>${destinatario.name}</h3>`

const msj_input = {
    mensaje: ""
}

mensajes.addEventListener("input",(e) => {
    msj_input.mensaje = e.target.value
})

function guardar_mensaje(){
    const msj_txt = JSON.stringify({message: msj_input.mensaje, destinatario: destinatario.name, remitente: remitente.usuario})
    let i = 0;
        while (i < localStorage.length){
            i++;
        }
        localStorage.setItem(`mensajes - ${i}`, msj_txt)
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
send_msj.addEventListener("click",(e)=>{
    msj_input.mensaje ? guardar_mensaje() : alerta()
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
        if (key_mensaje[i].destinatario === destinatario.name || key_mensaje[i].remitente === destinatario.name){
            const right = `<div class="userChatRight"><p>${key_mensaje[i].message}</p><img src="../static/assests/img/avatar/avatar-default.png" class="img-fluid" alt="avatar"></div>`;
            if(key_mensaje[i].remitente === remitente.usuario || key_mensaje[i].destinatario === remitente.usuario){
                const left = `<div class="userChatLeft"><img src="../static/assests/img/avatar/avatar-default.png" class="img-fluid" alt="avatar"><p>${key_mensaje[i].message}</p></div>`;
                msj_append += `${key_mensaje[i].remitente == remitente.usuario ? right : left}`;
            }  
        }
    }
    for_msj.innerHTML = msj_append;
}