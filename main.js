


const showPassword = document.getElementById("show-password");
const passInput = document.getElementById("pass-input");


showPassword.addEventListener("click", ()=>{
    if (passInput.type === "password"){
        passInput.type = "text"
        showPassword.innerHTML = '<i class="fa-solid fa-eye"></i>'
    } else{
        passInput.type = "password"
        showPassword.innerHTML = ' <i class="fa-solid fa-eye-slash" id="show-password"></i>'
    }
})