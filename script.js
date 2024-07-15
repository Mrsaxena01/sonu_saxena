let menu = document.querySelector("#menu");
let slider = document.querySelector(".slider");
let cross = document.querySelector("#cross");

menu.addEventListener("click", ()=>{
    slider.classList.toggle("view");
    slider.style.display = 'flex';
});

cross.addEventListener("click", ()=>{
    slider.classList.toggle("view");
    slider.style.display = 'none';
});

let sliderA = document.querySelectorAll(".slider .navbar2 a");
sliderA.forEach((el)=>{
    el.addEventListener("click", ()=>{
        slider.classList.toggle("view");
        slider.style.display = 'none';
    } );
});

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".header nav a");

window.onscroll = ()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height  ){
            navLinks.forEach(links =>{
                links.classList.remove("active");
                document.querySelector('.header nav a[href *= ' + id + ']').classList.add("active");
            });
        };
    });
};
