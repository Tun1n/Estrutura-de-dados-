function calcular() {
    let fahreinheit = Number(document.getElementById('valor1').value);
    document.getElementById("fahreinheit").innerHTML = "A temperatura em fahreinheit é: " + fahreinheit;
    fahreinheit = parseFloat(fahreinheit);

    let Celsius = (fahreinheit-32) * (5/9);
    Celsius = parseFloat(Celsius);
    document.getElementById("Celsius").innerHTML = "A temperatura convertida em graus celsius é: " + Celsius



}
    
