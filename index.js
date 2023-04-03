document.addEventListener('DOMContentLoaded', function() {
      const form = document.querySelector('form[name="contact"]');
      
      form.addEventListener('submit', function (event) {
            event.preventDefault();

            const firstName = document.getElementById('Firstname').value;
            const lastName = document.getElementById('Lastname').value;
            const email = document.getElementById('Email').value;
            const phone = document.getElementById('Tel').value;
            const message = document.getElementById('Text').value;
            
            // Vérifier que tous les champs ont été remplis
            if (firstName === '' || lastName === '' || email === '' || phone === '' || message === '') {
                  alert('Please fill in all fields.');
                  return;
            }

  // Envoyer les données à l'API avec Axios
  axios.post('http://212.83.176.255:3030/contact', {
        firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    message: message
})
.then(function (response) {
      // Créer un élément DOM avec le message de confirmation
      const confirmationMessage = document.createElement('p');
      confirmationMessage.textContent = response.data.message;
      form.insertAdjacentElement('afterend', confirmationMessage);
})
.catch(function (error) {
    console.log(error);
});
});
});