document.addEventListener('DOMContentLoaded', function () {
  var popup = document.getElementById('popup');
  mostrarPopup(popup); // Mostra o pop-up quando a página é carregada
});

function mostrarPopup(popup) {
  popup.style.display = 'block';

  // Adiciona um event listener para fechar o pop-up ao clicar fora dele
  window.addEventListener('click', function(event) {
      if (event.target == popup) {
          fecharPopup(popup);
      }
  });

  // Adiciona um event listener ao botão de fechar (x)
  var closeButton = popup.querySelector('.close');
  closeButton.addEventListener('click', function() {
      fecharPopup(popup);
  });
}

function fecharPopup(popup) {
  popup.style.display = 'none';
}
