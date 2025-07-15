function Email(event) {
  event.preventDefault(); // Empêche l'envoi classique

  // ➕ Vérification des champs obligatoires
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    Swal.fire({
      icon: 'warning',
      title: 'Champs manquants',
      text: 'Veuillez remplir tous les champs obligatoires.',
      confirmButtonText: 'OK',
      confirmButtonColor: '#2092b2'
    });
    return;
  }
  const loading = document.querySelector('.loading2');
  if (loading) loading.style.display = 'block';;

  const service_ID = "service_m4xn97r";
  const temp_ID = "template_hq0x3zt";

  emailjs.sendForm(service_ID, temp_ID, '#contactForm')
    .then((res) => {
      console.log(res);
      // Réinitialisation des champs
      document.getElementById("subject").value = "";
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";

      // ✅ Alerte de succès avec SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Message envoyé !',
        text: 'Votre message a bien été envoyé. Nous vous répondrons bientôt.',
        confirmButtonText: 'OK',
        confirmButtonColor: '#2092b2'
      });
    })
    .catch((err) => {
      console.log(err);
      if (loading) loading.style.display = 'none';

      // ❌ SweetAlert d'erreur
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: "Une erreur est survenue lors de l’envoi. Veuillez réessayer.",
        confirmButtonText: 'OK',
        confirmButtonColor: '#d33'
      });
    });

}
