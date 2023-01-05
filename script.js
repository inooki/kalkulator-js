function obliczD(){
    document.getElementById("wynikD").innerHTML = " ";
    let a=Number(document.getElementById("a").value);
    let b=Number(document.getElementById("b").value);
    let c=Number(document.getElementById("c").value);
    document.getElementById("wynikD").innerHTML = "wynik sumy liczb "+(a+b+c);
}
function obliczS(){
    document.getElementById("wynikS").innerHTML = " ";
    let e=Number(document.getElementById("e").value);
    let f=Number(document.getElementById("f").value);
    let d=Number(document.getElementById("d").value);
    document.getElementById("wynikS").innerHTML = "wynik średniej "+(e+f+d)/3;
}
function oblicz3(){
    document.getElementById("wynik3").innerHTML = " ";
    let g=Number(document.getElementById("g").value);
    let h=Number(document.getElementById("h").value);
    document.getElementById("wynik3").innerHTML = "wynik sumy "+(g+h)+"<br>";
    document.getElementById("wynik3").innerHTML += "wynik różnicy "+(g-h)+"<br>";
    document.getElementById("wynik3").innerHTML += "wynik iloczynu "+(g*h)+"<br>";

}
function obliczP(){
    document.getElementById("wynikP").innerHTML = " ";
    let i=Number(document.getElementById("i").value);
    document.getElementById("wynikP").innerHTML = "pierwiastek z "+i+" to "+Math.sqrt(i);
}
function obliczK(){
    document.getElementById("wynikK").innerHTML = " ";
    let j=Number(document.getElementById("j").value);
    document.getElementById("wynikK").innerHTML = "pole kwadratu wynosi "+(j*j)+"m^2";
}
function obliczPr(){
    document.getElementById("wynikPr").innerHTML = " ";
    let k=Number(document.getElementById("k").value);
    let l=Number(document.getElementById("l").value);
    let l1=Number(document.getElementById("l").value);
    document.getElementById("wynikPr").innerHTML = "pole prostopadłościanu wynosi "+(2*k*l+2*l*l1+2*k*l1)+"m^2";
}
function obliczKo(){
    document.getElementById("wynikKo").innerHTML = " ";
    let m=Number(document.getElementById("m").value);
    document.getElementById("wynikKo").innerHTML = "pole koła wynosi "+Math.PI * Math.pow(m, 2)+" m^2"+"<br>";
    document.getElementById("wynikKo").innerHTML += "obwód koła wynosi "+2* Math.PI * m +" m";
}
function obliczPa(){
    document.getElementById("wynikPa").innerHTML = " ";
    let n=Number(document.getElementById("n").value);
    document.getElementById("wynikPa").innerHTML = "koszt to " +(360/(100/8)*n)+" zł";
}
function obliczKos(){
    document.getElementById("wynikKos").innerHTML = " ";
    let o=Number(document.getElementById("o").value);
    let p=Number(document.getElementById("p").value);
    let r=Number(document.getElementById("r").value);
    document.getElementById("wynikKos").innerHTML = "koszt to " +(p/(100/r)*o)+" zł";
}
function obliczLo(){
    document.getElementById("wynikLo").innerHTML = " ";
    let s=Number(document.getElementById("s").value);
    document.getElementById("wynikLo").innerHTML = "zysk to "+ (s*8/100-(s*8/100)*9/100) +" zł";
}