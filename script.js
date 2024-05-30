function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

/* prep for email form 
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accounts@simsempiretransport.co.za",
    Password : "FA2D1CBC710005B35D7769107B4C2CEFD151",
    To : 'accounts@simsempiretransport.co.za',
    From : "accounts@simsempiretransport.co.za",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);*/