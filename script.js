const hamburger=document.querySelector(".hamburger");
const navbar=document.querySelector(".navbar");
const myName="THIS IS RISHI KESH SHARMA";
hamburger.addEventListener('click',()=>{
   navbar.classList.toggle("show");
   hamburger.classList.toggle("show");
   console.log(hamburger.classList);
})
console.log(hamburger.classList);
const homeContentHeading=document.querySelector(".home-content h1");
console.log(homeContentHeading);
const nameLetters=myName.split(""); 
nameLetters.forEach((nameLetter)=>{
     
    nameLetterSpan=document.createElement("span");
    nameLetterSpan.innerHTML=nameLetter ;
    homeContentHeading.appendChild(nameLetterSpan);
 
}) 
const wheelContents=document.querySelectorAll(".wheel p");
console.log(wheelContents);
setInterval(()=>{
    var randomNumber=Math.random()*500;
    wheelContents.forEach((wheelContent)=>{
    
        var top=wheelContent.getBoundingClientRect().top;
         if(top<randomNumber&&top>randomNumber-100)
{
  wheelContent.style.fontSize="4em";
}   
else{
    wheelContent.style.fontSize="2em";
}
 })
},1000)
