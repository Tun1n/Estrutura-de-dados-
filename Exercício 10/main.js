function atraso() {
    let Valorprest = Number(document.getElementById('valor1').value);
    document.getElementById("Valorprest").innerHTML = "O valor da prestação é: " + Valorprest;

    let juros = Number(document.getElementById('valor2').value);
    juros = juros/100;
    document.getElementById("juros").innerHTML = "O valor da taxa de juros é: " + juros;

    let Dias = Number(document.getElementById('valor3').value);
    document.getElementById("Dias").innerHTML = "Os dias atrasados são igual a: " + Dias;

    let Prestação = Valorprest + ((Valorprest * Dias * juros));
    document.getElementById("Prestação").innerHTML = "As prestações atrasadas tem o valor de: " + Prestação;


} 
    
