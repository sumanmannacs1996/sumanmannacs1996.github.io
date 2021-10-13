const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle) => {
 console.dir(toggle.parentNode.classList);
 toggle.addEventListener('click', () =>
  toggle.parentNode.classList.toggle('active'),
 );
});
