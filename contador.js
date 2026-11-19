
function aumentar(valor) {
    return valor + 1;
}

function diminuir(valor) {
    return valor - 1;
}

function zerar() {
    return 0;
}

if (typeof module !== "undefined") {
    module.exports = {
        aumentar,
        diminuir,
        zerar
    };
}
