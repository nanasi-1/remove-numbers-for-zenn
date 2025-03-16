import { sleep } from "./utils.js";

function dispatch() {
  window.dispatchEvent(new CustomEvent('changeURL'));
}

function setUpObserver() {
  let oldUrl = ''; // URLの一時保管用

  const observer = new MutationObserver(async () => {
    await sleep(50); // 判定が速すぎたため
    if (oldUrl !== location.href) {
      dispatch()
      oldUrl = location.href; // oldUrlを更新
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true
  });
}

// ブラウザバック用
function setupPopState() {
  window.addEventListener('popstate', () => {
    dispatch()
    console.log('popstate')
  });
}

export function setupChangeURLEvent() {
  setUpObserver()
  setupPopState()

  // 最初の一回分
  dispatch()
}
