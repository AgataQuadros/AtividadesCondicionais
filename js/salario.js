document.addEventListener('DOMContentLoaded', function () {
    const entrada = document.getElementById('entrada')
    const saida = document.getElementById('resposta')

    entrada.addEventListener('input', function () {
        let entradaconvertida = parseInt(entrada.value)

        let dez = entradaconvertida * 10 / 100
        let aumentodez = dez + entradaconvertida

        let cinco = entradaconvertida * 5 / 100
        let aumentocinco = cinco + entradaconvertida

        if (isNaN(entradaconvertida) || entradaconvertida === 0 || entradaconvertida < 0) {
            saida.textContent = `${entradaconvertida} é um salário invalido`
        }
        else if (entradaconvertida < 1000) {
            saida.textContent = ` seu salário agora é ${aumentodez}`
        }
        else if (entradaconvertida > 1500) {
            saida.textContent = ` seu salário agora é ${aumentocinco}`
        }
        else {
            saida.textContent = "seu salário continuara o mesmo"
        }
    });
});