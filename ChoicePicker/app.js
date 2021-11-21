const tagsEl = document.getElementById('tags');

const textArea = document.getElementById('textarea');

textArea.focus();

const createTags = (value) => {
 const tags = value
  .split(',')
  .filter((tag) => tag.trim() != '')
  .map((tag) => tag.trim());

 tagsEl.innerHTML = '';
 tagsEl.classList.add('tags');

 tags.forEach((tag) => {
  const tagEl = document.createElement('span');
  tagEl.classList.add('tag');
  tagEl.innerText = tag;
  tagsEl.appendChild(tagEl);
 });
};

const pikRandomTag = () => {
 const tags = document.querySelectorAll('.tag');
 return tags[Math.floor(Math.random() * tags.length)];
};

const highliteTag = (tag) => {
 tag.classList.add('highlited');
};
const unHighliteTag = (tag) => {
 tag.classList.remove('highlited');
};

const randomSelect = () => {
 const time = 30;
 const interval = setInterval(() => {
  const randomTag = pikRandomTag();
  highliteTag(randomTag);
  setTimeout(() => {
   unHighliteTag(randomTag);
  }, 100);
 }, 100);

 setTimeout(() => {
  clearInterval(interval);
  setTimeout(() => {
   const randomTag = pikRandomTag();
   highliteTag(randomTag);
  }, 100);
 }, time * 100);
};

textArea.addEventListener('keyup', (e) => {
 createTags(e.target.value);
 if (e.key === 'Enter') {
  setTimeout(() => {
   e.target.value = '';
  }, 10);
  randomSelect();
 }
});
