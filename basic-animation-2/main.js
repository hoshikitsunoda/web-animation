const elements = document.querySelectorAll('.js li');
const animations = [];

for (let i = 0; i < elements.length; ++i) {
  const animation = elements[i].animate([
    { transform: 'scale(1)', opacity: 1, offset: 0 },
    { transform: 'scale(.5)', opacity: .5, offset: .3 },
    { transform: 'scale(.667)', opacity: .667, offset: .7875 },
    { transform: 'scale(.6)', opacity: .6, offset: 1 }
  ],
  {
    duration: 700,
    easing: 'ease-in-out',
    delay: 100,
    iterations: Infinity,
    direction: 'alternate',
    fill: 'forwards'
  })

  animations.push(animation);
}

document.querySelector('.css').classList.add('activated');
