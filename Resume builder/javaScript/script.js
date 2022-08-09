
//working on add button=================================

function addWork()
{
let newNode = document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("workfield");
newNode.setAttribute("rows",3);
newNode.setAttribute("cols",5);

newNode.setAttribute("placeholder", "Enter Another Work Experience")


let weObj = document.getElementById("we");
 let workAddbutObj = document.getElementById("workAddbut");

 weObj.insertBefore(newNode, workAddbut);

}

//generating CV=================================================

function generateCV()

{
    console.log("generating resume");

    document.getElementById("nameT").innerHTML =document.getElementById("name").value;
    
    document.getElementById("emailT").innerHTML =document.getElementById("email").value;
    document.getElementById("dobT").innerHTML =document.getElementById("DOB").value;
    document.getElementById("addressT").innerHTML =document.getElementById("Address").value;

    document.getElementById("nameT2").innerHTML = document.getElementById("name").value;
    // document.getElementById("workT").innerHTML = document.getElementById("work").value;
    document.getElementById("qualT").innerHTML = document.getElementById("qualification").value;
    document.getElementById("skT").innerHTML = document.getElementById("Skills").value;
    document.getElementById("achieveT").innerHTML = document.getElementById("achievements").value;



let wes = document.getElementsByClassName("workfield"); //it has array of objects
let str = " ";    //string to store <li> 

for(let e of wes)
{
    str = str + `<li> ${e.value} </li>`;
}

document.getElementById("workT").innerHTML = str;

//reading file or image======================

let file = getElementById("imgField").files[0];
console.log(file);
let reader = new FileReader();
reader.readAsDataURL(file);
console.log(reader.result);


//setting image to template
reader.onloadend = function()
{
document.getElementById("imgT").src = reader.result;
};
 
}

//print cv

function printCV()
{
    window.print();
}