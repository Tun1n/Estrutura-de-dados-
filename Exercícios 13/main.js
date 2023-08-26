function calcular() {
    let a = Number(document.getElementById('valor1').value);
    document.getElementById("a").innerHTML = "O valor de a é: " + a;

    let b = Number(document.getElementById('valor2').value);
    document.getElementById("b").innerHTML = "O valor de b é: " + b;

    let c = Number(document.getElementById('valor3').value);
    document.getElementById("c").innerHTML = "O valor de c é: " + c;

    let Delta = (b**2) - (4*a*c);
    Delta = parseInt(Delta);
    document.getElementById("Delta").innerHTML = "O valor de Delta é: " + Delta;

                                    
    let divisao = 2 * a;
    let raiz = Math.sqrt(Delta);

    let x1 = (-b + raiz)/divisao;
    document.getElementById("x1").innerHTML = "O valor de x1 é: " + x1;

    let x2 = (-b - raiz)/divisao;
    document.getElementById("x2").innerHTML = "O valor de x2 é: " + x2;

}