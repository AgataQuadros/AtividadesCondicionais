import { validacao } from "../utils/utils.js";
import { limparFormulario } from "../utils/utils.js";

export function calcularVelocidade() {
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

            if (entradaconvertida > 60) {
                saida.textContent = `${entrada.value} está acima do limite de velocidade`;
            } else if (entradaconvertida < 60) {
                saida.textContent = `${entrada.value} está abaixo do limite de velocidade`;
            } else {
                saida.textContent = `${entrada.value} está dentro do limite de velocidade`;
            }
        });

        formulario.appendChild(entrada);
        formulario.appendChild(verificarBtn);
        inputCriado = true;
    };
};