function validar() {
    var  email, password, regExp;
    regExp=  /\S+@\S+\.\S+/;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    
    if (email==="" || password===""){
        alert("todos los campos son obligatorios");
        return false
    }
    else if(!regExp.test(email)){
        alert("El e-mail ingresado no es correcto")
        return false

    }
    

}