let icon=document.querySelector(".fa-bars");
let list=document.querySelector(".list");

icon.addEventListener("click",()=>{
    list.classList.toggle("active");
});