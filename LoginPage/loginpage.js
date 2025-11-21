let btn = document.getElementById("signup")
btn.addEventListener("click", ()=>{
document.getElementById("signsec").style.display="flex";
document.getElementById("logsec").style.display="none";
})


let btn1 = document.getElementById("login")
btn1.addEventListener("click", ()=>{
document.getElementById("logsec").style.display="flex";
document.getElementById("signsec").style.display="none";
})
