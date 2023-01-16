// 1. 랜덤으로 만들어진 4자리의 숫자를 맞추는 게임
// 2. 사용되는 숫자는 0~9로 구성되어 있으며, 각 숫자는 한 번씩만 사용 가능
// 3. 숫자와 위치가 맞으면 스트라이크(S), 숫자만 맞으면 볼(B)
// 4. 숫자가 하나도 맞지 않을 경우, 아웃(OUT)으로 표시된다.
// 5. 총 10번의 기회가 주어진다.

const question = document.querySelector('#question');

// 상태로 가지고 있어야할 것 - 게임 횟수, 시도한 횟수, 야구게임 자리수,
const BASEBALL_STATE = {
  chance: 10,
  digit: 4,
  trial: 0,
};

const { chance, digit } = BASEBALL_STATE;
let { trial } = BASEBALL_STATE;

// 각 숫자가 하나 씩 사용되었는지 확인하기
const hasDuplicateNumber = (number) =>
  [...new Set(String(number).split(''))].length !== digit;

// 중복숫자를 알려주는 함수
const noticeDuplicateNumber = () => {
  alert('중복 숫자가 있습니다⚾️');
};

// input의 value를 캐치하는 이벤트 -> submit
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const qestionValue = question.value;

  // hasDuplicateNumber가 true이면 중복숫자를 빼라는 alert 함수 띄우기
  hasDuplicateNumber(qestionValue) && noticeDuplicateNumber();
});

// 볼이 있는지
// 스트라이크가 있는지
// 아웃인지 확인하고
// textContent로 알려준다.
// 추가로 기회도 몇회 남았는지 알려줘야한다.
// 기회가 종료되었다면 입력하는 창을 지우고, 결과만 보여주기
