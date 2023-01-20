const $keys = document.querySelector('.keys');

const drumSounds = [
  { keyboard: 'Q', key: 81, sound: 'clap.wav' },
  { keyboard: 'W', key: 87, sound: 'crash.wav' },
  { keyboard: 'E', key: 69, sound: 'hihat.wav' },
  { keyboard: 'A', key: 65, sound: 'kick.wav' },
  { keyboard: 'S', key: 83, sound: 'openhat.wav' },
  { keyboard: 'D', key: 68, sound: 'ride.wav' },
  { keyboard: 'Z', key: 90, sound: 'shaker.wav' },
  { keyboard: 'X', key: 88, sound: 'snare.wav' },
  { keyboard: 'C', key: 67, sound: 'tom.wav' },
];
const soundsRoot = 'assets/sounds/';

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

const playSound = (keycode) => {
  const $audio = document.querySelector(`audio[data-key="${keycode}"]`);
  const $key = document.querySelector(`div[data-key="${keycode}"]`);
  if ($key && $audio) {
    $key.classList.add('playing');
    $audio.currentTime = 0;
    $audio.play();
  }
};

window.addEventListener('DOMContentLoaded', () => {
  render(drumSounds);
});

window.addEventListener('keydown', (e) => {
  playSound(e.keyCode);
});

$keys.addEventListener('mousedown', (e) => {
  if (!e.target.closest('.key')) return;

  playSound(e.target.closest('.key').dataset.key);
});

$keys.addEventListener('transitionend', (e) => {
  if (e.propertyName === 'transform') {
    e.target.classList.remove('playing');
  }
});
