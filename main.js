// Toast notification
function showNotify(msg, type) {
    const existing = document.getElementById('_toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.id = '_toast';
    toast.textContent = msg;
    const bg = type === 'error' ? 'var(--danger)' : 'var(--success)';
    toast.style.cssText = `position:fixed;bottom:24px;left:50%;transform:translateX(-50%);
        background:${bg};color:#fff;padding:12px 22px;border-radius:10px;
        font-size:14px;font-weight:600;z-index:9999;
        box-shadow:0 4px 20px rgba(0,0,0,0.2);white-space:nowrap;pointer-events:none;`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// Newsletter
function newsletter(e) {
    e.preventDefault();
    const input = e.target.querySelector('input[type="email"]');
    const email = input.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showNotify('Please enter a valid email address.', 'error');
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