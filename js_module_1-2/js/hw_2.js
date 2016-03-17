var arr = [];

for (var i = 0; i < 5; i++) {
   arr.push(prompt("Enter name:"))
}

var name = prompt("Enter your name:");
var success = false;

for (i = 0; i < 5; i++){
    if (arr[i] == name) {
        success = true;
        
    }
}
if (success)
    alert(name + ", you have successfully logged");
else
    alert("ERROR");

