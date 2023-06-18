const container = document.querySelector(".container");
let source = null;
container.ondragstart = function (e) {
  // DataTransfer.effectAllowed 属性指定拖放操作所允许的一个效果。copy 操作用于指示被拖动的数据将从当前位置复制到放置位置。move 操作用于指定被拖动的数据将被移动。link 操作用于指示将在源和放置位置之间创建某种形式的关系或连接。
  e.dataTransfer.effectAllowed = e.target.dataset.effect;
  source = e.target;
};
container.ondragover = function (e) {
  e.preventDefault();
};

container.ondragend = function (e) {};
function clearDragStyle() {
  document.querySelectorAll(".drop-over").forEach((node) => {
    node.classList.remove("drop-over");
  });
}
function getDropNode(node) {
  while (node) {
    if (node.dataset && node.dataset.drop) {
      return node;
    }
    node = node.parentNode;
  }
}

container.ondragenter = function (e) {
  clearDragStyle();
  const dropNode = getDropNode(e.target);
  if (dropNode && dropNode.dataset.drop === e.dataTransfer.effectAllowed) {
    // 接受目前拖拽的元素
    dropNode.classList.add("drop-over");
  }
};
// 拖拽松开
container.ondrop = function (e) {
  clearDragStyle();
  const dropNode = getDropNode(e.target);
  if (dropNode && dropNode.dataset.drop === e.dataTransfer.effectAllowed) {
    if (dropNode.dataset.drop === "copy") {
      dropNode.innerHTML = "";
      const clonedNode = source.cloneNode(true);
      clonedNode.dataset.effect = "move";
      dropNode.appendChild(clonedNode);
    } else {
      //move
      source.remove();
    }
  }
};
container.ondragleave = function (e) {};
