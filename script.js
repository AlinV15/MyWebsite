//declarations for darkmode button
const darkButton = document.getElementById("darkmode");
const link1 = document.getElementById("navy1");
const link2 = document.getElementById("navy2");
const link3 = document.getElementById("navy3");
const link4 = document.getElementById("navy4");
const tot = document.getElementById("doc");
const opinions = document.getElementById("opinions");
const advice = document.getElementById("advice");  
const username = document.getElementById("username");
const submit = document.getElementById("submit");
const a1 = document.getElementById("lk1");
const a2 = document.getElementById("lk2");
const a3 = document.getElementById("lk3");
const a4 = document.getElementById("lk4");
const pr1 = document.getElementById("p1");
const pr2 = document.getElementById("p2");
const pr3 = document.getElementById("p3");
let option = 1;
//function for darkmode button making darkmode
const toDark = () => {
 darkButton.style.backgroundColor = "white";
 darkButton.style.color = "black";
 darkButton.style.boxShadow = "0.5rem 0.25rem 0.25rem #d1d1d1"
 darkButton.innerHTML = "Lightmode";

 tot.style.backgroundColor = "#24234d";
 tot.style.color = "white";

 link1.style.backgroundColor = "#37786a";

 link2.style.backgroundColor = "#37786a";

 link3.style.backgroundColor = "#37786a";

 link4.style.backgroundColor = "#37786a";

 advice.style.backgroundColor = "#4d4399";
 advice.style.color = "white";

 username.style.backgroundColor = "#4d4399";
 username.style.color = "white";

 submit.style.backgroundColor = "#4d4399";
 submit.style.color = "white";

 opinions.style.backgroundColor = "#4d4399";
 opinions.style.color = "white";

 a1.style.color = "white";
 a2.style.color = "white";
 a3.style.color = "white";
 a4.style.color = "white";

 pr1.style.backgroundColor = "#256e78";
 pr2.style.backgroundColor = "#256e78";
 pr3.style.backgroundColor = "#256e78";
};
//make toLight function

const toLight = () =>{
    darkButton.style.backgroundColor = "slategray";
    darkButton.style.color = "white";
    darkButton.style.boxShadow = "0.5rem 0.25rem 0.25rem darkslategray"
    darkButton.innerHTML = "Darkmode";
   
    tot.style.backgroundColor = "#00BFFF";
    tot.style.color = "black";
   
    link1.style.backgroundColor = "#70E6B3";
   
    link2.style.backgroundColor = "#70E6B3";
   
    link3.style.backgroundColor = "#70E6B3";
   
    link4.style.backgroundColor = "#70E6B3";
   
    advice.style.backgroundColor = "#5c95f7";
    advice.style.color = "black";
   
    username.style.backgroundColor = "#5c95f7";
    username.style.color = "black";
   
    submit.style.backgroundColor = "#5c95f7";
    submit.style.color = "black";
   
    opinions.style.backgroundColor = "#5c95f7";
    opinions.style.color = "black";
   
    a1.style.color = "black";
    a2.style.color = "black";
    a3.style.color = "black";
    a4.style.color = "black";
   
    pr1.style.backgroundColor = "#6AD2D1";
    pr2.style.backgroundColor = "#6AD2D1";
    pr3.style.backgroundColor = "#6AD2D1";
   
};
//make toggle function
const toggleDarkMode = () =>{
 if(option === 1)
 {
    toDark();
    option = 0;
 }
 else
 {
    toLight();
    option = 1;
 }
};
//running event
darkButton.onclick = toggleDarkMode;
 
//initialize variables
const photo = document.getElementById("myPhoto");
let photoAngle = 0;

//making the function
const rotateImage = () =>{
 if(photoAngle === 360)
 {
    photoAngle = 30;
    photo.style.transform = `rotate(${photoAngle}deg)`;
 }
 else{
    photoAngle += 30;
    photo.style.transform = `rotate(${photoAngle}deg)`;
 }
};
//making the event

photo.onclick = rotateImage;