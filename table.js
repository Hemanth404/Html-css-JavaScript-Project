let divi = document.createElement("div")
console.log(divi)
document.body.append(divi)
// divi.style.border ="1px solid black"
divi.style.height = "600px"

divi.style.position="absolute";
divi.style.top="100px";
divi.style.top = "40px";
divi.style.left = "0";
divi.style.width = "100%";
divi.setAttribute("id","#di");

divi.style.display="none";
divi.style.backgroundColor="burlywood"

let flag = "none";
let flag1 ='block';
let sec= document.querySelector("#sec");

function hi(){
divi.style.display="block";
sec.style.display="none";
}

function hi1(){
divi.style.display="none";
sec.style.display="block";

}
// divi.style.display ="none";
let heading = document.createElement("h1")

heading.textContent = "Result table"

heading.style.textAlign ="center"
// heading.style.border = "1px solid black"

heading.style.paddingBottom ="30px"

let s = document.createElement("div");

s.style.border="1px solid black";

s.setAttribute("id","non");

divi.append(s);

s.appendChild(heading);

let tab = document.createElement("table")
console.log(tab)
s.appendChild(tab)
tab.style.transform="translateX(-130px)"
tab.style.border ="1px solid black"
// tab.style.border-collapse ="collapse"

let tabh = document.createElement("thead")
console.log(tabh)
tab.appendChild(tabh)

let tabhr = document.createElement("tr")
console.log(tabhr)
tabh.appendChild(tabhr)

let th1 = document.createElement("th")
console.log(th1)
tabhr.appendChild(th1)
th1.textContent ="SNO"
th1.style.border ="1px solid black"
th1.style.margin ="0px"

let th2 = document.createElement("th")
console.log(th2)
tabhr.appendChild(th2)
th2.textContent ="BIKE NAME"
th2.style.border ="1px solid black"
th2.style.margin ="0px"

let th3 = document.createElement("th")
console.log(th3)
tabhr.appendChild(th3)
th3.textContent ="BIKE ID"
th3.style.border ="1px solid black"
th3.style.margin ="0px"

let th4 = document.createElement("th")
console.log(th4)
let n = tabhr.appendChild(th4)
console.log(n)
n.textContent ="CHECK IN"
n.style.border ="1px solid black"

let th5 = document.createElement("th")
console.log(th5)
let n1 = tabhr.appendChild(th5)
console.log(n)
n1.textContent ="CHECK OUT"
n1.style.border ="1px solid black"

let tbdy = document.createElement("tbody")
console.log(tbdy)
tab.appendChild(tbdy)

// var num = Number(prompt("enter the number of list :"));

var sub = document.getElementById("bt")

var num = 1;
sub.addEventListener( "click",()=>{
    
    let data = document.getElementById("bkin")
    let data1 = document.getElementById("idin")
    let data2 = document.getElementById("chk")
    let data3 = document.getElementById("chkot")

    if(data.value!="" && data1.value!="" && data2.value!="" && data3.value!="" ){
    for(i = 1 ; i<= 1 ; i++){

        let tabbr = document.createElement("tr")
        tbdy.appendChild(tabbr)
         for(j =1; j<=5 ; j++){
            let tabbd = document.createElement("td")
            tabbr.appendChild(tabbd)
        
            if(j==1){
                tabbd.textContent = num
            }
            else if(j==2){
                let data = document.getElementById("bkin")
                tabbd.textContent = data.value
            }
            else if(j==3){
                let data = document.getElementById("idin")
                tabbd.textContent = data.value
            }
            else if(j==4){
                let data = document.getElementById("chk")
                tabbd.textContent = data.value
            }
            else {
                let data = document.getElementById("chkot")
                tabbd.textContent = data.value
            }
        }
    }
    clearInput();
 }
   
},false)

console.log(tab);


tab.style.position="relative";
tab.style.left ="400px"
tab.style.top ="-30px"

function clearInput(){
    
    document.getElementById("bkin").value ="";
    document.getElementById("idin").value ="";
    document.getElementById("chk").value ="";
    document.getElementById("chkot").value ="";
    num++
}
 
