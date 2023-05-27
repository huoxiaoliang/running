const imgs = [
  "../../Images/beijing1.webp",
  "../../Images/1 (1).jpg",
  "../../Images/1 (1).png",
  "../../Images/1 (2).jpg",
  "../../Images/1 (2).png",
];

const scrollContainer = document.querySelector(".scroll-container");

let currentIndex = 0;
let isAnimating = false;

function createItem(index) {
  const imgUrl = imgs[index];
  const item = document.createElement("div");
  item.classList.add("item");
  item.innerHTML = `<img src="${imgUrl}" />`;
  scrollContainer.appendChild(item);
  return item;
}

function resetElements() {
  scrollContainer.innerHTML = "";
  const prevIndex = currentIndex - 1 < 0 ? imgs.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex + 1 > imgs.length - 1 ? 0 : currentIndex + 1;
  createItem(prevIndex).classList.add("pre");
  createItem(currentIndex).classList.add("cur");
  createItem(nextIndex).classList.add("next");
}
resetElements();
window.addEventListener("wheel", (e) => {
  if (!e.deltaY) return;
  if (isAnimating) {
    return;
  }
  isAnimating = true;
  if (e.deltaY > 0) {
    scrollContainer.classList.add("scroll-down");
    currentIndex = currentIndex + 1 > imgs.length - 1 ? 0 : currentIndex + 1;
  } else {
    scrollContainer.classList.add("scroll-up");
    currentIndex = currentIndex - 1 < 0 ? imgs.length - 1 : currentIndex - 1;
  }
});

scrollContainer.addEventListener("transitionend", () => {
  isAnimating = false;
  scrollContainer.classList.remove("scroll-down");
  scrollContainer.classList.remove("scroll-up");
  resetElements();
});
