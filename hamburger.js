// Menu on Mobile //
function menuToggle(){
    const menu = document.querySelector(".menu-links");
    const menuToggle = document.querySelector('.toggle')
    menuToggle.addEventListener('click', () =>{
        menuToggle.classList.toggle('active'),
        menu.classList.toggle("open")
    })
   ;
}