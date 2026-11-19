
let valor = 0;

const tela = document.getElementById("valor");

document.getElementById("aumentar").addEventListener("click", function() {
    valor = aumentar(valor);
    tela.textContent = valor;
});

document.getElementById("diminuir").addEventListener("click", function() {
    valor = diminuir(valor);
    tela.textContent = valor;
});

document.getElementById("resetar").addEventListener("click", function() {
    valor = zerar();
    tela.textContent = valor;
});
