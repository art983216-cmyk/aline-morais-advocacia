const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

if(menuButton){

    menuButton.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

}