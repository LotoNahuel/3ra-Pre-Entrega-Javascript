const posteos = JSON.parse(localStorage.getItem("publicaciones"))
const buscar_o = JSON.parse(localStorage.getItem("buscar_post"))
const mostrar_post = document.getElementById("posteos")
const input_post = document.getElementById("buscar_publicacion")
const button_post = document.getElementById("button_post")
const input_perfil = document.getElementById("buscar_perfil")
const button_pefil = document.getElementById("buscar_p")

const key_posteos = [];
for (let i = 0; i < localStorage.length; i++) {
    const find_posteos = JSON.parse(localStorage.getItem(`publicacion - ${i}`))
    if(find_posteos) {
        key_posteos.push(find_posteos);
    }
}
let post_append = "";

if (key_posteos.length > 0) {
    for (let i = 0; i < key_posteos.length; i++) {
        const post_find = key_posteos[i];
        post_append += `<div  class="container__pub" data-aos="flip-right"> 
        <div>
            <a>
                <img id="name_import" src="${post_find[0].photo}" name="${post_find[0].name_post}" class="img-fluid" alt="publicacion">
            </a>
        </div>
        <div class="inf__art">
            <h3>${post_find[0].name_post}</h3>
            <P>
                ${post_find[0].description}
            </P>
        </div>
        </div>`;
    }
    mostrar_post.innerHTML = post_append;
}

mostrar_post.addEventListener("click", function(event){
    const name_post = event.target.getAttribute("name");
    const save = JSON.stringify({name: name_post})
    localStorage.setItem("save_namePost", save)
    window.location.href = "post.html"
});

const search_user = {
    user_name: ""
}
input_perfil.addEventListener("input",(e) => {
    search_user.user_name = e.target.value
})

function alerta(){
    const alert = document.querySelector("#alert")
    alert.innerHTML = Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Completa el campo",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
}

function buscar_2(){
    const buscar_2 = JSON.stringify({usuario: search_user.user_name})
    localStorage.setItem("search_user", buscar_2)
    window.location.href = "other_perfil.html"
}

button_pefil.addEventListener("click", (e)=>{
    search_user.user_name ? buscar_2() : alerta()
})