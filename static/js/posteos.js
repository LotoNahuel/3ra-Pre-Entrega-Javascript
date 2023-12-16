const key_post = JSON.parse(localStorage.getItem("publicacion - 14"))
const photo = document.getElementById("photo")
photo.innerHTML =`<img src="${key_post[0].photo}" class="img-fluid" alt="post"></img>`;