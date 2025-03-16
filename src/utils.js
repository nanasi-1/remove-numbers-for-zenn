export function sleep(sec) {
  return new Promise(resolve => {
    setTimeout(() => { resolve(); }, sec);
  })
}

export function setupChangeURLEvent() {
  let oldUrl = ''; // URLの一時保管用

  const observer = new MutationObserver(async () => {
    await sleep(50); // 判定が速すぎたため
    if (oldUrl !== location.href) {
      window.dispatchEvent(new CustomEvent('changeURL', { detail: oldUrl }));
      oldUrl = location.href; // oldUrlを更新
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true
  });

  // 最初の一回分
  window.dispatchEvent(new CustomEvent('changeURL'));
}
