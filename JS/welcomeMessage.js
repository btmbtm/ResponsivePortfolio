var D = document;
var welcomeMessage = D.querySelector('.introBars__welcome');
console.log(welcomeMessage);
checkIfVisited();

function checkIfVisited(){
  var COOKIES = getCookieValues();
  if('visited' in COOKIES){
    welcomeMessage.textContent = "Welcome back!"
  } else {
    var yearFromNow = new Date();
    yearFromNow.setFullYear(yearFromNow.getFullYear() + 1)
    welcomeMessage.textContent = "Thanks for coming! Have a look around."
    document.cookie ="visited=true;expires="+yearFromNow.toUTCString();
  }
}

function getCookieValues(){
  var cs = document.cookie.split(';');
  var c_obj = {};
  cs.forEach(function(c){
    c = c.split("=");
    c_obj[c[0]] = c[1]; 
  });
  return c_obj;
}