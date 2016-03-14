var a = +prompt("enter a number");
var b = +prompt("enter the degree");

function pow(a,b) {
    var c = a;
        for (var i = 1; i < b; i++) {
            c *= a;
        }
        return c;
    }
if (b<=0){
    alert("degree is not supported");
}
else{
    console.log(pow(a,b));
}

