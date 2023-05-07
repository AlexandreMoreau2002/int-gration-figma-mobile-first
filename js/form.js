// test du fichier :
// console.log("hello")
document.addEventListener('DOMContentLoaded', function () {
      const form = document.querySelector('form[name="contact"]');

      form.addEventListener('submit', function (event) {
            event.preventDefault();

            const firstName = document.getElementById('Firstname').value;
            const lastName = document.getElementById('Lastname').value;
            const email = document.getElementById('Email').value;
            const phone = document.getElementById('Tel').value;
            const message = document.getElementById('Text').value;


            // const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
            // const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
            // const nameRegex = /^[a-zA-Z ]+$/;


            // Vérifier que tous les champs ont été remplis, et qu'ils sont bien aux normes d'un formulaire
            if (firstName === '' || lastName === '' || email === '' || phone === '' || message === '') {
                  alert('Merci de remplir tous les champs.');
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