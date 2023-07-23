const pictures = document.querySelectorAll(".carousel__face");
let index = 3; // 当前显示的图片索引

function layout() {
  const xOffsetStep = 80; // 每个图片在x轴上的偏移量
  const count = pictures.length; // 图片总数
  const scaleStep = 0.7; // 缩放的递减倍率
  const opacityStep = 0.5; // 透明度的递减倍率
  for (let i = 0; i < pictures.length; i++) {
    const item = pictures[i];
    const sign = Math.sign(i - index);
    // z-index
    const zOffset = Math.abs(i - index);
    item.style.zIndex = count - zOffset;
    // transform
    let xOffset = (i - index) * xOffsetStep;
    if (i !== index) {
      xOffset += xOffset + 100 * sign;
    }
    // scale
    const scale = Math.pow(scaleStep, zOffset);

    // rotate
    const rotateY = index === i ? 0 : sign * 60;
    item.style.transform = `translateX(${xOffset}px) scale(${scale}) rotateY(${rotateY}deg)`;

    // opacity
    const opacity = Math.pow(opacityStep, zOffset);
    item.style.opacity = opacity;
  }
}
layout();
document.querySelector(".next").addEventListener("click", function () {
  index++;
  if (index >= pictures.length) index = 0;
  layout();
});

document.querySelector(".prev").addEventListener("click", function () {
  index--;
  if (index < 0) index = pictures.length - 1;
  layout();
});
