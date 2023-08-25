function converter() {
    let dolar = Number(document.getElementById('valor1').value);
    document.getElementById("dolar").innerHTML = "Seu valor em dolar é: " + dolar;

    let cotação = "1 dólar corresponde a 4,86 reais";
    document.getElementById("cotação").innerHTML = "Relação dólar e real (cotação): " + cotação;

    let conversão = (dolar * 4.86);
    conversão = parseFloat(conversão);
    document.getElementById("conversão").innerHTML = "Seu valor de dolar em reais é: " + conversão;

    
}
    
