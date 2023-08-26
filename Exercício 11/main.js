function calcular() {
    let a = Number(document.getElementById('valor1').value);
    document.getElementById("a").innerHTML = "O valor de a é: " + a;

    let b = Number(document.getElementById('valor2').value);
    document.getElementById("b").innerHTML = "O valor de b é: " + b;

    let c = Number(document.getElementById('valor3').value);
    document.getElementById("c").innerHTML = "O valor de c é: " + c;

    let resultado = a**2 + c**2 + b*(2*(a+b+c));
    document.getElementById("resultado").innerHTML = "A solução é: " + resultado;


}
    
