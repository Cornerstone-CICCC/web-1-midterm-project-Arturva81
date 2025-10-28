
const dropdown = document.querySelector('.dropdown');
const openBtn = document.querySelector('.hamburg');
const closeBtn = document.querySelector('.cancel');

function openMenu() {
  if (!dropdown) return;
  dropdown.classList.add('open');
  document.body.classList.add('menu-open');
  openBtn?.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  if (!dropdown) return;
  dropdown.classList.remove('open');
  document.body.classList.remove('menu-open');
  openBtn?.setAttribute('aria-expanded', 'false');
}

openBtn?.addEventListener('click', openMenu);
closeBtn?.addEventListener('click', closeMenu);

dropdown?.addEventListener('click', (e) => {
  if (e.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeMenu();
});