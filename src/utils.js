/**
 * セレクターにマッチする要素を削除する
 * @param {string[]} selectors 
*/
export function removeElems(selectors) {
  selectors.forEach(s => {
    document.querySelectorAll(`[class*=${s}]`).forEach(e => e.remove())
  })
}

/**
 * 現在のURLのパスが正規表現にマッチするか調べる
 * @param {RegExp} regex 
 * @returns {boolean}
 */
export function isPathMatching(regex) {
  return regex.test(window.location.pathname)
}

// * @param {{ selectors: string[], regex: string }} rule 