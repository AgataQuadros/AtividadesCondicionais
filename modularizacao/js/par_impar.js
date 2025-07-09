import { validacao } from "../utils/utils.js";
import { limparFormulario } from "../utils/utils.js";

export function calcularparimpar(){
    let inputCriado = false;

    limparFormulario();

    if (!inputCriado) {
            const entrada = document.createElement('input');
            entrada.type = 'number';
            entrada.id = 'entrada';
            entrada.placeholder = 'Entre com o número';

            const verificarBtn = document.createElement('button');
            verificarBtn.textContent = 'Verificar';
            verificarBtn.type = 'button';

            verificarBtn.addEventListener('click', function () {
                let entradaconvertida = parseInt(entrada.value);
                const resultado = validacao(entradaconvertida);

                if (!resultado.valido) {
                    saida.textContent = resultado.mensagem;
                    return;
                }

                if (entradaconvertida % 2 === 0) {
                    saida.textContent = `${entradaconvertida} é par`;
                } else {
                    saida.textContent = `${entradaconvertida} é ímpar`;
                }
            });

            formulario.appendChild(entrada);
            formulario.appendChild(verificarBtn);
            inputCriado = true;
        }
};