// ========== BOTÓN GUARDAR ==========
const boton = document.querySelector("button[type='submit']");

boton.addEventListener("click", function(e) {
    e.preventDefault();

    // Capturar valores
    let ventas = document.querySelector("input[placeholder='Ej: ID-1234']").value;
    let fecha_contabilidad = document.querySelector("input[type='date']").value;
    let ingresos = document.querySelector("input.is-success").value;
    let egresos = document.querySelector("input.is-danger").value;
    let concepto = document.querySelector("input[placeholder='Descripción del movimiento...']").value;
    let valor = document.querySelector("input[placeholder='Resultado final']").value;

    // Validación básica
    if (!ventas || !fecha_contabilidad || !ingresos || !concepto) {
        alert("⚠️ Por favor completa los campos obligatorios.");
        return;
    }

    // Mostrar en consola (para verificar)
    console.log({
        ventas,
        fecha_contabilidad,
        ingresos,
        egresos,
        concepto,
        valor
    });

    alert("✅ Registro guardado con éxito");
    location.reload();
});


// ========== BOTÓN VOLVER AL INICIO ==========
const botonInicio = document.querySelector("a[href='../index.html']");

botonInicio.addEventListener("click", function(e) {
    e.preventDefault();
    window.location.href = "../index.html";
});


// ========== CÁLCULO AUTOMÁTICO DEL VALOR FINAL ==========
const inputIngresos = document.querySelector("input.is-success");
const inputEgresos = document.querySelector("input.is-danger");
const inputValor = document.querySelector("input[placeholder='Resultado final']");

function calcularValorFinal() {
    let ingresos = parseFloat(inputIngresos.value) || 0;
    let egresos = parseFloat(inputEgresos.value) || 0;
    inputValor.value = (ingresos - egresos).toFixed(2);
}

inputIngresos.addEventListener("input", calcularValorFinal);
inputEgresos.addEventListener("input", calcularValorFinal);