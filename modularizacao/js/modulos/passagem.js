import { validacao } from "../utils/utils.js";
import { limparFormulario } from "../utils/utils.js";

export function calcularPassagem() {
    const formulario = document.getElementById('formulario');
    const saida = document.getElementById('resultado')

    let inputCriado = false;
    
    limparFormulario(formulario, saida, inputCriado);

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
                let maisduzentos = entradaconvertida * 0.4;
                let menosduzentos = entradaconvertida * 0.7;
                const resultado = validacao(entradaconvertida);

                if (!resultado.valido) {
                    saida.textContent = resultado.mensagem;
                    return;
                }

                if (entradaconvertida <= 200) {
                    saida.textContent = `Sua passagem fica em ${menosduzentos.toFixed(2)} reais`;
                } else {
                    saida.textContent = `Sua passagem fica em ${maisduzentos.toFixed(2)} reais`;
                }
            });

            formulario.appendChild(entrada);
            formulario.appendChild(verificarBtn);
            inputCriado = true;
        };
};