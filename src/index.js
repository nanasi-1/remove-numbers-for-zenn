import { removeWithRules } from "./features.js";
import { setupChangeURLEvent } from "./utils/changeURL.js";

console.debug("[Remove Numbers for Zenn] running...")

/**
 * パスに対してどのクラスを削除するかのルール
 * いつかカスタマイズできるようにしたい
 * @type {{ selectors: string[], regex: string }[]}
 */
const defaultRules = [
  {
    selectors: ["LikeButton_likedCount__", "BookmarkButton_bookmarkedCount__"],
    regex: RegExp("/.+/articles/.+"),
  }
]

window.addEventListener('changeURL', () => {
  console.debug("[Remove Numbers for Zenn] change url...")
  removeWithRules(defaultRules)
})

setupChangeURLEvent()
