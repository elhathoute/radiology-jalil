function toggleInput() {
  var inputContainer = document.getElementById('whatsapp-input-container');
  inputContainer.style.display = (inputContainer.style.display === 'block') ? 'none' : 'block';
}

function sendMessage() {
  var message = document.getElementById('whatsapp-input').value;
  if (message.trim()) {
    // ✅ Ne mets PAS de + dans le numéro !
    var phoneNumber = '212666856545';
    var url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    document.getElementById('whatsapp-input').value = '';
    toggleInput();
  } else {
    Swal.fire({
      icon: 'warning',
      title: 'Champ vide',
      text: 'Veuillez entrer un message.',
      confirmButtonText: 'OK',
      confirmButtonColor: '#2092b2'
    });
  }
}
