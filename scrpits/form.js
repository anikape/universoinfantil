document.addEventListener('DOMContentLoaded', function() {
  var contactForm = document.getElementById('contactForm');
  var successMessage = document.getElementById('successMessage');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Aqui você pode adicionar código para enviar o formulário via AJAX se preferir

    // Exibe a mensagem de sucesso
    successMessage.style.display = 'block';

    // Ou, se preferir, redefina o formulário após exibir a mensagem
    contactForm.reset();
  });
});