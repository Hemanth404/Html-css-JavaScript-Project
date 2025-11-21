let add = document.getElementById("add")

add.addEventListener("click",()=>{
    let num1 = document.getElementById("num1")
    console.log(num1.value)

    let num2 = document.getElementById("num2")
    console.log(num2.value)

    let addition = Number(num1.value) + Number(num2.value)

    let h1= document.getElementById("dis1")

    h1.textContent = `Addition of two no : ${addition}`
   
    // if(num1.value != "")

    
        document.getElementById("display").style.display ="block"
    
    // document.getElementById("dis1").style.display="block"

    // function show1(){
    //     document.getElementById("dis").classList.add("show")
    // }
    

},false,5000)

let sub = document.getElementById("sub")

sub.addEventListener("click",()=>{
    let num1 = document.getElementById("num1")
    console.log(num1.value)

    let num2 = document.getElementById("num2")
    console.log(num2.value)

    let subtraction = Number(num1.value) - Number(num2.value)

    let h2= document.getElementById("dis2")

    h2.textContent = `Subtraction  of two no : ${subtraction }`

    
     
       let dis=  document.getElementById("display")
        
       dis.style.display ="block"
    

    
},false)

let div1 = document.getElementById("div1")

div1.addEventListener("click",()=>{
    let num1 = document.getElementById("num1")
    console.log(num1.value)

    let num2 = document.getElementById("num2")
    console.log(num2.value)

    let division = Number(num1.value) / Number(num2.value)

    let h3= document.getElementById("dis3")

    h3.textContent = `Division of two no : ${division}`

    document.getElementById("display").style.display ="block"//black div
    
        document.getElementById("display").style.display ="block"
    
    

    
},false)


