const $content = document.querySelector('.content');
const $progressBar = document.querySelector('.progress-bar');
const $current = document.querySelector('.current');

const IMG_COUNT = 12;

window.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < IMG_COUNT; i += 1) {
    $content.innerHTML += `
     <img  src="https://blog.kakaocdn.net/dn/b8Clpq/btqJZndo4FQ/JjNGwDsc11g3CNIBfZiaU0/img.jpg" alt="image" />
    `;
  }
});

window.addEventListener(
  'scroll',
  _.throttle(() => {
    const scrollTop = window.scrollY;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollWidth = Math.floor((scrollTop / height) * 100);

    $progressBar.style.width = scrollWidth + '%';
    $current.textContent = `${scrollWidth}%`;
  }, 200)
);
