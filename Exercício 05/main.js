function totalPrest() {
    let TotalPrest = Number(document.getElementById('Número1').value);
    document.getElementById("TotalPrest").innerHTML = "Total de prestações é igual a: " + TotalPrest;
}

function prestPaga() {
    let PrestPaga = Number(document.getElementById('Número2').value);
    document.getElementById("PrestPaga").innerHTML = "Prestações pagas é igual a: " + PrestPaga;
}
    
function valorPrest(){
    let ValorPrest = Number(document.getElementById('Número3').value);
    document.getElementById("ValorPrest").innerHTML = "Valor total das prestações é: " + ValorPrest;
}

function dívida(){
    let PrestPaga = Number(document.getElementById('Número2').value);
    let TotalPrest = Number(document.getElementById('Número1').value);
    let ValorPrest = Number(document.getElementById('Número3').value);
    let Saldodevedor = ((ValorPrest * TotalPrest) - (PrestPaga * ValorPrest));
    document.getElementById("Saldodevedor").innerHTML = "Seu saldo devedor é : " + Saldodevedor;
}

function pago(){
    let ValorPrest = Number(document.getElementById('Número3').value);
    let PrestPaga = Number(document.getElementById('Número2').value);
    let ValorPago = (ValorPrest*PrestPaga);
    document.getElementById("pago").innerHTML = "O valor pago é : " + ValorPago ;

}