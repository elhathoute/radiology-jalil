function toggleInput() {
    var inputContainer = document.getElementById('whatsapp-input-container');
    inputContainer.style.display = (inputContainer.style.display === 'block') ? 'none' : 'block';
  }

  function sendMessage() {
    var message = document.getElementById('whatsapp-input').value;
    if (message.trim()) {
      var phoneNumber = '+212658331678'; // The phone number to send the message to
      var url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank'); // Open WhatsApp chat with the message
      document.getElementById('whatsapp-input').value = ''; // Clear the input field
      toggleInput(); // Hide the input field again
    } else {
      alert("Veuillez entrer un message.");
    }
}
