function Email() {
    // Affiche "Chargement..."
    document.querySelector('.loading').style.display = 'block';
    document.querySelector('.error-message').style.display = 'none';
    document.querySelector('.sent-message').style.display = 'none';
  
    let emailsParms = {
      subject: document.getElementById("subject").value,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const service_ID = "service_m4xn97r";
    const temp_ID = "template_hq0x3zt";
  
    emailjs
      .send(service_ID, temp_ID, emailsParms)
      .then((res) => {
        console.log(res);
  
        // Cache "Chargement..." et affiche "Sent"
        document.querySelector('.loading').style.display = 'none';
        document.querySelector('.sent-message').style.display = 'block';
  
        // Vide le formulaire
        document.getElementById("subject").value = "";
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      })
      .catch((err) => {
        console.log(err);
  
        // Cache "Chargement..." et affiche l'erreur
        document.querySelector('.loading').style.display = 'none';
        const errorBox = document.querySelector('.error-message');
        errorBox.innerText = "Erreur lors de l'envoi : " + err;
        errorBox.style.display = 'block';
      });
  }
  