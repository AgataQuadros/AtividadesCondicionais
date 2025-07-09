import { validacao } from "../utils/utils.js";
import { limparFormulario } from "../utils/utils.j";

export function calcularSalario() {
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

            if (entradaconvertida < 1000) {
                let aumentodez = entradaconvertida * 1.1;
                saida.textContent = `Seu salário agora é ${aumentodez.toFixed(2)}`;
            } else if (entradaconvertida > 1500) {
                let aumentocinco = entradaconvertida * 1.05;
                saida.textContent = `Seu salário agora é ${aumentocinco.toFixed(2)}`;
            } else {
                saida.textContent = "Seu salário continuará o mesmo";
            }
        });

        formulario.appendChild(entrada);
        formulario.appendChild(verificarBtn);
        inputCriado = true;
    };
};