document.addEventListener('DOMContentLoaded', function () {
    const parimpaBtn = document.getElementById('parimpaBtn');
    const formulario = document.getElementById('formulario');
    const saida = document.getElementById('resultado')

    let inputCriado = false;
    function validacao(entradaconvertida) {
        if (isNaN(entradaconvertida) || entradaconvertida === 0 || entradaconvertida < 0) {
            return {
                valido: false,
                mensagem: `${entradaconvertida} é um ano invalido`
            };
        }
        return {
            valido: true,
            mensagem: ''
        }
    };

    parimpaBtn.addEventListener('click', function () {

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
                    saida.textContent = entradaconvertida.mensagem;
                    return;
                }


                if (entradaconvertida % 2 === 0) {
                    saida.textContent = `${entradaconvertida} é par`;
                }
                else {
                    saida.textContent = `${entradaconvertida} é impar`;
                }
            });

            formulario.appendChild(entrada);
            formulario.appendChild(verificarBtn);
            inputCriado = true;
        }
    });

});