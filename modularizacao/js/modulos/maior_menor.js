import { validacaoMulti } from "../utils/utils.js";
import { limparFormulario } from "../utils/utils.js";

export function calcularMaiormenor() {
    const formulario = document.getElementById('formulario');
    const saida = document.getElementById('resultado')
    
    let inputCriado = false;
    
    limparFormulario(formulario, saida, inputCriado);

    if (!inputCriado) {
        const entrada1 = document.createElement('input');
        entrada1.type = 'number';
        entrada1.id = 'entrada';
        entrada1.placeholder = 'Entre com o 1º número';

        const entrada2 = document.createElement('input');
        entrada2.type = 'number';
        entrada2.id = 'entrada';
        entrada2.placeholder = 'Entre com o 2º número';

        const entrada3 = document.createElement('input');
        entrada3.type = 'number';
        entrada3.id = 'entrada';
        entrada3.placeholder = 'Entre com o 3º número';

        const verificarBtn = document.createElement('button');
        verificarBtn.textContent = 'Verificar';
        verificarBtn.type = 'button';

        verificarBtn.addEventListener('click', function () {
            let entradacon1 = parseInt(entrada1.value)
            let entradacon2 = parseInt(entrada2.value)
            let entradacon3 = parseInt(entrada3.value)
            const resultado = validacaoMulti(entradacon1, entradacon2, entradacon3);

            if (!resultado.valido) {
                saida.textContent = resultado.mensagem;
                return;
            }

            if (entradacon1 > entradacon2 && entradacon1 > entradacon3) {
                saida.textContent = `${entrada1.value} é o maior`;
            } else if (entradacon2 > entradacon3 && entradacon2 > entradacon1) {
                saida.textContent = `${entrada2.value} é o maior`;
            } else if (entradacon1 === entradacon2 && entradacon2 === entradacon3) {
                saida.textContent = "Todos os valores são iguais";
            } else {
                saida.textContent = `${entrada3.value} é o maior`;
            }
        });

        formulario.appendChild(entrada1);
        formulario.appendChild(entrada2);
        formulario.appendChild(entrada3);
        formulario.appendChild(verificarBtn);
        inputCriado = true;
    };
};