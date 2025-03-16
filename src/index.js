import { removeWithRules } from "./features.js";

console.log("[Remove Numbers for Zenn] running...")

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

removeWithRules(defaultRules)