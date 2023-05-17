const items = document.querySelectorAll(".list-item");
const playground = document.querySelector(".playground");
const list = document.querySelector(".list");
const listBack = document.querySelector(".list-back");

/**
 * 根据滚动位置计算对应的属性值
 * @param {*} scrollStart
 * @param {*} scrollEnd
 * @param {*} valueStart
 * @param {*} valueEnd
 * @returns
 */
function createAnimation(scrollStart, scrollEnd, valueStart, valueEnd) {
  return (scroll) => {
    if (scroll <= scrollStart) {
      return valueStart;
    }
    if (scroll >= scrollEnd) {
      return valueEnd;
    }

    return (
      valueStart +
      ((valueEnd - valueStart) * (scroll - scrollStart)) /
        (scrollEnd - scrollStart)
    );
  };
}

// 动画集合
const animationMap = new Map();

function getDomAnimation(scrollStart, scrollEnd, dom) {
  dom.dataset.order && (scrollStart = scrollStart + dom.dataset.order * 100);
  const opacityAnimation = createAnimation(scrollStart, scrollEnd, 0, 1);
  // 透明度动画
  const opacity = function (scroll) {
    return opacityAnimation(scroll);
  };
  //放缩动画
  const scaleAnimation = createAnimation(scrollStart, scrollEnd, 0.5, 1);
  // 偏移动画
  const xAnimation = createAnimation(
    scrollStart,
    scrollEnd,
    list.clientWidth / 2 - dom.offsetLeft - dom.clientWidth / 2,
    0
  );
  const yAnimation = createAnimation(
    scrollStart,
    scrollEnd,
    list.clientHeight / 2 - dom.offsetTop - dom.clientHeight / 2,
    0
  );
  const transform = function (scroll) {
    return `translate(${xAnimation(scroll)}px,${yAnimation(
      scroll
    )}px) scale(${scaleAnimation(scroll)})`;
  };
  return {
    opacity,
    transform,
  };
}

function updateMap() {
  animationMap.clear();
  const playgroundRect = playground.getBoundingClientRect();
  const scrollStart = playgroundRect.top + window.scrollY;
  const scrollEnd =
    playgroundRect.bottom + window.scrollY - window.innerHeight - 150;
  for (const item of items) {
    animationMap.set(item, getDomAnimation(scrollStart, scrollEnd, item));
  }
  animationMap.set(listBack, getDomAnimation(scrollStart, scrollEnd, listBack));
}
updateMap();
// 遍历所有动画
function updateStyle() {
  const scroll = window.scrollY;
  for (const [dom, value] of animationMap) {
    for (const cssProp in value) {
      dom.style[cssProp] = value[cssProp](scroll);
    }
  }
}
updateStyle();
window.addEventListener("scroll", updateStyle);
window.addEventListener("resize", updateMap);
