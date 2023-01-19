const $wrapper = document.querySelector('.wrapper');

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
  $wrapper.innerHTML =  `
  <div class="keys">
    ${drumSounds.map(({keyboard, key, sound}) =>`
     <div class="key" data-key="${key}">
        <div class="label">
            <kbd>${keyboard}</kbd>
            <p class="sound">${sound.replace(/.wav/g, '')}</p>
        </div>
        <audio data-key="${key}" src="${soundsRoot}${sound}"></audio>
     </div>`).join('')}
  </div>`
};

window.addEventListener('DOMContentLoaded', () => {
  render(drumSounds);
});
