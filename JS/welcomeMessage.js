var D = document;
var welcomeMessage = D.querySelector('.introBars__welcome')
checkIfVisited();

function checkIfVisited(){
  var COOKIES = getCookieValues();
  console.log(COOKIES['visited']);
  if('visited' in COOKIES){
  	welcomeMessage.textContent = "Welcome back!"
  } else {
  	welcomeMessage.textContent = "Thanks for coming! Have a look around."
  	document.cookie ="visited=true";
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