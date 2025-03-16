# Remove Numbers for Zenn

## About

Zennから**数字を抹消**するChrome拡張機能です。  
Zennからいいね数やブクマ数を抹消することで、数字を気にせず生活できます。

---

普段Zennで記事を読むとき、ついいいね数でその記事の価値を判断したり、伸びが気になってしまいがちです。  
気にしなくても良い指標を過剰に気にすることは、精神衛生面において非常によくありません。  

いいね数やブクマ数といった数字を画面から消すことで、自分がその記事に対してどう考えるかに集中できます。

## Feature

以下の画面から数字のHTML要素を削除します。

- トップページ
  - 記事リストにある記事のいいね数
  - 本リストにある本のいいね数
  - 記事リストにある記事の公開日: 公開日で大体のいいね数が推測できるため
- 記事ページ
  - 記事のいいね数
  - 記事のブックマーク数
  - コメントのいいね数
- 検索ページ
  - 記事リストにある記事のいいね数
  - 本リストにある本のいいね数
- etc...

要素が削除されるタイミングは以下のイベントが発火したときです。  

- 他のページからZennに直接訪れた or Zennのページをリロードしたとき
- Zenn内でDOMの変更を伴うページ遷移をしたとき
- ブラウザバック / フォワードしたとき

> [!IMPORTANT]
> この拡張機能では、HTML要素の`class`属性によって要素を削除すべきか判定しています。  
> そのため、Zennのウェブサイトの変更によっては**簡単に動かなくなります**。

## Usage

### Get Started

Remove Numbers for Zennは、**Chromeウェブストアで公開していません。**  
使用には、このGitHubリポジトリをクローンする必要があるます。

1. [リポジトリのリンク](https://github.com/nanasi-1/remove-numbers-for-zenn.git)をコピー
2. `git clone コピーしたリンク`コマンドを実行
3. [`chrome://extensions`](chrome://extensions)にアクセス
5. 「パッケージ化されていない拡張機能を読み込む」をクリックし、クローンしたフォルダを選択
6. [Zenn](https://zenn.dev)にアクセスし、いいねが削除されることを確認

Chrome拡張機能の読み込み方は[こちら](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world?hl=ja#load-unpacked)をご覧ください。

### Customize Rules

ページパスの正規表現と、削除する要素の`class`属性の値の組み合わせをルールと読びます。   
ルールは`src/index.js`の`defaultRules`で定義されているので、自由に変更できます。

`defaultRules`の要素は以下の型を満たす必要があります。

```ts
type Rule = {
  regex, RegExp, // このルールを適用するページパスの正規表現
  selectprs: string[], // 削除する要素のクラス名（部分一致）
}
```

デフォルトのルール設定はこちらです。
https://github.com/nanasi-1/remove-numbers-for-zenn/blob/1401bc7b3630ddec317491d1c975a655b6f1dfb1/src/index.js#L11-L48

## Bugs
**たまに削除が行われないことがあります**。  
おそらくページ遷移後の待ち時間が足りないことが原因ですが、いい修正方法が思いつきませんでした。  

また、この拡張機能は作者の試用期間が足りておらず、未発見のバグが眠っている可能性があります。  
ご了承ください。
