function digitar(n){
    var numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero + n;
}
function limpar(){
    document.getElementById("resultado").innerHTML = "";
}
 function apagar(){
     var result = document.getElementById("resultado").innerHTML;
     result = document.getElementById("resultado").innerHTML = result.substring(0, result.length - 1);
 }
 function calcular(){
     var resultado = document.getElementById("resultado").innerHTML;
     if(resultado){
         document.getElementById("resultado").innerHTML = eval(resultado)
     } else {
         document.getElementById("resultado").innerHTML = "";
     }
 }
 function raiz(){
    var result = document.getElementById("resultado").innerHTML;
    if(result){
    result = Math.sqrt(result);
    document.getElementById("resultado").innerHTML = result;
    }else{
        document.getElementById("resultado").innerHTML = "";
    }
 }