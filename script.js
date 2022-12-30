var finput =document.getElementById("first-name")
finput.setAttribute("required","")
var linput =document.getElementById("last-input")
var addinput= document.getElementById("address-text") 
var pininput = document.getElementById("input-pincode")
var gendername = document.getElementsByName("gender")
var parotainput = document.getElementById(" input-Parota")
var stateinput = document.getElementById("input-state")
var countryinput = document.getElementById("input-country")
// console.log(gendername)
var submit =document.getElementById("submit")


submit.addEventListener("click", (e)=>{
    e.preventDefault();
// for gender radio boxes
var gendername = document.getElementsByName('gender');    
for(i=0; i<gendername.length; i++) 
{
    if(gendername[i].checked == true){
      var genderin = gendername[i].value;
    }
}      
// ----------------------------------------------------
// for food items    
var food = document.getElementsByName("food")
var count= 0
var array =[]
for(i=0; i<food.length; i++){
    if(food[i].checked == true){
        count++
         array.push(food[i].value)

    }    
}

console.log(array)
if(count==2)
{


var tablebody = document.getElementById("table-body")
var newrow = tablebody.insertRow(-1);

var cell1 =newrow.insertCell(-1);
cell1.innerText = finput.value

 var cell2 = newrow.insertCell(-1);
cell2.innerText = linput.value

var cell3 = newrow.insertCell(-1);
cell3.innerText = addinput.value

var cell4 = newrow.insertCell(-1);
cell4.innerText = pininput.value

var cell5 = newrow.insertCell(-1);
cell5.innerText = genderin

var cell6 = newrow.insertCell(-1);
cell6.innerText = array

var cell7 = newrow.insertCell(-1);
cell7.innerText = stateinput.value

var cell8 = newrow.insertCell(-1);
cell8.innerText = countryinput.value

function reset() {
    console.log("reset")
    finput.value = ''
    linput.value = ''
    addinput.value = ''
    pininput.value = ''
    for(i=0; i<gendername.length; i++) {

    if(gendername[i].checked == true){
        gendername[i].checked = false
    }
   }
   for(i=0; i<gendername.length; i++) {

    if(gendername[i].checked == true){
        gendername[i].checked = false
    }
   }
   for(i=0; i<food.length; i++) {

    if(food[i].checked == true){
        food[i].checked = false
    }
   }
 
    stateinput.value = ''
    countryinput.value = ""
}
reset()
}
else{
    alert("Please select only 2 food item")
}
})

