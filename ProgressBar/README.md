# progress bar

## ๐จ Retrospective

### โ๏ธ ๋ณด์ฌ์ง๋ ์ปจํ์ธ ์ ์์น๊ฐ ์ ์ฒด ์ปจํ์ธ ์์ ์ด๋ ์์น์ ์๋์ง ํ์ธํ  ์ ์๋ ๋ฐฉ๋ฒ

์ ์ฒด ๊ธธ์ด์์ ํ๋ฉด์ ๋ณด์ด๋ ์ปจํ์ธ ๊ฐ ์ด๋์ฏค์ ์๋์ง ์ด๋ป๊ฒ ๊ณ์ฐํด์ผํ ๊น?

https://ko.javascript.info/size-and-scroll

์๋ฐ์คํฌ๋ฆฝํธ๋ก ์์ ์ฌ์ด์ฆ๋ ์คํฌ๋กค ๋์ด ๋ฑ์ ์ ์ ์๋ค.

์ปจํ์ธ ์ ์์ง ์์น: scrollTop

```jsx
document.documentElement.scrollTop;
```

scrollTop์ ์ ํํ ์์์ ์์ง ์์น๋ฅผ ์ ์ ์๋ค. ๊ธฐ์ค์ด ๋๋ ์์๊ฐ document์ด๊ธฐ ๋๋ฌธ์ scrollTop ๋ฟ๋ง ์๋๋ผ `window.scrollY`๋ฅผ ์ฌ์ฉํ  ์ ์๋ค.

์ปจํ์ธ ๋ฅผ ์ ์ธํ ๋์ด ๊ตฌํ๊ธฐ

: ์ ์ฒด๊ธธ์ด์์ ์ปจํ์ธ ์ ๋์ด๋ฅผ ๋นผ๋ฉด ๋๋ค.

```jsx
const heigth =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
```

์ ์ฒด ์์๋ฅผ ๊ธฐ์ค์ผ๋ก ์คํฌ๋กค์ ์์น ๋น์จ ๊ตฌํ๊ธฐ

```jsx
$progressBar.style.width = Math.floor((scrollTop / height) * 100) + '%';
```
