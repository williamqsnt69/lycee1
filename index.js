var menuafter = document.querySelector(".menu-after");

window.addEventListener("scroll", () => {
    console.log(scrollY)
    if(window.scrollY > 846){
        menuafter.classList.add("changebackground");
    } 
    
    if(window.scrollY < 846){
        menuafter.classList.remove("changebackground");
    }
})

var title = document.querySelector(".title")

window.addEventListener("scroll",()=> {
    if(window.scrollY > 950){
        title.classList.add("title-opacity");
    }
    if(window.scrollY<950){
        title.classList.remove("title-opacity");
    }
})


var avisiter = document.querySelector(".avisiter");

window.addEventListener("scroll", ()=> {
    if(window.scrollY > 2150){
        avisiter.classList.add("avisiter-opacity");
    }
    if(window.scrollY< 2150){
        avisiter.classList.remove("avisiter-opacity");
    }
})