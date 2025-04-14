// Efeito de redução no tamanho da navbar ao rolar a página
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});
function scrollCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const scrollAmount = 380; // largura do card + gap
  carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}
function scrollCarouselSaude(direction) {
  const carousel = document.querySelector('.carousel-saude');
  const cardWidth = carousel.querySelector('.card').offsetWidth + 32; // margem
  carousel.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
}

function scrollCarouselComportamento(direction) {
  const carousel = document.querySelector('.carousel-comportamento');
  const cardWidth = carousel.querySelector('.card').offsetWidth + 32; // margem
  carousel.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
}

