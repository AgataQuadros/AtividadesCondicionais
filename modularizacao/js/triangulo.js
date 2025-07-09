import { validacaoMulti } from "../utils/utils.js";
import { limparFormulario } from "../utils/utils.j";

export function calcularTriangulo() {
    let inputCriado = false;
    
    limparFormulario();

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

            if ((entradacon1 < entradacon2 + entradacon3) && (entradacon2 < entradacon3 + entradacon1) && (entradacon3 < entradacon2 + entradacon1)) {
                saida.textContent = "Os valores podem formar um triângulo";
            } else {
                saida.textContent = "Os valores não formam um triângulo";
            }
        });

        formulario.appendChild(entrada1);
        formulario.appendChild(entrada2);
        formulario.appendChild(entrada3);
        formulario.appendChild(verificarBtn);
        inputCriado = true;
    };
};