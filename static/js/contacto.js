const affairs = [];

class contact{
    constructor(username, email, phone, affair){
        this.username=username,
        this.email=email,
        this.phone=phone,
        this.affair=affair
    }
}

const inputs_contact = document.querySelectorAll("textarea");
const button_send = document.getElementById("send");

const send_affair = {
    username: '',
    email: '',
    phone: '',
    affair: ''
}

inputs_contact.forEach(el =>{
    el.addEventListener("input", (e)=>{
        const { name, value } = e.target   
        send_affair[name] = value
    })
})

button_send.addEventListener("click",(e)=>{
    const new_affair = new contact(send_affair.username, send_affair.email, send_affair.phone, send_affair.affair);
    affairs.push(new_affair)
})