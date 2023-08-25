function dados() {
    let nome = String(document.getElementById('identificação').value);
    document.getElementById("nome").innerHTML = "Seu nome é: " + nome;

    let salariofixo = Number(document.getElementById('valor1').value);
    salariofixo = parseFloat(salariofixo);

    let totalvendido = Number(document.getElementById('valor3').value);
    totalvendido = parseFloat(totalvendido);
    document.getElementById("totalvendido").innerHTML = "Seu valor de vendas é: " + totalvendido;

    let comissao = (15/100) * totalvendido;

    let totalsalario = (salariofixo + comissao);
    totalsalario = parseFloat(totalsalario);
    document.getElementById("totalsalario").innerHTML = "Seu salário total é : " + totalsalario;

}
    
