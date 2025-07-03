document.addEventListener('DOMContentLoaded', function () {
    const saida = document.getElementById('resposta')
    const entrada = document.getElementById('entrada')

    entrada.addEventListener('input', function(){
        let entradaconvertida = parseInt(entrada.value)
        if(entradaconvertida > 60){
            saida.textContent = `${entrada.value} é acima do limite de velocidade`
        }
        else if(entradaconvertida < 60){
            saida.textContent = `${entrada.value} é abaixo do limite de velocidade`
        }
        else {
            saida.textContent = `${entrada.value} esta dentro do limite de velocidade`
        }
    })
});