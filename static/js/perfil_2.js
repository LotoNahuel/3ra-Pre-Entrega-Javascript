const find_user = JSON.parse(localStorage.getItem("search_user"))
const user = JSON.parse(localStorage.getItem("usuario"))
const perfil_friend = document.getElementById("username_search")
const other_user = document.getElementById("other_user")
const for_post = document.getElementById("posteos")

other_user.innerHTML = `${find_user.usuario}`


const posteos = [];

for (let i = 0; i < localStorage.length; i++) {
    const post_get = JSON.parse(localStorage.getItem(`publicacion - ${i}`))
    if(post_get) {
        posteos.push(post_get);
    }
}

let post_append = "";

if (posteos.length > 0) {
    for (let i = 0; i < posteos.length; i++){

        const publicacion = posteos[i];
        if (find_user.usuario === publicacion[0].usuario){
            post_append += `<div  class="container__pub" data-aos="flip-right"> 
            <div>
                <a href="post.html">
                    <img src="${publicacion[0].photo}" class="img-fluid" alt="publicacion">
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
} else {
    for_post.innerHTML = "<h3>No hay Posteos</h3>";
}