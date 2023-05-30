const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d", { willReadFrequently: true });
function initCanvasSize() {
  canvas.width = window.innerWidth * devicePixelRatio;
  canvas.height = window.innerHeight * devicePixelRatio;
}

initCanvasSize();

getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

class Particle {
  constructor() {
    const r = Math.min(canvas.width, canvas.height) / 2;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const rad = (getRandom(0, 360) * Math.PI) / 180; //随机角度
    this.x = cx + r * Math.cos(rad);
    this.y = cy + r * Math.sin(rad);
    this.size = getRandom(2 * devicePixelRatio, 7 * devicePixelRatio);
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  moveTo(tx, ty) {
    const duration = 500;
    const xSpeed = (tx - this.x) / duration;
    const ySpeed = (ty - this.y) / duration;
    const startTime = Date.now();
    const sx = this.x;
    const sy = this.y;
    const _move = () => {
      const t = Date.now() - startTime;
      const x = sx + xSpeed * t;
      const y = sy + ySpeed * t;
      this.x = x;
      this.y = y;
      if (t >= duration) {
        this.x = tx;
        this.y = ty;
        return;
      }
      requestAnimationFrame(_move);
    };
    _move();
  }
}

const particles = [];
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function draw() {
  clear();
  update();
  particles.forEach((item) => {
    item.draw();
  });
  requestAnimationFrame(draw);
}

function getText() {
  return new Date().toTimeString().substring(0, 8);
}

let text;
function update() {
  const newText = getText();

  if (newText === text) {
    return;
  }
  clear();
  text = newText;
  // 画文本
  const { width, height } = canvas;
  ctx.fillStyle = "#000";
  ctx.textBaseline = "middle";
  ctx.font = `${140 * devicePixelRatio}px 'Ds-Digital',sans-serif`;
  ctx.fillText(text, width / 2 - ctx.measureText(text).width / 2, height / 2);
  const points = getPoints();
  clear();
  // 画粒子
  for (let i = 0; i < points.length; i++) {
    let p = particles[i];
    if (!p) {
      p = new Particle();
      particles.push(p);
    }
    const [x, y] = points[i];
    p.moveTo(x, y);
  }
  if (particles.length > points.length) {
    particles.splice(points.length, particles.length - points.length);
  }
}

function getPoints() {
  const { width, height, data } = ctx.getImageData(
    0,
    0,
    canvas.width,
    canvas.height
  );
  const points = [];
  const gap = 6;
  for (let i = 0; i < width; i += gap) {
    for (let j = 0; j < height; j += gap) {
      const index = (i + j * width) * 4;
      const r = data[index];
      const g = data[index + 1];
      const b = data[index + 2];
      const a = data[index + 3];
      if (r === 0 && g === 0 && b === 0 && a === 255) {
        points.push([i, j]);
      }
    }
  }
  return points;
}
draw();
window.addEventListener("resize", () => {
  initCanvasSize();
});
