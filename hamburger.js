// Menu on Mobile //
// function menuToggle(){//
  //  const menu = document.querySelector(".menu-links");//
  //  const menuToggle = document.querySelector('.toggle')//
 //   menuToggle.addEventListener('click', () =>{//
 //       menuToggle.classList.toggle('active'),//
 //       menu.classList.toggle("open")//
 //   })//
 //  ;//
//
// Menu on Mobile //
const menuToggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu-links');

// Add the event listener once
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('open');
});