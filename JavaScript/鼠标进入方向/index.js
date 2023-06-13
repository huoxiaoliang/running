const container = document.querySelector(".container");
const rect = container.getBoundingClientRect();
const theta = Math.atan2(rect.height, rect.width);
container.addEventListener("mousemove", (e) => {
  if (container.classList.length > 1) {
    return;
  }
  const x = e.offsetX - rect.width / 2;
  const y = rect.height / 2 - e.offsetY;
  const d = Math.atan2(y, x);
  let dir;
  if (d < theta && d > -theta) {
    dir = "right";
  } else if (d >= theta && d < Math.PI - theta) {
    dir = "top";
  } else if (d < -theta && d > theta - Math.PI) {
    dir = "bottom";
  } else {
    dir = "left";
  }
  container.classList.add(dir);
});

container.addEventListener("mouseleave", () => {
  container.className = "container";
});
