
let results = [];

function main(){
    div = document.createElement('div') ;
    body = document.getElementById("body") ;
    body.appendChild(div) ;
    
    let cont = true;
    
    let resultsTable = document.createElement('div')
    div.appendChild(resultsTable)
    
    while (cont == true) {
        let operand1 ;
        let operand2 ;
        let operator ;
        operand1 = prompt("Value of x", "")
        if (operand1 == null){
            cont = false;
            break;
        }
        operator = prompt("operator")
        if (operator == null){
            cont = false;
            break;
        }
        operand2 = prompt("Value of y")
        if (operand1 == null){
            cont = false;
            break;
        }
        if (confirm("Continue?"))
            cont = true
        else
            cont = false
        compute(operand1, operator,operand2, resultsTable)
    }
    totRslts = []
    for (const val of results) {
        if (isNaN(val[3])) {}
            // do nothing
        else
            totRslts.push(+val[3])
    }
    
    minRslts = Math.min(...totRslts)
    maxRslts = Math.max(...totRslts)
    sumRslts = 0
    for (const val of totRslts) {
        sumRslts += val
    }
    avgRslts = sumRslts/(totRslts.length)
    
    finalTable = document.createElement('div')
    div.appendChild(finalTable)
    
    finalTable.innerHTML = `<table><tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr><tr><td>${minRslts}</td><td>${maxRslts}</td><td>${+avgRslts.toFixed(2)}</td><td>${sumRslts}</td></tr></table>`
    
}


function compute(operand1, operator, operand2, resultsTable){
    var result

    if (isNaN(operand1) || isNaN(operand2)) {
        result = "wrong input\nnumber"
    }
    else if (operator !== "+" && operator !== "-" && operator !== "%" && operator !== "/" && operator !== "*") {
        result = "computation\nerror"
    }
    else {
        result = eval(operand1 + operator + operand2)
    }

    buildTable(operand1, operator, operand2, result, resultsTable)
}

function buildTable(operand1, operand, operand2, result, resultsTable) {
    let newVal = [operand1, operand, operand2, result]
    results.push(newVal)
    var newTable = "<table>\n<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>\n"
    for (const value of results) {
        newTable = newTable + `<tr><td>${value[0]}</td><td style="background-color: #f6dcac">${value[1]}</td><td>${value[2]}</td><td>${value[3]}</td></tr>\n`
    }
    newTable = newTable + "</table>"
    resultsTable.innerHTML = newTable
}

main() ;