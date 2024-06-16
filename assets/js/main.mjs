const colors = [
  '#005f5a',
  '#ff5f5a',
  '#ff2c26',
  '#ffbe2e',
  '#2aca44',
  '#2e60f2',
  '#662ef2',
];

(function main() {
  const numBalls = window.innerWidth < 640 ? 40 : 70;
  const balls = Array.from({ length: numBalls }, createBall);
  const containerBalls = document.querySelector('.container__balls');

  setTimeout(() => addBallsToContainer(balls, containerBalls), 250);
  balls.forEach(animateBall);
})();

function createBall() {
  const ball = document.createElement('div');
  ball.classList.add('ball');
  ball.style.opacity = 0;
  ball.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}rem`;
  ball.style.height = ball.style.width;
  ball.style.transition = 'opacity 10s ease';

  return ball;
}

function addBallsToContainer(balls, container) {
  balls.forEach((ball) => {
    container.appendChild(ball);
    setTimeout(() => {
      ball.style.opacity = 0.75;
    }, Math.random() * 2000);
  });
}

function animateBall(ball, i) {
  const movement = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12,
  };

  ball.animate(
    [
      { transform: 'translate(0, 0)' },
      { transform: `translate(${movement.x}rem, ${movement.y}rem)` },
    ],
    {
      duration: (Math.random() + 1) * 2000,
      direction: 'alternate',
      fill: 'both',
      iterations: Infinity,
      easing: 'ease-in-out',
    }
  );
}
