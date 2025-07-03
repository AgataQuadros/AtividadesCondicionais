document.addEventListener('DOMContentLoaded', function () {
    const entrada = document.getElementById('entrada')
    const saida = document.getElementById('resposta')

    entrada.addEventListener('input', function () {
        let entradaconvertida = parseInt(entrada.value)
        let maisduzentos = entradaconvertida * 0.40
        let menosduzentos = entradaconvertida * 0.70

        if (isNaN(entradaconvertida) || entradaconvertida === 0 || entradaconvertida < 0) {
            saida.textContent = `${entradaconvertida} é uma distancia invalida`
        }
        else if (entradaconvertida <= 200) {
            saida.textContent = `sua passagem fica em ${menosduzentos} reais`
        }
        else if (entradaconvertida > 200) {
            saida.textContent = `sua passagem fica em ${maisduzentos} reais`
        }
    });
});