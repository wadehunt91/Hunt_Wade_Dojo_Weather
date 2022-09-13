var message = document.querySelector(".cookie")
function deleteMessage(){
   message.remove()
}
function alertOne(){
   alert("Loading weather report. . . ")
}
var TempType ="°C"
function conversion(elem){
   var a = Number(document.querySelector("#nine").innerHTML)
   var b = Number(document.querySelector("#ten").innerHTML)
   var c = Number(document.querySelector("#three").innerHTML)
   var d = Number(document.querySelector("#four").innerHTML)
   var e = Number(document.querySelector("#five").innerHTML)
   var f = Number(document.querySelector("#six").innerHTML)
   var g = Number(document.querySelector("#seven").innerHTML)
   var h = Number(document.querySelector("#eight").innerHTML)  
   if( elem.value !== TempType)
      {
      a = (a * (9/5) + 32)
      document.querySelector("#nine").innerHTML = Math.round(a)
      b = (b * (9/5) + 32)
      document.querySelector("#ten").innerHTML = Math.round(b) 
      c = (c * (9/5) + 32)
      document.querySelector("#three").innerHTML = Math.round(c) 
      d = (d * (9/5) + 32)
      document.querySelector("#four").innerHTML = Math.round(d) 
      e = (e * (9/5) + 32)
      document.querySelector("#five").innerHTML = Math.round(e) 
      f = (f * (9/5) + 32)
      document.querySelector("#six").innerHTML = Math.round(f) 
      g = (g * (9/5) + 32)
      document.querySelector("#seven").innerHTML = Math.round(g) 
      h = (h * (9/5) + 32)
      document.querySelector("#eight").innerHTML = Math.round(h) 
   }
   else {
      a = 5/9*(a-32)
      document.querySelector("#nine").innerHTML = Math.round(a)
      b = 5/9*(b-32)
      document.querySelector("#ten").innerHTML = Math.round(b) 
      c = 5/9*(c-32)
      document.querySelector("#three").innerHTML = Math.round(c) 
      d = 5/9*(d-32)
      document.querySelector("#four").innerHTML = Math.round(d) 
      e = 5/9*(e-32)
      document.querySelector("#five").innerHTML = Math.round(e) 
      f = 5/9*(f-32)
      document.querySelector("#six").innerHTML = Math.round(f) 
      g = 5/9*(g-32)
      document.querySelector("#seven").innerHTML = Math.round(g) 
      h = 5/9*(h-32)
      document.querySelector("#eight").innerHTML = Math.round(h) 
   }
}