function bissexto (){
    var x;
    var anos=prompt("Infome o ano para saber se ele é bissexto:")

    if (anos % 400 == 0 || (anos % 4 == 0 && anos % 100 != 0)){
        x = anos + " é um ano bissexto";
        document.getElementById("info").innerHTML=x
    } else {
        x = anos + " não é um ano bissexto";
        document.getElementById("info").innerHTML=x
    }
}