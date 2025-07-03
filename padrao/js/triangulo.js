document.addEventListener('DOMContentLoaded', function () {
    const entrada1 = document.getElementById('entrada1')
    const entrada2 = document.getElementById('entrada2')
    const entrada3 = document.getElementById('entrada3')
    const saida = document.getElementById('resposta')

    document.getElementById('btn').addEventListener('click', function () {

        let entradacon1 = parseInt(entrada1.value)
        let entradacon2 = parseInt(entrada2.value)
        let entradacon3 = parseInt(entrada3.value)

        if ((isNaN(entradacon1) || isNaN(entradacon2) || isNaN(entradacon3)) || ((entradacon1 == 0) || (entradacon2 == 0) || (entradacon3 == 0)) || ((entradacon1 < 0) || (entradacon2 < 0) || (entradacon3 < 0))) {
            saida.textContent = "calculo invalido"
        }
        else if ((entradacon1 < entradacon2 + entradacon3) && (entradacon2 < entradacon3 + entradacon1) && (entradacon3 < entradacon2 + entradacon1)) {
            saida.textContent = "os valores podem formar um triângulo"
        }
        else {
            saida.textContent = "os valores não formam um triângulo"
        }

    });
});