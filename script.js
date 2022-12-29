var finput =document.getElementById("first-input")
var linput =document.getElementById("last-input")
var submit =document.getElementById("submit")

submit.addEventListener("click", ()=>{
    finput.value = linput.value
})
var tfirst =document.getElementById("table-First")
 tfirst.addEventListener("click", ()=>{
    tfirst.value = "dndnd"
 })


//  var table = document.getElementById("table")
//  var t = table.insertRow(-1);
//  var ta=t.insertCell(0)
//  t.innerText="kjj

var tableBody = document.querySelector("#table");
     var newRow= tableBody.insertRow(-1);
   
    var cell1 = newRow.insertCell(0);
    cell1.innerText = "a";
    var newRow= tableBody.insertRow(-1);
   
    var cell1 = newRow.insertCell(0);
    cell1.innerText = "a";


//  var tableBody = document.querySelector("#table-body");
//      var newRow= tableBody.insertRow(n);
   
//     var cell1 = newRow.insertCell(n);
//     cell1.innerText = list1[x];