var finput =document.getElementById("first-input")
var linput =document.getElementById("last-input")
var submit =document.getElementById("submit")
var addinput= document.getElementById("address-text") 
var pininput = document.getElementById("input-pincode")
// var gendername = document.getElementsByName("gender")
var parotainput = document.getElementById(" input-Parota")
var stateinput = document.getElementById("input-state")
var countryinput = document.getElementById("input-country")



var count= 0
submit.addEventListener("click", (e)=>{
    e.preventDefault();
// addinput.value= `${finput.value} ${linput.value} ${pininput.value} ${linput.value} ${gendername.value} ${stateinput.value} ${countryinput.value}`

var ele = document.getElementsByName('food');
              
for(i = 0; i < ele.length; i++) {
    // console.log(ele[i].value)
    if(ele[i].checked){
        count++
    addinput.value= "food: "+ele[i].value;
    console.log(count)
}
    }
   
count=0
var tablebody = document.getElementById("table-body")
var asd = tablebody.insertRow(-1);

var dur =asd.insertCell(-1);
dur.innerText = finput.value
 var dar = asd.insertCell(-1);
dar.innerText = "sinput.value"


})
 var tablebody = documen t.getElementById("table-body")
 var asd = tablebody.insertRow(-1);

//  var dur =asd.insertCell(-1);
//  dur.innerText = finput.value
//   var dar = asd.insertCell(-1);
//  dar.innerText = "sinput.value"

//  var cell1 = newRow.insertCell(-1);
//  cell1.innerText = "finput";
//  var cell2 = newRow.insertCell(-1);
//  cell2.innerText = "sinput";


//      ${gendername.value}
