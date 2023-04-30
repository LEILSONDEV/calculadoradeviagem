// Seleciona os elementos do formulário e do resultado
var form = document.getElementById("form");
var resultado = document.getElementById("resultado");

// Adiciona um evento de submit ao formulário
form.addEventListener("submit", function(event) {
    // Previne o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();

    // Obt�m os valores dos campos do formul�rio
    var km_l = parseFloat(form.km_l.value);
    var distancia = parseFloat(form.distancia.value);
    var preco = parseFloat(form.preco.value);

    // Verifica se os valores são válidos
    if (isNaN(km_l) || isNaN(distancia) || isNaN(preco)) {
        // Mostra uma mensagem de erro
        resultado.textContent = "Por favor, insira valores numéricos válidos.";
    } else {
        // Calcula o gasto de combustível em litros
        var gasto_litros = distancia / km_l;

        // Calcula o gasto de combustível em reais
        var gasto_reais = gasto_litros * preco;

        // Mostra o resultado com duas casas decimais
        resultado.textContent = "O gasto médio de combustível na viagem será de R$ " + gasto_reais.toFixed(2) + ".";
    }
});