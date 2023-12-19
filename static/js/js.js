let comentariosHTML = ""; // Variable para acumular el HTML de los comentarios

if (keyComentarios.length > 0) {
    for (let i = 0; i < keyComentarios.length; i++) {
        const comentario = keyComentarios[i];
        comentariosHTML += `<div class="avatar_user" id="avatar_usuario">
            <a href="perfil.html">
                <img src="../static/assests/img/avatar/avatar-default.png" alt="avatar">
            </a>
            <h3>
                ${comentario.usuario}
            </h3>
        </div>
        <div>
            <p>
                ${comentario.coment}
            </p>
        </div>`;
    }

    // Establecer el contenido de for_coment después del bucle
    for_coment.innerHTML = comentariosHTML;
} else {
    for_coment.innerHTML = "<h3>No hay comentarios</h3>";
}


if (key_posteos.length > 0) {
    for (let i = 0; i < key_posteos.length; i++) {
        const post_find = key_posteos[i];
        if(buscar_o.buscar_post === post_find[0].name_post){
            
            
        }
        
    }
}

<li>
<a href="chat.html">
    <img src="../static/assests/img/avatar/avatar-default.png" alt="avatar">
    <div class="user__txt">
        <h4>CobbyS_S</h4>
        <p>
            Buenas, me encantan tus render, quería hacerte un encargo de una animación.
        </p>
    </div>
</a>
</li>

let msj_append = "";


    button_search?.addEventListener("click",(e)=>{
        user_chat.usuario ? guardar_user() : alerta()
    })

const search_post = {
    post_name: ""
}
input_post.addEventListener("input",(e) => {
    search_post.post_name = e.target.value
})

function buscar_1(){
    const buscar_1 = JSON.stringify({buscar_post: search_post.post_name})
    localStorage.setItem("buscar_post", buscar_1)
    
    setTimeout(()=>{
        mostrar_post.style.display = "none"
        const key_post = [];
        for (let i = 0; i < localStorage.length; i++) {
            const find_posteo = JSON.parse(localStorage.getItem(`publicacion - ${i}`))
            if(find_posteo){
                key_post.push(find_posteo);
            }
        }
        key_post.forEach((elemento)=>{
            if (elemento[0].name_post === buscar_o.buscar_post){
                mostrar_post.style.display = "flex"
                mostrar_post.style.justifyContent = "center"
                mostrar_post.style.width = "max-content"
                mostrar_post.innerHTML = `<div  class="container__pub" data-aos="flip-right"> 
                        <div>
                            <a href="post.html">
                                <img src="${elemento[0].photo}" class="img-fluid" alt="publicacion">
                            </a>
                        </div>
                        <div class="inf__art">
                            <h3>
                                ${elemento[0].name_post}
                            </h3>
                            <P>
                                ${elemento[0].description}
                            </P>
                        </div>
                        </div>`;
                localStorage.removeItem("buscar_post")
            }
            else{
                console.log("none")
            }
        });
    }, 5000 )
    
}




if(button_post){
    button_post.addEventListener("click",(e)=>{
        search_post.post_name ? buscar_1() : alerta()
    })
}

