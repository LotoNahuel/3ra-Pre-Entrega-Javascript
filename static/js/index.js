const BBDD = [
    {
        usuario: "CobbyS_S",
        contraseña: "TheKing_98"
    },
    {
        usuario: "Zeke_TG",
        contraseña: "TheRocket_00"
    },
    {
        usuario: "Papa_Francisco",
        contraseña: "TheCS_00"
    }
]

const botonLogout = document.querySelector(".logout");
botonLogout.addEventListener("click", (e) => {
    localStorage.clear();
});

const autentificacion = JSON.parse(localStorage.getItem("user"))
const autentificado = document.querySelector("#login-auth");
    function if_buttonLog(){
        autentificado.innerHTML = `<alert style="color:white;background-color:green;font-size:18px;display:flex;align-items:center;justify-content:center;border-radius:15px;margin:15px;width:350px;">Bienvenido ${autentificacion.usuario} </alert>`
    }
if(autentificacion){
    autentificado === true && if_buttonLog()
    const display = document.querySelectorAll('#if-auth');
    for (let i = 0; i < display.length; i++) {
        display[i].style.display = 'none';
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
    const user_find =  BBDD.find((el) => {
        return inputs_log.username === el.usuario && inputs_log.password === el.contraseña
    })

    if(user_find){
        const stringify = JSON.stringify({ usuario: user_find.usuario })
        localStorage.setItem("user", stringify)
    }
    else{
        const is_false = document.querySelector("#log-not-auth");
        is_false.innerHTML = `<alert style="color:white;background-color:red;font-size:18px;display:flex;align-items:center;justify-content:center;border-radius:15px;margin:15px;">Usuario y/o contraseña incorrecto</alert>`
    }
})