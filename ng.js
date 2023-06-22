var s="";
var c=0;
const random=Math.floor(Math.random() *100);
document.getElementById("hi").onclick = function(){
    var a=parseInt(document.getElementById("chk").value);
    if(a>random){
        c=c+1;
        s="You lost" +c+ "Try check with small number⬇️";
        document.getElementById("chec").textContent = s;
    }
    else if(a<random){
        c=c+1;
        s=" You lost" +c+"Try check with big number⬆️";
        document.getElementById("chec").textContent = s;
    }
    else if(a==random){
        s= "Congratulation's😎, You Guessed it correctly in "+c+" try.";
        document.getElementById("chec").textContent = s;
    }
}