// Newsletter
function newsletter(e) {
    e.preventDefault();
    const input = e.target.querySelector('input[type="email"]');
    const email = input.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showNotity ('Please enter a valid email address.', 'error');
        return;
    }
    const emails = JSON.parse(localStorage.getItem('newsletters') || '[]');
    if (!emails.includes(email)) emails.push(email);
    localStorage.setItem('newsletters', JSON.stringify(emails));
    const msg = document.getElementById('newsletterMsg');
    if (msg) msg.textContent = '🎉 You\'re subscribed!';
    input.value = '';
}

function navigateTo(page) {
  window.location.href = page + '.html';
}

document.querySelectorAll('.nav-link, .nav-link-mobile').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const page = a.dataset.page || a.getAttribute('href');
    if (!page) return;
    if (a.classList.contains('nav-link-mobile')) closeMobileMenu();
    window.location.href = page;
  })
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

function closeMobileMenu() {
  if (!hamburger || !mobileMenu) return;
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
  })
}