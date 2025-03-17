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
    selectors: ["LikeButton_likedCount__", "BookmarkButton_bookmarkedCount__", "ArticleList_like__"],
  },
  {
    regex: RegExp("/.+/books/.+"),
    selectors: ["LikeButton_likedCount__"],
  },
  {
    regex: RegExp("/.+/scraps/.+"),
    selectors: ["LikeButton_likedCount__", "View_commentsCount__"],
  },
  {
    regex: RegExp("/$"),
    selectors: ["ArticleList_like__", "ArticleList_date__", "BookLink_likedCount__"],
  },
  {
    regex: RegExp("/articles"),
    selectors: ["ArticleList_like__", "ArticleList_date__", "BookLink_likedCount__"]
  },
  {
    regex: RegExp("/books"),
    selectors: ["BookLink_likedCount__", "BookLargeLink_likedCount__"]
  },
  {
    regex: RegExp("/topics/.+"),
    selectors: ["ArticleList_like__", "BookLink_likedCount__"]
  },
  {
    regex: RegExp("/search"),
    selectors: ["ArticleList_like__", "BookLink_likedCount__"]
  },
  {
    regex: RegExp("/[^/]+"), // プロフィール
    selectors: ["UserHeader_count__", "ArticleCard_likes__", "UserHeader_tabItemCount__I_", "ScrapRow_commentsCount__"]
  },
  {
    regex: RegExp("/dashboard$"),
    selectors: ["ArticleItem_like__"]
  },
  {
    regex: RegExp("/dashboard/library"),
    selectors: ["CommonPostItemRow_meta__"]
  },
]

window.addEventListener('changeURL', () => {
  console.debug("[Remove Numbers for Zenn] change url...")
  removeWithRules(defaultRules)
})

// リスナーを登録してからセットアップする必要あり
setupChangeURLEvent()
