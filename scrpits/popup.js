document.addEventListener('DOMContentLoaded', function () {
  mostrarPopup();

  // Opcional: Se ainda quiser manter o registro de quando o popup foi mostrado, pode definir o cookie aqui
  Cookies.set('popupShown', 'true', { expires: 1 / 72 }); // Expira em 20 minutos (1/72 de um dia)
  Cookies.set('popupShownTimestamp', new Date().getTime());
});

function mostrarPopup() {
  // Coloque aqui o código para exibir o popup
  document.getElementById('popup').style.display = 'block';
}

function fecharPopup() {
  // Coloque aqui o código para fechar o popup
  document.getElementById('popup').style.display = 'none';
}

// Você pode comentar a função foiHoraPassada() já que não será usada durante os testes

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
