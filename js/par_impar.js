document.addEventListener('DOMContentLoaded', function(){
    const entrada = document.getElementById('entrada')
    const saida = document.getElementById('resposta')

    entrada.addEventListener('input', function(){
        let entradaconvertida = parseInt(entrada.value)
        if(isNaN(entradaconvertida)){
            saida.textContent = `${entradaconvertida} é um número invalido`
        }
        else if(entradaconvertida % 2 === 0){
            saida.textContent = `${entradaconvertida} é par`
        }
        else {
            saida.textContent = `${entradaconvertida} é impar`
        }
    });
});