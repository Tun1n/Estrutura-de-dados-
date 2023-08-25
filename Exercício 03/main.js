function Elevar() {
     let Número1 = Number(document.getElementById('Número1').value);
     Número1 = parseInt(Número1);
     let Resultado = (Número1 ** 2) ;
     document.getElementById("Resultado").innerHTML = "O resultado é " + Resultado;
    }


