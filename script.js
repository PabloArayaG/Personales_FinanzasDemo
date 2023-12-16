let tienesValor = parseFloat(localStorage.getItem('tienesValor')) || 0;
let ahorroValor = parseFloat(localStorage.getItem('ahorroValor')) || 0;

function agregarIngreso() {
    const ingresosInput = parseFloat(document.getElementById('ingresosInput').value);

    if (!isNaN(ingresosInput)) {
        tienesValor += ingresosInput;
        actualizarTienes();
        actualizarAhorro();
        guardarDatos();
    }
}

function restarGasto() {
    const gastosInput = parseFloat(document.getElementById('gastosInput').value);

    if (!isNaN(gastosInput)) {
        tienesValor -= gastosInput;
        actualizarTienes();
        actualizarAhorro();
        guardarDatos();
    }
}

function restarCredito() {
    const creditoInput = parseFloat(document.getElementById('creditoInput').value);

    if (!isNaN(creditoInput)) {
        tienesValor -= creditoInput;
        actualizarTienes();
        actualizarAhorro();
        guardarDatos();
    }
}

function actualizarTienes() {
    document.getElementById('tienesValor').textContent = tienesValor.toFixed(2);
}

function actualizarAhorro() {
    ahorroValor = tienesValor;
    document.getElementById('ahorroValor').textContent = ahorroValor.toFixed(2);
}

function guardarDatos() {
    localStorage.setItem('tienesValor', tienesValor);
    localStorage.setItem('ahorroValor', ahorroValor);
}

// Función para cambiar entre modos claro y oscuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}


// Event listeners para botones
document.getElementById('ingresosInput').addEventListener('input', function () {
    this.setCustomValidity('');
});

document.getElementById('gastosInput').addEventListener('input', function () {
    this.setCustomValidity('');
});

document.getElementById('creditoInput').addEventListener('input', function () {
    this.setCustomValidity('');
});

document.getElementById('darkModeToggle').addEventListener('click', function () {
    toggleDarkMode();
});
