function button1() {
    document.getElementById("quotes").style.backgroundColor = "#6699ff";
    document.getElementById("text").style.color = "white";
    document.getElementById("author").style.color = "white";
    document.getElementById("quotes").style.borderColor = "#262626";
}
function button2() {
    document.getElementById("quotes").style.backgroundColor = "#ff6666";
    document.getElementById("text").style.color = "white";
    document.getElementById("author").style.color = "white";
    document.getElementById("quotes").style.borderColor = "#262626";
}
function button3() {
    document.getElementById("quotes").style.backgroundColor = "#67e4a6";
    document.getElementById("text").style.color = "black";
    document.getElementById("author").style.color = "black";
    document.getElementById("quotes").style.borderColor = "black";
}
function button4() {
    document.getElementById("quotes").style.backgroundColor = "#e467a6";
    document.getElementById("text").style.color = "black";
    document.getElementById("author").style.color = "black";
    document.getElementById("quotes").style.borderColor = "black";
}

var quotes = ["Great actions are not always true sons of great and mighty resolutions.", "Happy is the bride that the sun shines on.", "It is possible to have too much of a good thing.", "Lightning never strikes the same place twice."];
var author = ["Samuel Butler (1612-1680)", "Robert Herrick (1591-1674)", "Aesop (c.620-560 BC)", "P. H. Myers (1857)"];


fetchQuote(quotes, author);

function fetchQuote(q, a) {
    var quoteNum = Math.floor(Math.random() * quotes.length);
    document.getElementById("text").innerHTML = '" ' + q[quoteNum] + ' "';
    document.getElementById("author").innerHTML = "- " + a[quoteNum];
}

function getInputValue() {
    var inputVal = document.getElementById("converter-input").value;
    var optionVal = document.getElementById("conversion-unit").value;
    var result = 0;
    if (optionVal.match("lbkg")) {
        result = (inputVal * 0.45359);
        document.getElementById("converter-result").innerHTML = result + " KG";
    }
    else {
        result = (inputVal * 2.20462);
        document.getElementById("converter-result").innerHTML = result + " LB";
    }
}
var inputNumbersArr;
function addNumbers() {
    var inputNumbers = document.getElementById("math-input-numbers").value;
    inputNumbersArr = inputNumbers.split(',');
    findMax();
    findMin();
    findSum();
    findReverse();
}

function findMax() {
    var result = Math.max.apply(null, inputNumbersArr);
    document.getElementById("max").innerHTML = result;
}
function findMin() {
    var result = Math.min.apply(null, inputNumbersArr);
    document.getElementById("min").innerHTML = result;
}
function findSum() {
    var sum = 0;
    for (var i = 0; i < inputNumbersArr.length; i++) {
        sum += parseFloat(inputNumbersArr[i]);
    }
    document.getElementById("sum").innerHTML = sum;
    var avg = sum / inputNumbersArr.length;
    document.getElementById("avg").innerHTML = avg;
}

function findReverse() {
    inputNumbersArr.reverse();
    document.getElementById("reverse").innerHTML = inputNumbersArr;
}


