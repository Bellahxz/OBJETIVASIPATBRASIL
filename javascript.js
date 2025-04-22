// Efeito de redução no tamanho da navbar ao rolar a página
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});

function initInfiniteCarousel(carousel, btnLeft, btnRight) {
  const originalCards = [...carousel.querySelectorAll('.card')];
  const gap = parseInt(getComputedStyle(carousel).gap) || 20;
  const cardWidth = originalCards[0].offsetWidth + gap;
  const totalOriginal = originalCards.length;

  const totalCopies = 21;
  const middleIndex = Math.floor(totalOriginal * totalCopies / 2);

  const originalContent = carousel.innerHTML; // salva o conteúdo original
  carousel.innerHTML = ''; // limpa

  for (let i = 0; i < totalCopies; i++) {
    originalCards.forEach(card => {
      const clone = card.cloneNode(true);
      clone.classList.add('clone');
      carousel.appendChild(clone);
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
    const minSafe = totalOriginal * 3;
    const maxSafe = totalOriginal * (totalCopies - 3);

    if (currentIndex < minSafe || currentIndex > maxSafe) {
      currentIndex = middleIndex;
      scrollToIndex(currentIndex, false);
    }
  }

  btnLeft.addEventListener('click', () => {
    currentIndex--;
    scrollToIndex(currentIndex);
    recentralizeIfNeeded();
  });

  btnRight.addEventListener('click', () => {
    currentIndex++;
    scrollToIndex(currentIndex);
    recentralizeIfNeeded();
  });
}

window.addEventListener('load', () => {
  const carousels = document.querySelectorAll('.carousel-container');

  // Segurança
  initInfiniteCarousel(
    carousels[0].querySelector('.carousel'),
    carousels[0].querySelector('.carousel-btn.left'),
    carousels[0].querySelector('.carousel-btn.right')
  );

  // Saúde
  initInfiniteCarousel(
    carousels[1].querySelector('.carousel'),
    carousels[1].querySelector('.carousel-btn.left'),
    carousels[1].querySelector('.carousel-btn.right')
  );

  // Comportamento
  initInfiniteCarousel(
    carousels[2].querySelector('.carousel'),
    carousels[2].querySelector('.carousel-btn.left'),
    carousels[2].querySelector('.carousel-btn.right')
  );
});


// efeito do rodape
window.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer');
  const onda = document.querySelector('.onda-svg-footer');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        footer.classList.add('aparecer');
        if (onda) onda.classList.add('aparecer');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05
  });

  if (footer) {
    observer.observe(footer);
  }
});


  //celular menu

  function showSidebar(event) {
    event.preventDefault(); 
    const celulas = document.querySelector(".celulas");
    celulas.classList.add("show-sidebar");
}
function hideSidebar(event) {
  event.preventDefault();
  const celulas = document.querySelector(".celulas");
  celulas.classList.remove("show-sidebar");
}