console.log("JavaScript cargado");

function validarPedido(event) {

    // Evita que el formulario se envíe
    event.preventDefault();

    let producto = document.getElementById("producto").value;
    let nombre_usuario = document.getElementById("nombre_usuario").value.trim();
    let direccion = document.getElementById("direccion").value.trim();
    let telefono = document.getElementById("telefono").value.trim();

    // Campos vacíos
    if (
        producto === "" ||
        nombre_usuario === "" ||
        direccion === "" ||
        telefono === ""
    ) {

        Swal.fire({
            title: "Errooor!",
            text: "Coflaa, debes llenar todos los campos.",
            imageUrl: "https://thumbs.dreamstime.com/b/el-doblar-masculino-flaco-joven-11673997.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Error"
        });

        return;
    }

    // Nombre solo letras y espacios
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(nombre_usuario)) {

        Swal.fire({
            title: "Error",
            text: "El nombre solo puede contener letras.",
            icon: "error"
        });

        return;
    }

    // Teléfono solo números
    if (!/^\d+$/.test(telefono)) {

        Swal.fire({
            title: "Error",
            text: "El teléfono solo puede contener números.",
            icon: "error"
        });

        return;
    }

    // Correcto
    Swal.fire({
        title: "Completadooo!",
        text: "Coflaa tu fucking pedido fue registrado correctamente.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSH6nzE1bS-2tIx4IZWiujryXWS7xBg8il2CVaJOWe2w&s=10",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Éxito"
    }).then(() => {
        document.getElementById("formPedido").reset();
    });

}

// Botón volver al inicio
document.getElementById("btnInicio").addEventListener("click", function () {
    window.location.href = "../index.html";
});