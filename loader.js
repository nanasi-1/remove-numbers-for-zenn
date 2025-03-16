// @see https://scrapbox.io/dojineko/Chrome拡張のContentScriptsをES_Modulesとして実行する

;(async () => {
  await import(chrome.runtime.getURL('src/index.js'))
})()