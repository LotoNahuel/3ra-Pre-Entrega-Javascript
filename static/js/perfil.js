const datos_perfil = JSON.parse(localStorage.getItem("usuario"))
const user = JSON.parse(localStorage.getItem("user"))
const mostrar_user = document.querySelector("#usuario")
const mostrar_description = document.querySelector("#description")
const for_post = document.getElementById("posteos")


if (datos_perfil && datos_perfil.length > 0) {

    if(user.usuario == datos_perfil[0].username){
        const username = datos_perfil[0].username;
        mostrar_user.innerHTML = `${username}`

        const user_description = datos_perfil[0].description;
        mostrar_description.innerHTML = `${user_description}`
    }
}

const posteos = [];
for (let i = 0; i < localStorage.length; i++) {
    const post_get = JSON.parse(localStorage.getItem(`publicacion - ${i}`))
    if(post_get) {
        posteos.push(post_get);
    }
}
let post_append = "";

if (posteos.length > 0) {
    for (let i = 0; i < posteos.length; i++) {
        const publicacion = posteos[i];
        if ( publicacion[0].usuario === user.usuario ){
            post_append += `<div  class="container__pub" data-aos="flip-right"> 
            <div>
                <a href="post.html">
                    <img id="name_import" src="${publicacion[0].photo}" name="${publicacion[0].name_post}" class="img-fluid" alt="publicacion">
                </a>
            </div>
            <div class="inf__art">
                <h3>${publicacion[0].name_post}</h3>
                <P>
                    ${publicacion[0].description}
                </P>
            </div>
            </div>`;   
        }
    }
    for_post.innerHTML = post_append;
}
else {
    for_post.innerHTML = "<h3>No hay Posteos</h3>";
}

for_post.addEventListener("click", function(event){
    const name_post = event.target.getAttribute("name");
    const save = JSON.stringify({name: name_post})
    localStorage.setItem("save_namePost", save)
    window.location.href = "post.html"
});