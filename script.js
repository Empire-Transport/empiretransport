/* Tawk.to Live Chat Widget */
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/66698f979a809f19fb3cc438/1i065hq4m';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();

/* Email Form */
const form = document.querySelector("form");
const firstname = document.getElementById("firstname");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

/*function sendEmail(){
  const bodyMessage =  `Fullname: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br>`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username : "accounts@simsempiretransport.co.za",
    Password : "FA2D1CBC710005B35D7769107B4C2CEFD151",
    To : 'tickets@empire-transport.p.tawk.email',
    From : "accounts@simsempiretransport.co.za",
    Subject : "Website Query",
    Body : bodyMessage
  }).then(
    message => {
      if(message=='OK'){
        swal("Sent!", "Your details have been sent through to our team, we will be in contact.","success");
      }
      else{
        swal("Error", "Please try again!","error");
      }
    }
  );
}

Form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendMailer();
});*/

function sendEmail() {
  let firstname = document.getElementById("firstname").value;
  let surname = document.getElementById("surname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let tMessage = document.getElementById("tMessage").value;
  let bodyMessage = `First Name : ${firstname} <br> Surname : ${surname} <br> Email : ${email} <br>  Phone Number : ${phone} <br> Message : ${tMessage} <br>`;

  Email.send({
    SecureToken: "e87b82f0-ad52-47a1-8f18-07f9aded9315",
    To: 'accounts@simsempiretransport.co.za',
    From: "accounts@simsempiretransport.co.za",
    Subject: "Website Query - Contact Request",
    Body: bodyMessage
  }).then(
    message => {
      if(message=='OK'){
        Swal.fire({
          title: "Confirm your details for us.",
          text: `First Name : ${firstname}'         'Surname : ${surname}'         'Email : ${email}'         'Phone Number : ${phone}'         'Message : ${tMessage}`,
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#1a9414",
          cancelButtonColor: "#ff0000",
          confirmButtonText: "Yes, seat it!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Success!",
              text: "Your query has been seated! Our team will be in touch to collect fare asap!",
              icon: "success"
            });
          }
        }); 
      }
});
}



/* Swal.fire({
  title: "Success!",
  text: "Your query has been seated! Our team will be in touch to collect fare asap!",
  icon: "success"
}); 

 Connection Tester 
var img = new Image();
var ping = function() { img.src = "https://simsempiretransport.com/Assets/IMG-20211002-WA0000.jpg" }
ping();

img.onerror = function(e) {
  console.log('error');
  window.location.href = "offlinepage.html";
  setTimeout(function() {
    ping();
  }, 5000);
}

img.onload = function(e) {
  console.log('YES');
  clearTimeout;
}*/

/* FIREWORKS */


function playAnimation()
{
    document.getElementById('logo').src = "Assets/534320_791f5.gif";

}
function showStatic()
{
    document.getElementById('logo').src = "Assets/IMG-20211002-WA0000.jpg" ;
}