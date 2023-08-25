function dados(){
     let nome = String(document.getElementById('identificação').value);
     document.getElementById("nome").innerHTML = "Seu nome é: " + nome;

     let nota1 = Number(document.getElementById('valor1').value);
     document.getElementById("nota1").innerHTML = "Sua 1 nota é: " + nota1;

     let nota2 = Number(document.getElementById('valor2').value);
     document.getElementById("nota2").innerHTML = "Sua 2 nota é: " + nota2;

     let nota3 = Number(document.getElementById('valor3').value);
     document.getElementById("nota3").innerHTML = "Sua 3 nota é: " + nota3;

     
}

function médiaarit(){

    let nota1 = Number(document.getElementById('valor1').value);
    let nota2 = Number(document.getElementById('valor2').value);
    let nota3 = Number(document.getElementById('valor3').value);
     
    let médiaarit = (nota1+nota2+nota3) / 3;
    document.getElementById("médiaarit").innerHTML = "Sua média desse semestre é : " + médiaarit;

}