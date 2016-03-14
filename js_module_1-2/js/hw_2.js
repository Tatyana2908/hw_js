var arr = [];
    for (var i = 0; i < 5; i++){
    arr.push(prompt("Enter name:"))
    }

    var name = prompt("Enter your name:");

for (i = 0; i < 5; i++){
    if (arr[i] == name) {
        alert(name+", you have successfully logged");
        return0;
    }
}
alert("ERROR");



