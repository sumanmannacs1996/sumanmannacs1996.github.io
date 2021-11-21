const SMALL_CUPS = document.querySelectorAll('.cup-small');
const PERCENTAGE = document.getElementById('percentage');
const REMAINED = document.getElementById('remained');
const LITERS = document.getElementById('liters');
const updateBigCup = () => {
 const totalSmallCups = SMALL_CUPS.length;
 const fullCupsCount = document.querySelectorAll('.cup-small.full').length;
 if (fullCupsCount === 0) {
  PERCENTAGE.style.visibility = 'hidden';
  PERCENTAGE.style.height = 0;
 } else {
  PERCENTAGE.style.visibility = 'visible';
  PERCENTAGE.style.height = `${(fullCupsCount / totalSmallCups) * 250}px`;
  PERCENTAGE.innerHTML = `${(fullCupsCount / totalSmallCups) * 100}%`;
 }
 if (fullCupsCount === totalSmallCups) {
  REMAINED.style.visibility = 'hidden';
  REMAINED.style.height = 0;
  document.querySelector('h3').style.color = '#144fc6';
 } else {
  REMAINED.style.visibility = 'visible';
  LITERS.innerText = `${2 - (250 * fullCupsCount) / 1000}L`;
  document.querySelector('h3').style.color = 'white';
 }
};

updateBigCup();

const heighlitedCup = (clickId) => {
 if (
  SMALL_CUPS[clickId].classList.contains('full') &&
  !SMALL_CUPS[clickId].nextElementSibling.classList.contains('full')
 ) {
  clickId--;
 }
 SMALL_CUPS.forEach((cup, idx2) => {
  if (idx2 <= clickId) {
   cup.classList.add('full');
  } else {
   cup.classList.remove('full');
  }
 });

 updateBigCup();
};

SMALL_CUPS.forEach((cup, idx) => {
 cup.addEventListener('click', () => heighlitedCup(idx));
});

const nameDecode = (str) => {
 const strArr = str.split('');
 const percentIndexAll = [];
 const percentIndex = [];
 strArr.forEach((p, idx) => (p === '%' ? percentIndexAll.push(idx) : null));
 //console.log(percentIndexAll);

 percentIndexAll.forEach((idx) => {
  try {
   decodeURIComponent(str.substring(idx, idx + 3));
  } catch (e) {
   percentIndex.push(idx);
  }
 });
 percentIndex.forEach((idx) => {
  strArr.splice(idx, 1, '%25');
 });
 return strArr.join('');
};

nameDecode('sfaf%26%bdfb%26fbhf%%265');
