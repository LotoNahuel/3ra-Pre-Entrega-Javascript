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