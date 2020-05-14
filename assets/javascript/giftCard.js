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
 let buyConf = document.getElementById("buyButton");
 
 buyConf.onclick = () => {
    document.getElementById("confirm").innerHTML= "Gift card is purchased. Thank you!";
 }
 