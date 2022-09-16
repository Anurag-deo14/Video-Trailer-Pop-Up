const btnE1 = document.querySelector(".bId");
const closeIconE1 = document.querySelector(".close-icon");
const spnE1 = document.querySelector(".watchnow");
const trailerContainerE1 = document.querySelector(".trailercontainer");
const mainContainerE1 = document.querySelector(".maincontainer");
const videoE1 = document.querySelector("video");

btnE1.addEventListener("click", ()=>{
    trailerContainerE1.classList.remove("active");
});

btnE1.addEventListener("click",()=>{
    mainContainerE1.classList.add("active2");
});
btnE1.addEventListener("click",()=>{
    mainContainerE1.classList.add("activmain");
});
closeIconE1.addEventListener("click",()=>{
    trailerContainerE1.classList.add("active");
    mainContainerE1.classList.remove("active1");
    mainContainerE1.classList.remove("active2");
    videoE1.pause();
    videoE1.currentTime = 0;
});
const btnE2 = document.querySelector(".bId")

btnE1.addEventListener("mouseover",(event)=>{
      const x = (event.pageX-btnE1.offsetLeft);
      const y = (event.pageY-btnE1.offsetTop);

      btnE1.style.setProperty("--xPos", x + "px")
      btnE1.style.setProperty("--yPos", y + "px")
});
