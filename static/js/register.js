console.log("Tercera Pre-Entrega")

const registro = [];

class database{
    constructor(name, username, email, password, phone, birthdate, studies, description){
        this.name=name;
        this.username=username;
        this.email=email;
        this.password=password;
        this.phone=phone;
        this.birthdate=birthdate;
        this.studies=studies;
        this.description=description;
    }
}

const inputs_register = document.querySelectorAll("textarea");
const buttonsave = document.getElementById("save")

const register = {
    nameAndSurname: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    birthdate: '',
    studies: '',
    description: ''
}

inputs_register.forEach(el =>{
    el.addEventListener("input", (e)=>{
        const { name, value } = e.target   
        register[name] = value  
    })
})

function registrar(){
    buttonsave.addEventListener("click",(e)=>{
        const newRegister = new database(register.nameAndSurname, register.username, register.email, register.password, register.phone, register.birthdate, register.studies, register.description);
        registro.push(newRegister);
        const registrar_datos = JSON.stringify(registro)
        localStorage.setItem("usuario", registrar_datos)
    })
}

registrar()