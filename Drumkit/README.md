# Drumkit

## ๐จ Retrospective

### ๐ JavaScript๋ก ๋์  ์์ฑํ์ ๋ querySelector๋ก Node๋ฅผ ์ฐธ์กฐํ๋ คํ  ๋ null ๊ฐ์ ๋ฐํํ๋ค.

```jsx
window.addEventListener('DOMContentLoaded', () => {
  render(drumSounds);
});
```

render ํจ์๋ DomString์ ๋ฐํํ๋ค.

```jsx
const render = (drumSounds) => {
  //prettier-ignore
  $keys.innerHTML =  `
    ${drumSounds.map(({keyboard, key, sound}) =>`
     <div class="key" data-key="${key}">
        <div class="label">
            <kbd>${keyboard}</kbd>
            <p class="sound">${sound.replace(/.wav/g, '')}</p>
        </div>
        <audio data-key="${key}" src="${soundsRoot}${sound}"></audio>
     </div>`).join('')}`
};
```

์ด ๋ console.log(document.querySelector('.key')) ์ ํ์ธํด๋ณด๋ฉด null ๊ฐ์ด ๋์ค๋ ๊ฒ์ ํ์ธํ  ์ ์๋ค.

๋น๋๊ธฐ ํ๋ก๊ทธ๋๋ฐ์ ๊ฐ๋์ ํ์คํ ์์์ผํ๋ค. render ํจ์๋ DOMContentLoaded ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ๋ฉด ๊ทธ ๋ ์ฝ๋ฐฑํจ์๋ก ์คํ๋๋ค. ๋ง์ฝ console.log๊ฐ ํธ์ถ๋๊ธฐ ์ง์ ์ DOMContentLoaded์ด๋ฒคํธ๊ฐ ๋ฐ์ํ๋๋ผ๋ ์ด๋ฒคํธ ํธ๋ค๋ฌ๋ ๊ฒฐ์ฝ console.log๋ณด๋ค ๋จผ์  ์คํ๋์ง ์๋๋ค.

๊ทธ๋ ๊ธฐ ๋๋ฌธ์ ๋์ ์ผ๋ก ์์ฑ๋ `<div class="key">`์ ์ด๋ฒคํธ๋ฅผ ๋ฑ๋กํ๋ ค๋ฉด document์ ์ด๋ฒคํธ๋ฅผ ๋ฑ๋กํ๊ณ  e.target์ด key ํด๋์ค๋ฅผ ๊ฐ์ง๊ณ  ์๋์ง ํ์ธ ํ ์ด๋ฒคํธ๋ฅผ ์ถ๊ฐํด์ผ ํ๋ค.

์ด๋ฒ ์ค์ต ํ๋ก์ ํธ์์๋ ์ฐธ์กฐํด์ผํ  ์ฝ๋๊ฐ ํ๋๋ฐ์ ๋์ง ์๊ธฐ ๋๋ฌธ์ index.html์ ๋ฏธ๋ฆฌ ์์ฑ์ ํ๊ณ  ์์ ๋ธ๋๋ง ๋์ ์์ฑํ๋ค.
