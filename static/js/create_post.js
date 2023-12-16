const user = JSON.parse(localStorage.getItem("user"))

const publicacion = [];

class publicacion_DDBB{
    constructor(photo, name_post, description, usuario){
        this.photo = photo,
        this.name_post = name_post,
        this.description = description,
        this.usuario = usuario
    }
}

const inputs_text = document.querySelectorAll("#textarea");
const button_post = document.getElementById("button_post")

const data_txt = {
    name_post: '',
    description: '',
}

inputs_text.forEach(el =>{
    el.addEventListener("input", (e)=>{
        const { name, value } = e.target   
        data_txt[name] = value
    })
})

fetch('https://jsonplaceholder.typicode.com/photos/1')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        function save_post(){
            const new_post = new publicacion_DDBB(data.thumbnailUrl, data_txt.name_post, data_txt.description, user.usuario)
            publicacion.push(new_post);
            const string = JSON.stringify(publicacion)
            let i = 0;
            while (i < localStorage.length){
                i++;
            }
            localStorage.setItem(`publicacion - ${i}`, string)
            window.location.href = "posteos.html"
        }
        function alerta(){
            const alert = document.querySelector("#alert")
            alert.innerHTML = Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Completa el campo",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
        button_post.addEventListener("click",(e)=>{
            data_txt.name_post ? save_post() : alerta()
        })
    })