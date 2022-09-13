    
    let firstEl=document.getElementById("first")
    let secondEl=document.getElementById("second")
    
 
let hasclick=false

function special(){
    hasclick=true
let leters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
        firstEl.textContent=0
   secondEl.textContent=0
for (let i=0; i<14;i++){
 
    let randem=Math.floor(Math.random()*leters.length)
    let rand=Math.floor(Math.random()*leters.length)
    let bir=leters[rand]
    let ash=leters[randem]
 secondEl.textContent +=ash
    firstEl.textContent +=bir

}
}

    function getRandom(){
       
   let all =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
   "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
        "/"];
        firstEl.textContent=0
   secondEl.textContent=0
    
    // let han=Math.floor(Math.random()*all.length)
   console.log(firstEl)

for (let i=0; i<14;i++){

       let randem=Math.floor(Math.random()*all.length)
        let rand=Math.floor(Math.random()*all.length)
        let bir=all[rand]
        let ash=all[randem]
     secondEl.textContent +=ash
        firstEl.textContent +=bir}
    
   
}

    