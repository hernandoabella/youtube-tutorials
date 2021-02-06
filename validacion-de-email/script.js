function validation(){
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(pattern)){
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = "Tu correo electrónico es válido";
        text.style.color = "#00C9A7";
     }else{
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "Por favor ingresa un correo electrónico válido";
        text.style.color = "#C34A36";
    }
}