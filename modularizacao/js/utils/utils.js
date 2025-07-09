export function limparFormulario() {
    formulario.innerHTML = '';
    saida.textContent = '';
    inputCriado = false;
};

export function validacao(entradaconvertida) {
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
};

export function validacaoMulti(entradacon1, entradacon2, entradacon3) {
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
};

export function adicionarEventoBotao(idBotao, funcao) {
    document.getElementById(idBotao).addEventListener('click', funcao);
};