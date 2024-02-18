//declarations for darkmode button
let darkButton = document.getElementById("darkmode");
let total = document.html;
let links = document.html.header.nav.ul.li;
let opinions = document.getElementById("opinions");
let advice = document.getElementById("advice");
let username = document.getElementById("username");
let submit = document.getElementById("submit");

//function for darkmode button making darkmode
function toDark() {
 darkButton.style.backgroundColor = "white";
 darkButton.style.color = "black";
 darkButton.style.boxShadow = "0.5rem 0.25rem 0.25rem #d1d1d1"
 darkButton.innerHTML = "Lightmode";

 total.style.backgroundColor = "#24234d";
 total.style.color = "white";

 links.style.backgroundColor = "#37786a";

 advice.style.backgroundColor = "#4d4399";
 advice.style.color = "white";

 username.style.backgroundColor = "#4d4399";
 username.style.color = "white";

 submit.style.backgroundColor = "#4d4399";
 submit.style.color = "white";

 opinions.style.backgroundColor = "#4d4399";
 opinions.style.color = "white";
};
//make the event
darkButton.addEventListener("click", toDark());

darkButton.addEventListener("click", function(){
 document.style.backgroundColor = "black";
 document.style.color = "white";
});