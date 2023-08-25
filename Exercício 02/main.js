function Soma() {
    // Variável Global
     let Número1 = Number(document.getElementById('Número1').value);
     let Número2 = Number(document.getElementById('Número2').value);
     let Resultado = (Número1 + Número2) ;
     document.getElementById("Resultado").innerHTML = "O resultado é " + Resultado;
     //console.log("O resultado é: ", Resultado);
    }

function Subtração() {
        // Variável Global
         let Número1 = Number(document.getElementById('Número1').value);
         let Número2 = Number(document.getElementById('Número2').value);
         let Resultado = (Número1 - Número2) ;
         document.getElementById("Resultado").innerHTML = "O resultado é " + Resultado;
         //console.log("O resultado é: ", Resultado);
    }

    
function Potência2() {
    // Variável Global
     let Número1 = Number(document.getElementById('Número1').value);
     let Resultado = (Número1**2);
     document.getElementById("Resultado").innerHTML = "O resultado é " + Resultado;
     //console.log("O resultado é: ", Resultado);
}


function Divisão() {
    // Variável Global
     let Número1 = Number(document.getElementById('Número1').value);
     let Número2 = Number(document.getElementById('Número2').value);
     let Resultado = (Número1/Número2) ;
     document.getElementById("Resultado").innerHTML = "O resultado é " + Resultado;
     //console.log("O resultado é: ", Resultado);
}

function Multiplicação() {
    // Variável Global
     let Número1 = Number(document.getElementById('Número1').value);
     let Número2 = Number(document.getElementById('Número2').value);
     let Resultado = (Número1*Número2) ;
     document.getElementById("Resultado").innerHTML = "O resultado é " + Resultado;
     //console.log("O resultado é: ", Resultado);
}
