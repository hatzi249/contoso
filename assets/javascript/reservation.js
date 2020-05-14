/*HamburgerNav*/
function myFunction() {
   var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
     x.className += " responsive";
   } else {
     x.className = "topnav";
   }
 }

/*Booking confirmation*/
let buyConf = document.getElementById("myButton");

buyConf.onclick = () => {
   document.getElementById("confirm").innerHTML= "Your reservation is registered. Thank you!";
}
