# 숫자 야구 게임 (Bulls and Cows)

<h2 style="background-color:lightpink">🔨 Retrospective</h2>

### 📚 중복없는 4자리 랜덤 숫자 만들기

중복이 없는 숫자를 만들기 위해선? 👉🏻 null로 채워져있는 length가 4인 배열을 만든다.

```jsx
const passwordArray = Array(digit).fill(null);
```

while문을 돌면서 1 ~ 9 사이의 정수를 만들고 passwordArray에 존재하지 않으면 해당 passwordArray[index]에 해당 값을 넣는다.

```jsx
let index = 0;
while (password.length < digit) {
  const random = parseInt(Math.random() * 10, 10);

  if (passwordArray.indexOf(random) === -1) {
    passwordArray[index] = random;
    password += random;
    index += 1;
  }
}
```

### 📚 Ball과 Strike를 판별하는 함수

위치는 동일하지 않지만 숫자가 포함되어 있다면 Ball이고 위치까지 동일하면 Strike로 판단한다.

- 특정 요소가 포함되어있는지 확인하는 방법 👉🏻 Array.prototype.includes()

```jsx
const checkBallCount = (answer) => {
  const passwordArray = password.split('');
  let ballCount = 0;

  answer.split('').forEach((element, index) => {
    if (
      passwordArray.includes(element) &&
      passwordArray.indexOf(element) !== index
    )
      ballCount += 1;
  });

  return ballCount;
};

const checkStrikeCount = (answer) => {
  const passwordArray = password.split('');
  let strikeCount = 0;

  answer.split('').forEach((element, index) => {
    if (
      passwordArray.includes(element) &&
      passwordArray.indexOf(element) === index
    )
      strikeCount += 1;
  });

  return strikeCount;
};
```

현재 checkBallCount 함수와 checkStrikeCount는 구조가 동일하다. 코드가 계속 중복되고 있으므로 하나의 함수에서 Ball과 Strike를 판별할 수 있다면 함수를 하나로 줄이는 것이 더 좋을 것 같다.
