const COUNTERS = document.querySelectorAll('.counter');

COUNTERS.forEach((counter) => {
 counter.innerHTML = '0';

 const updateCounter = () => {
  const target = +counter.getAttribute('data-target');
  let current = +counter.innerHTML;
  const incrementFraction = target / 400;
  if (current < target) {
   counter.innerHTML = `${Math.ceil(current + incrementFraction)}`;
   setTimeout(updateCounter, 1);
  }
 };

 updateCounter();
});
