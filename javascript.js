

const cards = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");
const leftArrow = document.querySelector(".nav-arrow.left");
const rightArrow = document.querySelector(".nav-arrow.right");
let currentIndex = 0;
let isAnimating = false;

function updateCarousel(newIndex) {
	if (isAnimating) return;
	isAnimating = true;

	currentIndex = (newIndex + cards.length) % cards.length;

	cards.forEach((card, i) => {
		const offset = (i - currentIndex + cards.length) % cards.length;

		card.classList.remove(
			"center",
			"left-1",
			"left-2",
			"right-1",
			"right-2",
			"hidden"
		);

		if (offset === 0) {
			card.classList.add("center");
		} else if (offset === 1) {
			card.classList.add("right-1");
		} else if (offset === 2) {
			card.classList.add("right-2");
		} else if (offset === cards.length - 1) {
			card.classList.add("left-1");
		} else if (offset === cards.length - 2) {
			card.classList.add("left-2");
		} else {
			card.classList.add("hidden");
		}
	});

	dots.forEach((dot, i) => {
		dot.classList.toggle("active", i === currentIndex);
	});



	setTimeout(() => {
		isAnimating = false;
	}, 800);
}

leftArrow.addEventListener("click", () => {
	updateCarousel(currentIndex - 1);
});

rightArrow.addEventListener("click", () => {
	updateCarousel(currentIndex + 1);
});

dots.forEach((dot, i) => {
	dot.addEventListener("click", () => {
		updateCarousel(i);
	});
});

cards.forEach((card, i) => {
	card.addEventListener("click", () => {
		updateCarousel(i);
	});
});

document.addEventListener("keydown", (e) => {
	if (e.key === "ArrowLeft") {
		updateCarousel(currentIndex - 1);
	} else if (e.key === "ArrowRight") {
		updateCarousel(currentIndex + 1);
	}
});

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
	touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
	touchEndX = e.changedTouches[0].screenX;
	handleSwipe();
});

function handleSwipe() {
	const swipeThreshold = 50;
	const diff = touchStartX - touchEndX;

	if (Math.abs(diff) > swipeThreshold) {
		if (diff > 0) {
			updateCarousel(currentIndex + 1);
		} else {
			updateCarousel(currentIndex - 1);
		}
	}
}

updateCarousel(0);







//SAUDE CARROSEL
document.addEventListener('DOMContentLoaded', () => {
  let indexSaude = 0;
  const cardsSaude = document.querySelectorAll('.card-saude');
  const totalCardsSaude = cardsSaude.length;

  const updateCarouselSaude = () => {
    cardsSaude.forEach((card, i) => {
      card.classList.remove('center', 'left-1', 'right-1', 'left-2', 'right-2', 'hidden');
      const offset = (i - indexSaude + totalCardsSaude) % totalCardsSaude;
      if (offset === 0) card.classList.add('center');
      else if (offset === totalCardsSaude - 1) card.classList.add('left-1');
      else if (offset === 1) card.classList.add('right-1');
      else if (offset === totalCardsSaude - 2) card.classList.add('left-2');
      else if (offset === 2) card.classList.add('right-2');
      else card.classList.add('hidden');      
    });
  };

  document.querySelector('.left-saude').addEventListener('click', () => {
    indexSaude = (indexSaude - 1 + totalCardsSaude) % totalCardsSaude;
    updateCarouselSaude();
  });

  document.querySelector('.right-saude').addEventListener('click', () => {
    indexSaude = (indexSaude + 1) % totalCardsSaude;
    updateCarouselSaude();
  });

  updateCarouselSaude();
});


//OUTRA FODENDO CARROSSEL MEIO AMBIENTE
document.addEventListener('DOMContentLoaded', () => {
  let indexComportamento = 0;
  const cardsComportamento = document.querySelectorAll('.card-comportamento');
  const totalCardsComportamento = cardsComportamento.length;

  const updateCarouselComportamento = () => {
    cardsComportamento.forEach((card, i) => {
      card.classList.remove('center', 'left-1', 'right-1', 'left-2', 'right-2', 'hidden');
      const offset = (i - indexComportamento + totalCardsComportamento) % totalCardsComportamento;
      if (offset === 0) card.classList.add('center');
      else if (offset === totalCardsComportamento - 1) card.classList.add('left-1');
      else if (offset === 1) card.classList.add('right-1');
      else if (offset === totalCardsComportamento - 2) card.classList.add('left-2');
      else if (offset === 2) card.classList.add('right-2');
      else card.classList.add('hidden');
    });
  };

  document.querySelector('.left-comportamento').addEventListener('click', () => {
    indexComportamento = (indexComportamento - 1 + totalCardsComportamento) % totalCardsComportamento;
    updateCarouselComportamento();
  });

  document.querySelector('.right-comportamento').addEventListener('click', () => {
    indexComportamento = (indexComportamento + 1) % totalCardsComportamento;
    updateCarouselComportamento();
  });

  updateCarouselComportamento();
});



//ATIVIDADES EU QUERO ME MATAR

document.addEventListener('DOMContentLoaded', () => {
  let indexAtividades = 0;
  const cardsAtividades = document.querySelectorAll('.card-atividades');
  const totalCardsAtividades = cardsAtividades.length;

  const updateCarouselAtividades = () => {
    cardsAtividades.forEach((card, i) => {
      card.classList.remove('center', 'left-1', 'right-1', 'left-2', 'right-2', 'hidden');
      const offset = (i - indexAtividades + totalCardsAtividades) % totalCardsAtividades;
      if (offset === 0) card.classList.add('center');
      else if (offset === totalCardsAtividades - 1) card.classList.add('left-1');
      else if (offset === 1) card.classList.add('right-1');
      else if (offset === totalCardsAtividades - 2) card.classList.add('left-2');
      else if (offset === 2) card.classList.add('right-2');
      else card.classList.add('hidden');
    });
  };

  document.querySelector('.left-atividades').addEventListener('click', () => {
    indexAtividades = (indexAtividades - 1 + totalCardsAtividades) % totalCardsAtividades;
    updateCarouselAtividades();
  });

  document.querySelector('.right-atividades').addEventListener('click', () => {
    indexAtividades = (indexAtividades + 1) % totalCardsAtividades;
    updateCarouselAtividades();
  });

  updateCarouselAtividades();
});
