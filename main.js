// Custom select helpers
function initCustomSelect(wrapperId, hiddenInputId, callback) {
    const wrapper = document.getElementById(wrapperId);
    if (!wrapper) return;
    const btn = wrapper.querySelector('.custom-select-btn');
    const list = wrapper.querySelector('.custom-select-list');
    if (!btn || !list) return;

    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = list.classList.contains('open');
        closeAllCustomSelects();
        if (!isOpen) {
            list.classList.add('open');
            btn.classList.add('open');
        }
    });

    list.addEventListener('click', function (e) {
        const li = e.target.closest('li');
        if (!li) return;
        const value = 'value' in li.dataset ? li.dataset.value : li.textContent.trim();
        const label = btn.querySelector('.custom-select-label');
        if (label) label.textContent = li.textContent.trim();
        btn.classList.toggle('has-value', value !== '');
        list.querySelectorAll('li').forEach(el => el.classList.remove('selected'));
        li.classList.add('selected');
        const hidden = document.getElementById(hiddenInputId);
        if (hidden) hidden.value = value;
        closeAllCustomSelects();
        if (callback) callback(value);
    });
}

function resetCustomSelect(wrapperId, defaultLabel) {
    const wrapper = document.getElementById(wrapperId);
    if (!wrapper) return;
    const btn = wrapper.querySelector('.custom-select-btn');
    const list = wrapper.querySelector('.custom-select-list');
    if (btn) {
        const label = btn.querySelector('.custom-select-label');
        if (label) label.textContent = defaultLabel || 'Select...';
        btn.classList.remove('has-value', 'open');
    }
    if (list) {
        list.querySelectorAll('li').forEach(el => el.classList.remove('selected'));
        list.classList.remove('open');
    }
}

function closeAllCustomSelects() {
    document.querySelectorAll('.custom-select-btn.open').forEach(b => b.classList.remove('open'));
    document.querySelectorAll('.custom-select-list.open').forEach(l => l.classList.remove('open'));
}

document.addEventListener('click', closeAllCustomSelects);

// Newsletter
function newsletter(e) {
    e.preventDefault();
    const input = e.target.querySelector('input[type="email"]');
    const email = input.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return;
    }
    const emails = JSON.parse(localStorage.getItem('newsletters') || '[]');
    if (!emails.includes(email)) emails.push(email);
    localStorage.setItem('newsletters', JSON.stringify(emails));
    const msg = document.getElementById('newsletterMsg');
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