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
    regex: RegExp("/.+/articles/.+"),
    selectors: ["LikeButton_likedCount__", "BookmarkButton_bookmarkedCount__"],
  },
  {
    regex: RegExp("/$"),
    selectors: ["ArticleList_like__", "ArticleList_date__", "BookLink_likedCount__"],
  },
  {
    regex: RegExp("/articles/explore$"),
    selectors: ["ArticleList_like__", "ArticleList_date__", "BookLink_likedCount__"]
  },
  {
    regex: RegExp("/search"),
    selectors: ["ArticleList_like__", "BookLink_likedCount__"]
  },
]

window.addEventListener('changeURL', () => {
  console.debug("[Remove Numbers for Zenn] change url...")
  removeWithRules(defaultRules)
})

// リスナーを登録してからセットアップする必要あり
setupChangeURLEvent()
