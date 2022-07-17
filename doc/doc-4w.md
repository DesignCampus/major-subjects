---
theme: "simple"
customTheme : "my-theme"
transition: "convex"
slideNumber: false
title: "コーディング 2nd Season 4w - HTML"
---

# コーディング  2nd Season
## 3週目「HTML」
<img src="./img/logo_bg_none.png" style="width: 16%;">

---

1. 受講生MTG
1. はじめに
1. 座学
1. 実習
1. 講師FB
1. まとめ
1. 受講生MTG

note:
13:30～13:35 05分＞生徒の打ち合わせ
13:35～13:40 05分＞イントロ
13:40～14:05 40分＞座学
14:10～14:50 40分＞作業
14:50～15:05 15分＞FB
15:05～15:25 10分＞締め
15:25～15:30 05分＞生徒の打ち合わせ

---

## はじめに

--

### 先週の課題
どこまでできた？

---

座学の時間
## HTML


---

### 便利な要素

--

#### details要素とsummary要素

--

```html
<details>
    <summary>徒然草</summary>
    つれづれなるまゝに、日暮らし、硯にむかひて、心にうつりゆくよしなし事を、そこはかとなく書きつくれば、あやしうこそものぐるほしけれ
</details>
```

--

#### dialog要素

--

```html
<dialog>
    ダイアログだよ
</dialog>
```

--

#### template要素

--

```html
<template>
    <div>
        テンプレート
    </div>
</template>
```


---

### WAI-ARIA

--

Web Accessibility Initiative  
\-  
Accessible Rich Internet Applications

--

通常のHTMLタグを補完して、より正確な意味付けを行うもの

--

**利点**

- コンピューターの理解が向上する
- スクリーンリーダーなどで適切に情報が伝えられるようになる

--

絶対必要なものではなく、必要だと思ったときにつかおう

--

判断基準は、このままだとタグの意味としておかしいぞ、ってとき

--

#### role

要素の役割を定義する

```html
<div role="navigation">これはナビゲーション</ｄ>
```

<a class="notes">https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles</a>

--

#### tabindex

```html
<div tabindex="0">タブキーでフォーカス</div>
```

--

#### aria-label

```html

<button aria-label="閉じる"></button>

```

--

#### aria-hidden

```html
<span aria-hidden="true"></span>
```

--

#### aria-controls
```html
<button aria-controls="nav"></button>

<nav id="nav"></nav>
```

--

#### aria-expanded

```html
<button aria-controls="gnav" aria-expanded="true"></button>

<nav id="nav" aria-hidden="false"></nav>
```

---

他にも構造化データなども調べてみて

---

## 座学の最後に

--

HTMLはセマンティックを心がける

--

CSSでできることはCSSでやってしまうのがいい

けれども・・・

JSとのすみわけもきちんと考えよう

--

JSを書くときは・・・  
<ruby>Vanilla<rt>バニラ</rt><ruby>なJavaScriptで書くのがいいと思います

---

## 実習

--

### 先週から変化があったか報告

--

14:10-14:50まで  
※休憩等は自由に

---

## 時間あるかな

--

- 担当の再確認
- コーディングルールを決めておく
    * 使用する技術
    * ファイル構成
    * 命名規則
    * 共有方法
    * コミュニケーションの方法

---

## 来週に向けて

--

クライアントのコーディングをやる！
<p class="notes">※卒業制作もすすめないとつらいよ</p>

--

それではまた来週を楽しみにしています！

note:
https://design-campus.net/practice/ts-0/ikeda/
https://design-campus.net/practice/ts-0/kuwabara/
https://design-campus.net/practice/ts-0/yoshino/