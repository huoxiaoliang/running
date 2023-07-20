document.querySelectorAll(".title").forEach((title) => {
  title.innerHTML = title.textContent
    .split("")
    .map((letter) => `<span>${letter.trim() ? letter : "&nbsp"}</span>`)
    .join("");
});

document.querySelectorAll(".title span").forEach((span, i) => {
  span.style.setProperty("--delay", i * 0.1 + "s");
});
