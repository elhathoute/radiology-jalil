function Email(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  document.querySelector('.loading').style.display = 'block';
  document.querySelector('.error-message').style.display = 'none';
  document.querySelector('.sent-message').style.display = 'none';

  const service_ID = "service_m4xn97r";
  const temp_ID = "template_hq0x3zt";

  emailjs.sendForm(service_ID, temp_ID, '#contactForm')
    .then((res) => {
      console.log(res);
      document.querySelector('.loading').style.display = 'none';
      document.querySelector('.sent-message').style.display = 'block';

      document.getElementById("subject").value = "";
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch((err) => {
      console.log(err);
      document.querySelector('.loading').style.display = 'none';
      const errorBox = document.querySelector('.error-message');
      errorBox.innerText = "Erreur lors de l'envoi : " + err.text;
      errorBox.style.display = 'block';
    });

  // return false; // Not necessary with event.preventDefault()
}
