document.addEventListener('DOMContentLoaded', function () {
  // Verifica se o cookie 'popupShown' está definido e se já passou 1 hora desde a última visita
  if (!Cookies.get('popupShown') || (Cookies.get('popupShown') && foiHoraPassada())) {
    // Se não estiver definido ou se já passou 1 hora, exibe o popup
    mostrarPopup();

    // Define o cookie 'popupShown' com um valor qualquer e uma nova expiração
    Cookies.set('popupShown', 'true', { expires: 1 / 24 }); // Expira em 1 hora (1/24 de um dia)
  } else {
    // Se o cookie já estiver definido e não passou 1 hora, você pode fazer alguma outra ação se necessário
    console.log('Popup já foi mostrado recentemente.');
  }
});

function mostrarPopup() {
  // Coloque aqui o código para exibir o popup
  document.getElementById('popup').style.display = 'block';
}

function fecharPopup() {
  // Coloque aqui o código para fechar o popup
  document.getElementById('popup').style.display = 'none';
}

function foiHoraPassada() {
  // Verifica se passou 1 hora desde a última visita
  var ultimaVisita = Cookies.get('popupShownTimestamp');
  if (!ultimaVisita) {
    return true; // Se não houver registro anterior, considera que já passou 1 hora
  }

  var agora = new Date().getTime();
  var diferenca = agora - ultimaVisita;
  return diferenca >= 3600000; // 1 hora em milissegundos
}

// Registra o timestamp da última visita antes de recarregar a página
window.addEventListener('beforeunload', function () {
  Cookies.set('popupShownTimestamp', new Date().getTime());
});