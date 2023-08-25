function Saldo() {
    // Variável Global
     let Número1 = Number(document.getElementById('Número1').value);
     Número1 = parseFloat(Número1);
     let Resultado = (Número1 + 500);
     document.getElementById("Resultado").innerHTML = "O resultado é " + Resultado;
     //console.log("O resultado é: ", Resultado);
    }