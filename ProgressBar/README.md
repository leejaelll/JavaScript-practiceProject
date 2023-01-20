# progress bar

## 🔨 Retrospective

### ✏️ 보여지는 컨텐츠의 위치가 전체 컨테츠에서 어느 위치에 있는지 확인할 수 있는 방법

전체 길이에서 화면에 보이는 컨텐츠가 어디쯤에 있는지 어떻게 계산해야할까?

https://ko.javascript.info/size-and-scroll

자바스크립트로 요소 사이즈나 스크롤 높이 등을 알 수 있다.

컨텐츠의 수직 위치: scrollTop

```jsx
document.documentElement.scrollTop;
```

scrollTop은 선택한 요소의 수직 위치를 알 수 있다. 기준이 되는 요소가 document이기 때문에 scrollTop 뿐만 아니라 `window.scrollY`를 사용할 수 있다.

컨텐츠를 제외한 높이 구하기

: 전체길이에서 컨텐츠의 높이를 빼면 된다.

```jsx
const heigth =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
```

전체 요소를 기준으로 스크롤의 위치 비율 구하기

```jsx
$progressBar.style.width = Math.floor((scrollTop / height) * 100) + '%';
```
