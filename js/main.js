// Hero slider
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');

function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}
function changeSlide(dir) { goToSlide(currentSlide + dir); }
setInterval(() => changeSlide(1), 5000);

// Nav toggle mobile
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('navMenu');
if (toggle) toggle.addEventListener('click', () => menu.classList.toggle('open'));

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.style.background = window.scrollY > 50 ? 'rgba(0,0,0,0.98)' : 'rgba(0,0,0,0.92)';
});

// Active nav link
const links = document.querySelectorAll('.nav-link');
links.forEach(l => {
  if (l.href === window.location.href) l.classList.add('active');
});

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    this.closest('.filter-bar').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const filter = this.dataset.filter;
    document.querySelectorAll('.product-card').forEach(card => {
      if (filter === 'todos' || card.dataset.cat === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
