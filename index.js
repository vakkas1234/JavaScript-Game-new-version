let score = 0
var p1 = document.getElementById("1")
var h1 = document.getElementById("3")
var p2 = document.getElementById("4")
var button2 = document.getElementById("5")
var a1 = document.getElementById("a1")
var a2 = document.getElementById("a2")
a1.style.visibility = "hidden"
a2.style.visibility = "hidden"



const arewidth = 500
const areheight  = 500
const buttonwidth = 50
const buttonheight = 50
var button1 = document.getElementById("button1")
function click1(){
h1.style.visibility = "hidden"
p2.style.visibility = "hidden"
    score++
    p1.innerHTML = "Score " + score
    var x = Math.floor(Math.random() * (arewidth  - buttonwidth))
    var y = Math.floor(Math.random() * (areheight  -buttonheight ))
    button1.style.left = x  + "px"
    button1.style.top = y + "px"
   

}
button2.style.visibility = "visible"
function click2(){
    
    window.close()
}
