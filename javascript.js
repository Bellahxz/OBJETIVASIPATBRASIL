// Efeito de redução no tamanho da navbar ao rolar a página
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});


// EFEITO CARROSSEL INFINITO

function initInfiniteCarousel(carouselSelector, btnLeftSelector, btnRightSelector) {
  const carousel = document.querySelector(carouselSelector);
  const btnLeft = document.querySelector(btnLeftSelector);
  const btnRight = document.querySelector(btnRightSelector);

  const originalCards = [...carousel.querySelectorAll('.card')];
  const cardWidth = originalCards[0].offsetWidth + 60;
  const totalOriginal = originalCards.length;

  const totalCopies = 21; 
  const middleIndex = Math.floor(totalOriginal * totalCopies / 2);

  carousel.innerHTML = '';

  const allCards = [];
  for (let i = 0; i < totalCopies; i++) {
    originalCards.forEach(card => {
      const clone = card.cloneNode(true);
      clone.classList.add('clone');
      carousel.appendChild(clone);
      allCards.push(clone);
    });
  }

  let currentIndex = middleIndex;
  carousel.scrollLeft = currentIndex * cardWidth;

  function scrollToIndex(index, smooth = true) {
    carousel.scrollTo({
      left: index * cardWidth,
      behavior: smooth ? 'smooth' : 'auto'
    });
  }

  function recentralizeIfNeeded() {
    const minSafe = totalOriginal * 4;
    const maxSafe = totalOriginal * (totalCopies - 4);

    if (currentIndex < minSafe || currentIndex > maxSafe) {
      currentIndex = middleIndex;
      scrollToIndex(currentIndex, false);
    }
  }

  let isScrolling = false;

  function scrollCarousel(direction) {
    if (isScrolling) return;
    isScrolling = true;

    currentIndex += direction;
    scrollToIndex(currentIndex);

    setTimeout(() => {
      recentralizeIfNeeded();
      isScrolling = false;
    }, 400); // mesmo tempo da animação
  }

  btnLeft.addEventListener("click", () => scrollCarousel(-1));
  btnRight.addEventListener("click", () => scrollCarousel(1));
}

window.addEventListener('load', () => {
  initInfiniteCarousel(".carousel", ".carousel-btn.left", ".carousel-btn.right");
  initInfiniteCarousel(".carousel-saude", "#palestras-saude .carousel-btn.left", "#palestras-saude .carousel-btn.right");
  initInfiniteCarousel(".carousel-comportamento", "#palestras-comportamento .carousel-btn.left", "#palestras-comportamento .carousel-btn.right");
});
