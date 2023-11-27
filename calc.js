var result = document.getElementById('res');
function sum() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var ans = num1 + num2;
    if (result) {
        result.innerHTML = ans.toString();
    }
}
function sub() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var ans = num1 - num2;
    if (result) {
        result.innerHTML = ans.toString();
    }
}
function mul() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var ans = num1 * num2;
    if (result) {
        result.innerHTML = ans.toString();
    }
}
function div() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var ans = num1 / num2;
    if (result) {
        result.innerHTML = ans.toString();
    }
}
