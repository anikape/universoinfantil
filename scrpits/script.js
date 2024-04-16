document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("audio");
    const playPauseBtn = document.getElementById("playPauseBtn");

    playPauseBtn.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.innerHTML = "Pause";
            playPauseBtn.classList.remove("play");
            playPauseBtn.classList.add("pause");
        } else {
            audio.pause();
            playPauseBtn.innerHTML = "Play";
            playPauseBtn.classList.remove("pause");
            playPauseBtn.classList.add("play");
        }
    });
});

// Obtém a data atual
const currentDate = new Date();

// Obtém o ano atual
const currentYear = currentDate.getFullYear();

// Atualiza o elemento HTML com a data atual
document.getElementById('copyright').textContent = `TODOS OS DIREITOS RESERVADOS DESENVOLVIDO POR CODECRAFTHOUSE | © ${currentYear}`;


// Mostra o botão quando o usuário rolar a página
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("goTopBtn").style.display = "block";
  } else {
    document.getElementById("goTopBtn").style.display = "none";
  }
}

// Função para levar o usuário de volta ao topo da página
function topFunction() {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para outros navegadores
}

