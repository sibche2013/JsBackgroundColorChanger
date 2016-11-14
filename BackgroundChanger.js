//This File Was Written By Amin Arjmand | Email: aminarj2000@gmail.com | Site: aminarjmand.com | Github Profile : https://github.com/sibche2013
//Generate Random Number
function rand(start, end) {
    var r = start + Math.floor(Math.random() * (end - start));
    return r;
}

//Some Style For Button
document.body.style.textAlign = "center";
document.body.style.marginTop = "100px";

//Random Background Color Generator Function
function backgroundChanger() {
    //background Color For Body
    var bgColor = "rgb(" + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + ")";
    //background Color For Texts
    var bgColor2 = "rgb(" + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + ")";
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = bgColor2;
}
