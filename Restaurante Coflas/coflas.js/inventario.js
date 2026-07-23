console.log("JavaScript cargado");

function validarInventario(event) {

    // Evita que el formulario se envíe
    event.preventDefault();

    let codigo = document.getElementById("codigo").value.trim();
    let nombre_producto = document.getElementById("nombre_producto").value.trim();
    let cantidad_inventario = document.getElementById("cantidad_inventario").value.trim();
    let marca = document.getElementById("marca").value.trim();

    // Validar campos vacíos
    if (
        codigo === "" ||
        nombre_producto === "" ||
        cantidad_inventario === "" ||
        marca === ""
    ) {

        Swal.fire({
            title: "Errooor!",
            text: "Coflaa, tienes que llenar todos los campos.",
            imageUrl: "https://thumbs.dreamstime.com/b/el-doblar-masculino-flaco-joven-11673997.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Error"
        });

        return;
    }

    // Código solo números
    if (!/^\d+$/.test(codigo)) {

        Swal.fire({
            title: "Error",
            text: "El código solo puede contener números.",
            icon: "error"
        });

        return;
    }

    // Cantidad debe contener al menos un número
    if (!/\d/.test(cantidad_inventario)) {

        Swal.fire({
            title: "Error",
            text: "La cantidad debe contener al menos un número.",
            icon: "error"
        });

        return;
    }

    // Todo correcto
    Swal.fire({
        title: "Completadooo!",
        text: "Coflaa tu fucking inventario fue registrado correctamente.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSH6nzE1bS-2tIx4IZWiujryXWS7xBg8il2CVaJOWe2w&s=10",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Éxito"
    }).then(() => {
        document.getElementById("formInventario").reset();
    });
}

// Botón volver al inicio
document.getElementById("btnInicio").addEventListener("click", function () {
    window.location.href = "../index.html";
});