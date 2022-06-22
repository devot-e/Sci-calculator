var Exp="";
var ans=0;
function errorType(erro){
    var a='';
    for(var i=0;i<erro.length;i++){
        if(erro[i]!=':')a+=erro[i];
        else break;
    }
    return a;
}
function Eval(){
    try {
        if(Exp==''){
            document.getElementById("in").innerText=Exp;
            document.getElementById("out").innerText=ans;    
        }
        else{
            var x;
            with(Math){
                x=eval(Exp);
            }
            ans=x;
            document.getElementById("out").innerText=ans;
        }
    }
    catch (error) {
        ans=0;
        document.getElementById("out").innerText=error.name;
        alert(error);
    }
}
function ln(x){
    return Math.log(x);
}
function sq(x){
    return Math.pow(x,2);
}
function inv(x){
    return Math.pow(x,-1);
}
function Ans(){
    Exp+=ans;
    
}
function numskey(a){
    Exp+=a;
    document.getElementById("in").innerText=Exp;
}

function Clear(){
    Exp="";
    document.getElementById("in").innerText=Exp;
}
function ClearA(){
    Exp="";
    document.getElementById("in").innerText=Exp;
    document.getElementById("out").innerText=Exp;
}
function backspace(){
    Exp=Exp.slice(0,Exp.length-1);
    document.getElementById("in").innerText=Exp;

}
function pause(){
    document.getElementById('namePlate').style.animationPlayState="paused"
}
function play(){
    document.getElementById('namePlate').style.animationPlayState="running";
}