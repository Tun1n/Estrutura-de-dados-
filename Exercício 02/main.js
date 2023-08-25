function Soma() {
     let Número1 = Number(document.getElementById('Número1').value);
     let Número2 = Number(document.getElementById('Número2').value);
     let Resultado = (Número1 + Número2) ;
     document.getElementById("Resultado").innerHTML = "O resultado é " + Resultado;
    }

function Subtração() {
         let Número1 = Number(document.getElementById('Número1').value);
         let Número2 = Number(document.getElementById('Número2').value);
         let Resultado = (Número1 - Número2) ;
         document.getElementById("Resultado").innerHTML = "O resultado é " + Resultado;
    }

    
function Potência2() {
     let Número1 = Number(document.getElementById('Número1').value);
     let Resultado = (Número1**2);
     document.getElementById("Resultado").innerHTML = "O resultado é " + Resultado;
}


function Divisão() {
     let Número1 = Number(document.getElementById('Número1').value);
     let Número2 = Number(document.getElementById('Número2').value);
     let Resultado = (Número1/Número2) ;
     document.getElementById("Resultado").innerHTML = "O resultado é " + Resultado;
}

function Multiplicação() {
     let Número1 = Number(document.getElementById('Número1').value);
     let Número2 = Number(document.getElementById('Número2').value);
     let Resultado = (Número1*Número2) ;
     document.getElementById("Resultado").innerHTML = "O resultado é " + Resultado;
}
