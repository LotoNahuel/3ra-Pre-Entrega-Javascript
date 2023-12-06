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
        const ifCreate = document.querySelector("#create-perfil");
            ifCreate.innerHTML = `<alert style="color:white;background-color:green;font-size:18px;display:flex;alaing-items:center;justify-content:center;border-radius:15px;margin:15px;">GUARDADO</alert>`
    })
}

registrar()