const key_post = JSON.parse(localStorage.getItem("publicacion - 19"))
const photo = document.getElementById("photo")
const titulo = document.getElementById("title_post")
const descripcion = document.getElementById("text_post")
const name_user = document.getElementById("name_user")

name_user.innerHTML = `${key_post[0].usuario}`
photo.innerHTML =`<img src="${key_post[0].photo}" class="img-fluid" alt="post"></img>`;
titulo.innerHTML = `${key_post[0].name_post}`
descripcion.innerHTML = `${key_post[0].description}`