function calcular() {
    let raio = Number(document.getElementById('valor1').value);
    document.getElementById("raio").innerHTML = "O raio do tanque é: " + raio;

    let altura = Number(document.getElementById('valor2').value);
    document.getElementById("altura").innerHTML = "A altura do tanque é:" + altura;

    let p1 = 3.14;
    let comprimentocircunferencia = (2 * p1 * raio);
    let arealateral = (altura * comprimentocircunferencia);
    let areabase = p1*(raio ** 2);
    let areatotal = (arealateral + areabase);
    let litros = (areatotal / 3) * 2;

    let Nlatas = (litros / 5);
    document.getElementById("Nlatas").innerHTML = "O numero total de latas é:" + Nlatas;

    let custo = (Nlatas*40);
    custo = parseFloat(custo);
    document.getElementById("custo").innerHTML = "O custo total é:" + "R$" + custo;
    

}
    
