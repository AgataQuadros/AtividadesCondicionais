document.addEventListener('DOMContentLoaded', function () {
    const parimpaBtn = document.getElementById('parimpaBtn');
    const maiormenorBtn = document.getElementById('maiormenorBtn')
    const velocidadeBtn = document.getElementById('velocidadeBtn')
    const salarioBtn = document.getElementById('salarioBtn')
    const passagemBtn = document.getElementById('passagemBtn')
    const bissextoBtn = document.getElementById('bissextoBtn')
    const trianguloBtn = document.getElementById('trianguloBtn')
    const formulario = document.getElementById('formulario');
    const saida = document.getElementById('resultado')

    let inputCriado = false;

    function limparFormulario() {
        formulario.innerHTML = '';
        saida.textContent = '';
        inputCriado = false;
    }

    function validacao(entradaconvertida) {
        if (isNaN(entradaconvertida) || entradaconvertida === 0 || entradaconvertida < 0) {
            return {
                valido: false,
                mensagem: `${entradaconvertida} é um valor inválido`
            };
        }
        return {
            valido: true,
            mensagem: ''
        }
    }

    function validacaoMulti(entradacon1, entradacon2, entradacon3) {
        if ((isNaN(entradacon1) || isNaN(entradacon2) || isNaN(entradacon3)) || ((entradacon1 == 0) || (entradacon2 == 0) || (entradacon3 == 0)) || ((entradacon1 < 0) || (entradacon2 < 0) || (entradacon3 < 0))) {
            return {
                valido: false,
                mensagem: "Valores inválidos"
            };
        }
        return {
            valido: true,
            mensagem: ''
        }
    }

    parimpaBtn.addEventListener('click', function () {
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
    });

    maiormenorBtn.addEventListener('click', function () {
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
        }
    });

    velocidadeBtn.addEventListener('click', function () {
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
        }
    });

    salarioBtn.addEventListener('click', function () {
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
        }
    });

    passagemBtn.addEventListener('click', function () {
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
        }
    });

    bissextoBtn.addEventListener('click', function () {
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

                if ((entradaconvertida % 400 == 0) || (entradaconvertida % 4 == 0 && entradaconvertida % 100 !== 0)) {
                    saida.textContent = `${entradaconvertida} é bissexto`;
                } else {
                    saida.textContent = `${entradaconvertida} não é bissexto`;
                }
            });

            formulario.appendChild(entrada);
            formulario.appendChild(verificarBtn);
            inputCriado = true;
        }
    });

    trianguloBtn.addEventListener('click', function () {
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
        }
    });
});