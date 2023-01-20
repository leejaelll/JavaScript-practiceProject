# Drumkit

## 🔨 Retrospective

### 🚀 JavaScript로 동적 생성했을 때 querySelector로 Node를 참조하려할 때 null 값을 반환한다.

```jsx
window.addEventListener('DOMContentLoaded', () => {
  render(drumSounds);
});
```

render 함수는 DomString을 반환한다.

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

이 때 console.log(document.querySelector('.key')) 을 확인해보면 null 값이 나오는 것을 확인할 수 있다.

비동기 프로그래밍의 개념을 확실히 알아야한다. render 함수는 DOMContentLoaded 이벤트가 발생하면 그 때 콜백함수로 실행된다. 만약 console.log가 호출되기 직전에 DOMContentLoaded이벤트가 발생했더라도 이벤트 핸들러는 결코 console.log보다 먼저 실행되지 않는다.

그렇기 때문에 동적으로 생성된 `<div class="key">`에 이벤트를 등록하려면 document에 이벤트를 등록하고 e.target이 key 클래스를 가지고 있는지 확인 후 이벤트를 추가해야 한다.

이번 실습 프로젝트에서는 참조해야할 코드가 하나밖에 되지 않기 때문에 index.html에 미리 작성을 하고 자식 노드만 동적생성했다.
