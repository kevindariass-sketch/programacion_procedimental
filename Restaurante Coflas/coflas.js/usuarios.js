const botonInicio = document.getElementById("btnInicio");

if (botonInicio) {
    botonInicio.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "../index.html";
    });
}

function ValidarDatos() {

    let nombre_usuarios = document.getElementById("nombre_usuarios").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let tipoDocumento = document.querySelector('input[name="tipo_documento"]:checked');
    let documento = document.getElementById("documento").value.trim();
    let telefono_usuarios = document.getElementById("telefono_usuarios").value.trim();
    let email = document.getElementById("email").value.trim();
    let genero = document.getElementById("genero").value;
    let cargo = document.getElementById("cargo").value.trim();
    let password = document.getElementById("password").value.trim();
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;

    if (
        nombre_usuarios === "" ||
        apellido === "" ||
        tipoDocumento === null ||
        documento === "" ||
        telefono_usuarios === "" ||
        email === "" ||
        genero === "" ||
        cargo === "" ||
        password === "" ||
        fecha_nacimiento === ""
    ) {
        Swal.fire({
            title: "Errooor!",
            text: "Coflaa tienes que llenar todos los campos.",
            imageUrl: "https://thumbs.dreamstime.com/b/el-doblar-masculino-flaco-joven-11673997.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
        });
        return;
    }

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre_usuarios)) {
        Swal.fire({
            icon: "error",
            title: "Nombre inválido",
            text: "El nombre solo puede contener letras."
        });
        return;
    }

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(apellido)) {
        Swal.fire({
            icon: "error",
            title: "Apellido inválido",
            text: "El apellido solo puede contener letras."
        });
        return;
    }

    if (!/^\d+$/.test(documento)) {
        Swal.fire({
            icon: "error",
            title: "Documento inválido",
            text: "Solo se permiten números."
        });
        return;
    }

    if (documento.length > 10) {
        Swal.fire({
            icon: "error",
            title: "Documento inválido",
            text: "Máximo 10 dígitos."
        });
        return;
    }

    if (!/^\d+$/.test(telefono_usuarios)) {
        Swal.fire({
            icon: "error",
            title: "Teléfono inválido",
            text: "Solo se permiten números."
        });
        return;
    }

    if (telefono_usuarios.length !== 10) {
        Swal.fire({
            icon: "error",
            title: "Teléfono inválido",
            text: "Debe tener exactamente 10 dígitos."
        });
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        Swal.fire({
            icon: "error",
            title: "Correo inválido",
            text: "Ingrese un correo válido."
        });
        return;
    }

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(cargo)) {
        Swal.fire({
            icon: "error",
            title: "Cargo inválido",
            text: "El cargo solo puede contener letras."
        });
        return;
    }

    Swal.fire({
        title: "Completadooo!",
        text: "Coflaa tus fucking datos han sido enviados.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSH6nzE1bS-2tIx4IZWiujryXWS7xBg8il2CVaJOWe2w&s=10",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
    });

}

document.getElementById("btnGuardar").addEventListener("click", ValidarDatos);