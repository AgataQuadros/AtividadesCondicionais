document.addEventListener('DOMContentLoaded', function () {
    const saida = document.getElementById('resposta')
    const entrada1 = document.getElementById('entrada1')
    const entrada2 = document.getElementById('entrada2')
    const entrada3 = document.getElementById('entrada3')


    document.getElementById('btn').addEventListener('click', function () {

        if (entrada1.value > entrada2.value && entrada1 > entrada3.value) {
            saida.textContent = `${entrada1.value} é o maior`
        }
        else if (entrada2.value > entrada3.value && entrada2.value > entrada1.value) {
            saida.textContent = `${entrada2.value} é o maior`
        }
        else if(entrada1.value === entrada2.value && entrada2.value === entrada3.value){
            saida.textContent = "Todos os valores são iguais"
        }
        else {
            saida.textContent = `${entrada3.value} é o maior`
        }
    });

});