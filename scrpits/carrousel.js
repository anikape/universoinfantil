const carousel = document.querySelector('.carousel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

// Função para avançar para o próximo conjunto de cards
function nextCards() {
    currentIndex = (currentIndex + 2) % 6;
    updateCarousel();
}

// Função para voltar ao conjunto de cards anterior
function prevCards() {
    currentIndex = (currentIndex - 2 + 6) % 6;
    updateCarousel();
}

// Atualiza a posição do carrossel
function updateCarousel() {
    const translateX = -currentIndex * 50;
    carousel.style.transform = `translateX(${translateX}%)`;
}

// Autoplay: Avança automaticamente a cada 3 segundos
setInterval(nextCards, 3000);

// Event listeners para as setas de navegação
prevButton.addEventListener('click', prevCards);
nextButton.addEventListener('click', nextCards);


// Seletor para a navbar
const navbar = document.querySelector('.navbar');

// Seletor para o carousel
const carouselContainer = document.querySelector('.carousel-container');

// Adiciona um ouvinte de evento de clique à navbar
navbar.addEventListener('click', () => {
  // Verifica se o carousel está visível
  if (carouselContainer.style.visibility === 'hidden') {
    // Se estiver oculto, torna-o visível novamente
    carouselContainer.style.visibility = 'visible';
  } else {
    // Se estiver visível, oculta o carousel
    carouselContainer.style.visibility = 'hidden';
  }
});
