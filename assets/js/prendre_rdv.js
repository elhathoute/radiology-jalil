function envoyerRdv(event) {
  event.preventDefault(); // Empêche l'envoi classique du formulaire

  // Récupération des champs
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const date = document.getElementById('date').value.trim();
  const department = document.getElementById('department').value.trim();

  // Vérification des champs requis
  if (!name || !email || !phone || !date || !department) {
    Swal.fire({
      icon: 'warning',
      title: 'Champs manquants',
      text: 'Veuillez remplir tous les champs obligatoires.',
      confirmButtonText: 'OK',
      confirmButtonColor: '#2092b2'
    });
    return;
  }

  // Affichage du chargement
  const loading = document.querySelector('.loading');
  if (loading) loading.style.display = 'block';

  const service_ID = "service_m4xn97r";
  const template_ID = "template_qe0pgzq";

  emailjs.sendForm(service_ID, template_ID, '#formulaire-rdv')
    .then((res) => {
      console.log(res);
      if (loading) loading.style.display = 'none';
      document.getElementById("formulaire-rdv").reset();

      // ✅ SweetAlert de succès
      Swal.fire({
        icon: 'success',
        title: 'Message envoyé !',
        text: 'Votre demande de rendez-vous a bien été envoyée.',
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
