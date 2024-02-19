//declare the variables
const darkButton = document.getElementById("darkmode");
const link1 = document.getElementById("navy1");
const link2 = document.getElementById("navy2");
const link3 = document.getElementById("navy3");
const link4 = document.getElementById("navy4");
const tot = document.getElementById("doc");
const a1 = document.getElementById("lk1");
const a2 = document.getElementById("lk2");
const a3 = document.getElementById("lk3");
const a4 = document.getElementById("lk4");
let option = 1;
//make dark function
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

    a1.style.color = "white";
    a2.style.color = "white";
    a3.style.color = "white";
    a4.style.color = "white";
}

//make light function

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

    a1.style.color = "black";
    a2.style.color = "black";
    a3.style.color = "black";
    a4.style.color = "black";
}
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

