// 1. 랜덤으로 만들어진 4자리의 숫자를 맞추는 게임
// 2. 사용되는 숫자는 0~9로 구성되어 있으며, 각 숫자는 한 번씩만 사용 가능
// 3. 숫자와 위치가 맞으면 스트라이크(S), 숫자만 맞으면 볼(B)
// 4. 숫자가 하나도 맞지 않을 경우, 아웃(OUT)으로 표시된다.
// 5. 총 10번의 기회가 주어진다.

const $question = document.querySelector('#question');
const $ballResult = document.querySelector('.ball-result');
const $tryButton = document.querySelector('.try-button');

// 상태로 가지고 있어야할 것 - 게임 횟수, 시도한 횟수, 야구게임 자리수,
const BASEBALL_STATE = {
  chance: 10,
  digit: 4,
  trial: 0,
  password: '',
};
const { chance, digit } = BASEBALL_STATE;

// 숫자 생성하는 함수
const makeRandomNumber = () => {
  const passwordArray = Array(digit).fill(null);
  let password = '';

  let index = 0;
  while (password.length < digit) {
    const random = parseInt(Math.random() * 10, 10);

    if (passwordArray.indexOf(random) === -1) {
      passwordArray[index] = random;
      password += random;
      index += 1;
    }
  }

  BASEBALL_STATE.password = password;
};
makeRandomNumber();

let { trial, password } = BASEBALL_STATE;
console.log(BASEBALL_STATE);

// 각 숫자가 하나 씩 사용되었는지 확인하기
const hasDuplicateNumber = (number) =>
  [...new Set(number.split(''))].length !== digit;

// 중복숫자를 알려주는 함수
const noticeDuplicateNumber = () => {
  alert('중복 숫자가 있습니다⚾️');
};

// 볼인지 확인하는 함수
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

// 스트라이크인지 확인하는 함수
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

const isCorrect = (answer) => {
  return answer === password;
};

// 아웃인지 확인하는 함수
// prettier-ignore
const checkOutCount = (answer) => (answer + '').split('').every((element) => password.split('').indexOf(element) === -1);

/* ---------------------------------- event --------------------------------- */
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const questionValue = $question.value;

  // 빈 문자열이면 숫자를 입력하라는 alert 함수 띄우기
  if (!questionValue) {
    alert(`숫자 ${digit}자리를 입력해주세요!`);
    return;
  }

  // hasDuplicateNumber가 true이면 중복숫자를 빼라는 alert 함수 띄우기
  if (hasDuplicateNumber(questionValue)) {
    noticeDuplicateNumber();
    return;
  }

  // 아웃이면 아웃이라는 내용을 결과창에 보여준다.
  // prettier-ignore
  if (checkOutCount(questionValue)) {
    $ballResult.innerHTML += `<p>${trial + 1}차 시도: ${questionValue} 👉🏻 OUT</p>`;
  }

  // strike와 ball count를 확인하고 결과를 보여준다.
  // prettier-ignore
  if (checkStrikeCount(questionValue) || checkBallCount(questionValue)) {
    const strike = checkStrikeCount(questionValue);
    const ball = checkBallCount(questionValue);
    $ballResult.innerHTML += `<p>${trial + 1}차 시도: ${questionValue} 👉🏻 ${strike}STRIKE ${ball}BALL </p>`;
  }

  trial += 1;
  $question.value = '';
  $question.focus();

  if (isCorrect(questionValue)) {
    $ballResult.innerHTML = `<h1>정답입니다!🎉<h1>`;
    console.log($question);
    $question.disabled = true;
    $tryButton.disabled = true;
  }

  // prettier-ignore
  if (trial >= chance && !isCorrect(questionValue)) {
    $ballResult.innerHTML = `<h1>정답은 ${password}😛</h1>`;
    $question.disabled = true;
    $tryButton.disabled = true;
}
});

// 볼이 있는지
// 스트라이크가 있는지
// 아웃인지 확인하고
// textContent로 알려준다.
// 추가로 기회도 몇회 남았는지 알려줘야한다.
// 기회가 종료되었다면 입력하는 창을 지우고, 결과만 보여주기
