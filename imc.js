function calcular(){
    let altura = Number(document.getElementById("altura").value);
    let peso = Number(document.getElementById("peso").value);
    resultado = peso / (altura*altura);
    document.getElementById("resultado").innerHTML = "Seu IMC é: " + resultado.toFixed(1);

    if (altura === 0 || isNaN(altura) || peso === 0 || isNaN(peso)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos para altura e peso para calcular o IMC!";
        document.getElementById("situacao").innerHTML = "";
        return;
    }

    if(resultado < 17){
        document.getElementById("situacao").innerHTML = "Situação: muito abaixo do peso. ❗";
    }
    else if(resultado > 17 && resultado < 18.49){
        document.getElementById("situacao").innerHTML = "Situação: abaixo do peso. ❗";
    }
    else if(resultado > 18.5 && resultado < 24.99){
        document.getElementById("situacao").innerHTML = " Situação: dentro do peso normal. ✅";
    }
    else if(resultado > 25 && resultado < 29.99){
        document.getElementById("situacao").innerHTML = " Situação: acima do peso. ❗";
    }
    else if(resultado > 30 && resultado < 34.99){
        document.getElementById("situacao").innerHTML = " Situação: Grau de Obesidade I. ❗";
    }
    else if(resultado > 35 && resultado < 39.99){
        document.getElementById("situacao").innerHTML = "Situação: Grau de Obesidade II (severa). ❗";
    }
    else if(resultado > 40){
        document.getElementById("situacao").innerHTML = " Situação: Grau de Obesidade III (mórbida). ⚠";
    }
    else if(isNaN(resultado)){
        document.getElementById("resultado").innerHTML = "Por favor, insira valores numéricos válidos para Calcular o IMC!";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("altura").addEventListener("blur", function(event){
        let alturaInput = event.target.value.replace(/\D/g, '');
        if (alturaInput.length > 2){
            alturaInput = alturaInput.slice(0, -2) + '.' + alturaInput.slice(-2);
        }
        event.target.value = alturaInput;
    });

    document.getElementById("peso").addEventListener("blur", function(event){
        let pesoInput = event.target.value.replace(/\D/g, '');
        event.target.value = pesoInput;
    });
});



