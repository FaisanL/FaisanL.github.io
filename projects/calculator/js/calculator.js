var operetora;
var operatorb;
var operator;

function init() {
    var result = document.getElementById('result');
    var clear = document.getElementById('clear');
    var plus = document.getElementById('plus');
    var minus = document.getElementById('minus');
    var multiply = document.getElementById('multiply');
    var division = document.getElementById('division');
    var equals = document.getElementById('equals');
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');
    var four = document.getElementById('four');
    var five = document.getElementById('five');
    var six = document.getElementById('six');
    var seven = document.getElementById('seven');
    var eight = document.getElementById('eight');
    var nine = document.getElementById('nine');
    var zero = document.getElementById('zero');

    one.onclick = function () {
        result.textContent = result.textContent + "1";
    };
    two.onclick = function () {
        result.textContent = result.textContent + "2";
    };
    three.onclick = function () {
        result.textContent = result.textContent + "3";
    };
    four.onclick = function () {
        result.textContent = result.textContent + "4";
    };
    five.onclick = function () {
        result.textContent = result.textContent + "5";
    };
    six.onclick = function () {
        result.textContent = result.textContent + "6";
    };
    seven.onclick = function () {
        result.textContent = result.textContent + "7";
    };
    eight.onclick = function () {
        result.textContent = result.textContent + "8";
    };
    nine.onclick = function () {
        result.textContent = result.textContent + "9";
    };
    zero.onclick = function () {
        result.textContent = result.textContent + "0";
    };

    clear.onclick = function () {
        reset();
    };
    plus.onclick = function () {
        operetora = result.textContent;
        operator = "+";
        clean();
    };
    minus.onclick = function () {
        operetora = result.textContent;
        operator = "-";
        clean();
    };
    multiply.onclick = function () {
        operetora = result.textContent;
        operator = "*";
        clean();
    };
    division.onclick = function () {
        operetora = result.textContent;
        operator = "/";
        clean();
    };

    equals.onclick = function () {
        operatorb = result.textContent;
        solve();
    };
}

function clean() {
    result.textContent = "";
}

function reset() {
    result.textContent = "";
    operetora = 0;
    operatorb = 0;
    operator = "";
}

function solve() {
    var res = 0;
    switch (operator) {
        case "+":
            res = parseFloat(operetora) + parseFloat(operatorb);
            break;
        case "-":
            res = parseFloat(operetora) - parseFloat(operatorb);
            break;
        case "*":
            res = parseFloat(operetora) * parseFloat(operatorb);
            break;
        case "/":
            res = parseFloat(operetora) / parseFloat(operatorb);
            break;
    }
    if (isNaN(res)) {
        res = 'Syntax Error';
    }
    reset();
    result.textContent = res;
}

init();
