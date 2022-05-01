function validarArticulo() {
    var  agregarImagen, nombre,precio, descripcion, regExp;
    regExpA= /^([0-9.,$])*$/
    agregarImagen=document.getElementById("agregarImagen").value;
    nombre=document.getElementById("nombre").value;
    precio=document.getElementById("precio").value;
    descripcion=document.getElementById("descripcion").value;

    
    if (agregarImagen==="" ||nombre===""|| precio===""|| descripcion===""){
        alert("todos los campos son obligatorios");
        return false
    }
    else if(nombre.length>20){
        alert("El nombre debe tener menos de 20 caracteres")
        return false
    }
    else if(!regExpA.test(precio)){
        alert("El precio ingresado no es correcto")
        return false

    }
    else if(descripcion.length>150){
        alert("La descripcion debe tener menos de 150 caracteres")
        return false
    }
    

}