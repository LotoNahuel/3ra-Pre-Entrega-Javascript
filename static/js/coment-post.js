const name_post = JSON.parse(localStorage.getItem("save_namePost"))

const comentarios = [];

class comentario_DDBB{
    constructor(comment, user_coment, post_name){
        this.coment=comment;
        this.usuario=user_coment;
        this.post_name=post_name
    }
}
const save_coment = {
    comentario: ''
}

const user = JSON.parse(localStorage.getItem("user"))
const comment_input = document.querySelector("textarea");
const buttonsave = document.getElementById("save")

comment_input.addEventListener("input",(e)=>{
    e.target.name === "comentario"
    save_coment.comentario = e.target.value
})

function guardar_comentario(){
    const newComment = new comentario_DDBB(save_coment.comentario, user.usuario, name_post.name);
    comentarios.push(newComment);
    const stringify = JSON.stringify(comentarios)
    let i = 0;
    while (i < localStorage.length){
        i++;
    }
    localStorage.setItem(`comentario - ${i}`, stringify)
}
buttonsave.addEventListener("click",(e)=>{
    save_coment.comentario ? guardar_comentario() : alert("completa el campo")
})

const for_coment = document.getElementById("for_coment")

const keyComentarios = [];
for (let i = 0; i < localStorage.length; i++) {
    const coment_get = JSON.parse(localStorage.getItem(`comentario - ${i}`))
    if(coment_get) {
        keyComentarios.push(coment_get);
    }
}
let coment_append = "";

if (keyComentarios.length > 0) {
    for (let i = 0; i < keyComentarios.length; i++) {
        const coment = keyComentarios[i];
        if( coment[0].post_name === name_post.name){
            coment_append += `<div class="avatar_user" id="avatar_usuario">
            <a href="perfil.html">
                <img src="../static/assests/img/avatar/avatar-default.png" alt="avatar">
            </a>
            <h3>
                ${coment[0].usuario}
            </h3>
            </div>
            <div>
                <p>
                ${coment[0].coment}
                </p>
            </div>`;
        }
    }
    for_coment.innerHTML = coment_append;
} else {
    for_coment.innerHTML = "<h3>No hay comentarios</h3>";
}