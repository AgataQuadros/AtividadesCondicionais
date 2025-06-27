document.addEventListener('DOMContentLoaded', function () {
    const entrada = document.getElementById('entrada')
    const saida = document.getElementById('resposta')

    entrada.addEventListener('input', function () {
        let entradaconvertida = parseInt(entrada.value)

        if (isNaN(entradaconvertida) || entradaconvertida === 0 || entradaconvertida < 0) {
            saida.textContent = `${entradaconvertida} é um ano invalido`
        }
        else if ((entradaconvertida % 400 == 0) || (entradaconvertida % 4 == 0 && entradaconvertida % 100 !== 0)) {
            saida.textContent = `${entradaconvertida} é bixesto`
        }
        else {
            saida.textContent = `${entradaconvertida} não é bixesto`
        }
    });
});