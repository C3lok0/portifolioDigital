document.getElementById("githubBtn").addEventListener("click", function () {
  window.location.href = "https://github.com/C3lok0";
});

document.getElementById("linkedinBtn").addEventListener("click", function () {
  window.location.href = "https://www.linkedin.com/in/marcelo-antonio-rodrigues-junior-642315306";
});

document.getElementById("promoin").addEventListener("click", function () {
  window.location.href = "promoin.html";
});



// Carousel control for tecnologias
document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.carousel-track');
  if (!track) return;
  const items = Array.from(track.children);
  const btnNext = document.querySelector('.carousel-btn.next');
  const btnPrev = document.querySelector('.carousel-btn.prev');
  let index = 0;

  function itemWidth() {
    const style = getComputedStyle(items[0]);
    const gap = parseFloat(getComputedStyle(track).gap) || 12;
    return items[0].getBoundingClientRect().width + gap;
  }

  function update() {
    const w = itemWidth();
    track.style.transform = `translateX(${ -index * w }px)`;
  }

  btnNext && btnNext.addEventListener('click', function () {
    index = (index + 1) % items.length;
    update();
    resetAuto();
  });

  btnPrev && btnPrev.addEventListener('click', function () {
    index = (index - 1 + items.length) % items.length;
    update();
    resetAuto();
  });

  let auto = setInterval(function () {
    index = (index + 1) % items.length;
    update();
  }, 3000);

  function resetAuto() {
    clearInterval(auto);
    auto = setInterval(function () {
      index = (index + 1) % items.length;
      update();
    }, 3000);
  }

  // pause on hover
  const carousel = document.getElementById('techCarousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', () => clearInterval(auto));
    carousel.addEventListener('mouseleave', () => resetAuto());
  }

  // initial layout
  window.setTimeout(update, 50);
  window.addEventListener('resize', update);

});



