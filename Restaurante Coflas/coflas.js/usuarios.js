const botonInicio = document.getElementById("btnInicio");

botonInicio.addEventListener("click", function(){

    window.location.href = "../index.html";

});

console.log("Hola mundo")

let nombre_usuarios=document.getElementById("nombre_usuarios").value;
let apellido=document.getElementById("apellido").value;
let TI=document.querySelector('input[name="TI"]:checked').value;
let CC=document.querySelector('input[name="CC"]:checked').value;
let documento=document.getElementById("documento").value;
let telefono_usuarios=document.getElementById("telefono_usuarios").value;
let email=document.getElementById("email").value;
let genero=document.getElementById("genero").value;
let cargo=document.getElementById("cargo").value;
let password = document.getElementById("password").value;
let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;


l