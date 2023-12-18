const name_import = JSON.parse(localStorage.getItem("save_namePost"))
const photo = document.getElementById("photo")
const titulo = document.getElementById("title_post")
const descripcion = document.getElementById("text_post")
const name_user = document.getElementById("name_user")

const key_post = [];
for (let i = 0; i < localStorage.length; i++) {
    const find_posteo = JSON.parse(localStorage.getItem(`publicacion - ${i}`))
    if(find_posteo){
        key_post.push(find_posteo);
    }
}

key_post.forEach((elemento)=>{
    if (elemento[0].name_post === name_import.name){
        name_user.innerHTML = `${elemento[0].usuario}`
        photo.innerHTML =`<img src="${elemento[0].photo}" class="img-fluid" alt="post"></img>`;
        titulo.innerHTML = `${elemento[0].name_post}`
        descripcion.innerHTML = `${elemento[0].description}`
    }
});