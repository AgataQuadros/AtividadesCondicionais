document.addEventListener('DOMContentLoaded', function(){
    const saida = document.getElementById('resposta')
    const entrada1 = document.getElementById('entrada1')
    const entrada2 = document.getElementById('entrada2')
    const entrada3 = document.getElementById('entrada3')


    document.getElementById('btn').addEventListener('click', function(){

        if(entrada1.value<entrada2.value<entrada3.value){
            saida.textContent = `{${entrada3},${entrada2},${entrada1}}`
        }
        else if(entrada2.value<entrada3.value<entrada1.value){
            saida.textContent = `{${entrada1},${entrada2},${entrada3}}`
        }
        else if(entrada3.value<entrada1.value<entrada2.value){
            saida.textContent = `{${entrada2},${entrada1},${entrada3}}`
        }
        else if(entrada3.value<entrada1.value<entrada2.value){
            saida.textContent = `{${entrada2},${entrada1},${entrada3}}`
        }
    });
    
});