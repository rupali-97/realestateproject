// ==================== HERO SLIDER ====================
let currentSlide = 0;
let slideInterval;
const slides = document.querySelectorAll("#heroSlider .slide");
const dots = document.querySelectorAll(".slider-dot");

function goToSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? "1" : "0";
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-gold", i === index);
    dot.classList.toggle("bg-white/30", i !== index);
    dot.classList.toggle("w-8", i === index);
    dot.classList.toggle("w-3", i !== index);
  });
  currentSlide = index;
}

function nextSlide() {
  goToSlide((currentSlide + 1) % slides.length);
}

function startSlider() {
  slideInterval = setInterval(nextSlide, 5000);
}

function stopSlider() {
  clearInterval(slideInterval);
}

// Initialize slider
if (slides.length > 0) {
  goToSlide(0);
  startSlider();

  // Dot click handlers
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      stopSlider();
      goToSlide(parseInt(dot.dataset.slide));
      startSlider();
    });
  });

  // Prev/Next arrow handlers
  const prevBtn = document.querySelector(".slider-prev");
  const nextBtn = document.querySelector(".slider-next");

  function goPrevSlide() {
    stopSlider();
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
    startSlider();
  }

  function goNextSlide() {
    stopSlider();
    goToSlide((currentSlide + 1) % slides.length);
    startSlider();
  }

  if (prevBtn) prevBtn.addEventListener("click", goPrevSlide);
  if (nextBtn) nextBtn.addEventListener("click", goNextSlide);

  // Pause on hover
  const heroSection = document.getElementById("home");
  if (heroSection) {
    heroSection.addEventListener("mouseenter", stopSlider);
    heroSection.addEventListener("mouseleave", startSlider);
  }
}

// ==================== COUNTER ANIMATION ====================
function animateCounters() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const target = parseInt(counter.dataset.target);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target + "+";
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current);
      }
    }, 16);
  });
}

// Trigger counters when hero section is visible
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
        counterObserver.disconnect();
      }
    });
  },
  { threshold: 0.5 },
);

const heroStats = document.querySelector("#home .grid");
if (heroStats) {
  counterObserver.observe(heroStats);
}
