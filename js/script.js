/* js for Hamburger Menu*/
const menuBtn = document.getElementById('menuBtn');
const navbar  = document.getElementById('navbar');
const overlay = document.getElementById('navOverlay');

if (menuBtn && navbar && overlay) {
    function openMenu() {
        menuBtn.classList.add('open');
        navbar.classList.add('open');
        menuBtn.setAttribute('aria-expanded', 'true');
        overlay.classList.add('show');
        // small delay so display:block renders before opacity transition
        requestAnimationFrame(() => overlay.classList.add('visible'));
        document.body.style.overflow = 'hidden';
    }
  }

    function closeMenu() {
        menuBtn.classList.remove('open');
        navbar.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        overlay.classList.remove('visible');
        overlay.addEventListener('transitionend', () => {
            overlay.classList.remove('show');
        }, { once: true });
        document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', () => {
        navbar.classList.contains('open') ? closeMenu() : openMenu();
    });

    // Close on overlay click
    overlay.addEventListener('click', closeMenu);

    // Close on nav link click
    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeMenu();
    });

    // Close if window resizes to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) closeMenu();
    });

/* Typing animation in homepage*/
const roles = ["Computer Science Undergraduate", "ICT Tutor", "Freelancer", "Problem Solver"];
let i = 0, charIndex = 0;
const el = document.querySelector('.role-text');

if (el) {
  function type() {
    if (charIndex < roles[i].length) {
      el.textContent += roles[i][charIndex++];
      setTimeout(type, 80);
    } else {
      setTimeout(erase, 1800);
    }
  }
  function erase() {
    if (charIndex > 0) {
      el.textContent = roles[i].slice(0, --charIndex);
      setTimeout(erase, 40);
    } else {
      i = (i + 1) % roles.length;
      setTimeout(type, 400);
    }
  }
  type();
}

/*Contact form functions*/
document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('.contact-form');

  if (!form) return;

  const btn = form.querySelector('.submit-btn');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value;
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      showToast('Please fill in all fields.', 'error');
      return;
     }

    btn.innerHTML = 'Sending...';
    btn.disabled = true;

    try {

      const res = await fetch(form.action, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: new FormData(form)
      });

      if (res.ok) {
        showToast("Message sent successfully!", 'success');
        form.reset();
      } else {
        showToast("Submission failed.", 'error');
      }

    } catch (err) {
      showToast("Network error.", 'error');
    }

    btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
    btn.disabled = false;
  });

  function showToast(msg, type) {

    const toast = document.createElement('div');

    toast.className = `toast toast-${type}`;
    toast.textContent = msg;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 4000);
  }

});

