var retrievePromise = d3.json("employee.json");
var successFCN = function(employee) {
    console.log("data", employee);
}


var failFCN = function(errMessage) {
    console.log("failure", errMessage);
}
retrievePromise.then(successFCN, failFCN);
d3.select("body")
.selectAll("tr")
    .data()
    .enter()
    .append("tr");
    
