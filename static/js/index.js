const usuario_log = JSON.parse(localStorage.getItem("usuario"))
const autentificacion = JSON.parse(localStorage.getItem("user"))
const check = JSON.parse(localStorage.getItem("check"))

const autentificado = document.querySelector("#login-auth");
const botonLogout = document.querySelector(".logout");
botonLogout.addEventListener("click", (e) => {
    localStorage.removeItem("user");
    localStorage.removeItem("check")
});

if(autentificacion){
    autentificado === true && if_buttonLog()
    const display = document.querySelectorAll('#if-auth');
    for (let i = 0; i < display.length; i++) {
        display[i].style.display = 'none';
    }
    if(!check){
        autentificado.innerHTML = Swal.fire({
            position: "center",
            title: `Bienvenido ${autentificacion?.usuario}`,
            showConfirmButton: false,
            timer: 2000
        });
        setTimeout(()=>{
            localStorage.setItem("check", "true");
        }, 3000 )
    }
}
else{
    const notAutentificado = document.querySelectorAll('#not-auth');
    for (let i = 0; i < notAutentificado.length; i++) {
        notAutentificado[i].style.display = 'none';
    }
}

const inputs = document.querySelectorAll("textarea");
const botonLog = document.getElementById("login-user");

const inputs_log = {
    username: '',
    password: ''
}

inputs.forEach(el => {
    el.addEventListener("input", (e)=>{
        if(e.target.name === "username"){
            inputs_log.username = e.target.value
        }
        else{
            inputs_log.password = e.target.value
        }
    })
})


botonLog?.addEventListener("click",(e)=>{
    const user_find = usuario_log.find((el) => {
        return inputs_log.username === el.username && inputs_log.password === el.password
    })

    if(user_find){
        const stringify = JSON.stringify({ usuario: user_find.username })
        localStorage.setItem("user", stringify)
    }
    else{
        const is_false = document.querySelector("#log-not-auth");
        is_false.innerHTML = `<alert style="color:white;background-color:red;font-size:18px;display:flex;align-items:center;justify-content:center;border-radius:15px;margin:15px;">Usuario y/o contraseña incorrecto</alert>`
    }
})