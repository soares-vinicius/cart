var valorTotal = [0, 0];
var valorProduto = [69.90, 29.90];
var qtd = [0, 0];


function addItem(item) {

    var quantidade = document.getElementById('quantidade' + item);
    var total = document.getElementById('total' + item);

    qtd[item] += 1;
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    valorCompra();

};

function removeItem(item) {
    if (qtd[item] > 0) {
        qtd[item] -= 1;

        var quantidade = document.getElementById('quantidade' + item);
        var total = document.getElementById('total' + item);
        quantidade.innerHTML = qtd[item];
        valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
        total.innerHTML = valorTotal[item].toFixed(2);
        valorCompra();
    }
}

function valorCompra() {
    var valorTotalCompra = document.getElementById('valorTotal');
    var valor = 0;
    for (var i = 0; i < valorTotal.length; i++) {
        valor += valorTotal[i];
    }

    valorTotalCompra.innerHTML = valor.toFixed(2);

}