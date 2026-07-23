console.log("JavaScript cargado");


function validarDatos(event) {

    // Evita que el formulario se envíe
    event.preventDefault();

    let ventas = document.getElementById("ventas").value.trim();
    let fecha = document.getElementById("fecha_contabilidad").value;
    let ingresos = document.getElementById("ingresos").value.trim();
    let egresos = document.getElementById("egresos").value.trim();

    // Campos vacíos
    if (
        ventas === "" ||
        fecha === "" ||
        ingresos === "" ||
        egresos === ""
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

    // Ventas
    if (!/^\d+$/.test(ventas)) {

        Swal.fire({
            title: "Error",
            text: "Ventas solo puede contener números.",
            icon: "error"
        });

        return;
    }

    // Ingresos
    if (!/^\d+$/.test(ingresos)) {

        Swal.fire({
            title: "Error",
            text: "Ingresos solo puede contener números.",
            icon: "error"
        });

        return;
    }

    // Egresos
    if (!/^\d+$/.test(egresos)) {

        Swal.fire({
            title: "Error",
            text: "Egresos solo puede contener números.",
            icon: "error"
        });

        return;
    }

    // Todo correcto
    Swal.fire({
        title: "Completadooo!",
            text: "Coflaa tus fucking datos han sido enviados.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSH6nzE1bS-2tIx4IZWiujryXWS7xBg8il2CVaJOWe2w&s=10",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
    });

}