import { validacao } from "../utils/utils.js";
import { limparFormulario } from "../utils/utils.js";

export function calcularBissexto() {
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
            const resultado = validacao(entradaconvertida);

            if (!resultado.valido) {
                saida.textContent = resultado.mensagem;
                return;
            }

            if ((entradaconvertida % 400 == 0) || (entradaconvertida % 4 == 0 && entradaconvertida % 100 !== 0)) {
                saida.textContent = `${entradaconvertida} é bissexto`;
            } else {
                saida.textContent = `${entradaconvertida} não é bissexto`;
            }
        });

        formulario.appendChild(entrada);
        formulario.appendChild(verificarBtn);
        inputCriado = true;
    };
};