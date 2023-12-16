const find_user = JSON.parse(localStorage.getItem("search_user"))
const user = JSON.parse(localStorage.getItem("usuario"))
const perfil_friend = document.getElementById("username_search")
const other_user = document.getElementById("other_user")

other_user.innerHTML = `${find_user.usuario}`

if (find_user.usuario != user.username){
    
} 