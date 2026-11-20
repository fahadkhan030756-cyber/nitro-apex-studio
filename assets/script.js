(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    }));
  }

  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      // IMPORTANT: Replace this address with the studio's real monitored email.
      const recipient = 'info@nitroapexstudio.site';
      const data = new FormData(form);
      const subject = encodeURIComponent(`[Nitro Apex Studio] ${data.get('subject')}`);
      const body = encodeURIComponent(
        `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
      );
      const status = document.getElementById('form-status');
      status.textContent = 'Your email application should open with your message prepared. Please review and send it there.';
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
  }
})();