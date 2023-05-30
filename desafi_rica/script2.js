btn = document.getElementById ("btn")

btn.addEventListener("click", function () {
    var x
    var r
    
var numero=prompt("Digite um número inteiro")
numero=parseFloat(numero)
x = numero - 1 + " é o seu antecessor";
r = numero + 1 + " é o seu sucessor";
alert(x + " " + r)
})