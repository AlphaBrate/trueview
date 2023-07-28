# Heading 1

## Heading 2

### Heading 3

#### Heading 4

> Quote

> This is a quote message which was written by The AlphaBrate A1 Testing Team, ABA1TT in short form.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>正观 —— 正确观念</title>
    <link rel="stylesheet" href="style.css">
    <!-- preload about.html articles.html article.html -->
    <link rel="preload" href="about.html" as="document">
    <link rel="preload" href="articles.html" as="document">
    <link rel="preload" href="article.html" as="document">
</head>
<body>
    <div class="nav" id="nav">
        <div class="logo">
            <img src="logo-light.svg" alt="Logo Ture View">
        </div>
        <div class="flat" id="flat">
            <div class="nav-item"><a href="index.html">首页</a></div>
            <div class="nav-item"><font class="highlight"><a href="about.html">关于</a></font></div>
            <div class="nav-item"><a href="articles.html">文章</a></div>
        </div>
    </div>
    </div>
    <div class="heading">
        <h1>正观</h1>
        <h2><font class="highlight">关于</font>正观</h2>
    </div>
    <div class="content">
        <div class="para">
            <h3>正确观念</h3>
            <p>在互联网上，每天都有数以万计的新内容。而这些内容，有不少都是虚假的！更有甚者，利用虚假/不实信息来吸引眼球，谋取利益。靠发布<font class="highlight">虚假/不实</font>信息的公网平台账号进而盈利的就是<font class="highlight">营销号</font>。</p>
        </div>
        <div class="para">
            <h3>使命</h3>
            <p>我们通过提供准确、可靠和有价值的信息来帮助人们做出<font class="highlight">明智</font>的决策。我们致力于揭露虚假信息，防止误导和欺骗，保护人们的知情权和利益。我们相信，只有透明和公正的信息才能够真正服务于人民，推动社会的进步和发展。因此，我将继续努力，与其他有识之士一起，共同对抗营销号和虚假信息，为人们提供<font class="highlight">更好</font>的互联网环境。</p>
        </div>
        <div class="para">
            <h3>AlphaBrate</h3>
            <p>AlphaBrate是一个致力于创建<font class="highlight">开源服务</font>的组织，True View 正观 就是其产品之一。以下是AlphaBrate的其他产品：</p>
            <p><a href="https://alphabrate.github.io">AlphaBrate</a></p>
            <p><a href="https://xfeedback-27h6.onrender.com/">XFeedback</a></p>
            <p><a href="https://csstats.onrender.com">CSStats</a></p>
        </div>
        <div class="para">
            <h3>帮助我们</h3>
            <p>AlphaBrate是一个<font class="highlight">非盈利性</font>的开源组织，我们所有网站上都<font class="highlight">没有广告</font>，你可以透过下面的方式帮助我们。如有意向，请发送电子邮件到 <a href="mailto:alphabrate@gmail.com">alphabrate@gmail.com</a>。</p>
            <font>捐款·</font>
            <font>帮助开发·</font>
            <font>提出意见·</font>
            <font>报告问题</font>
        </div>
        <div class="placeholder"></div>
        <div class="para">
            <h3>链接</h3>
            <p><a href="index.html">首页</a></p>
            <p><a href="about.html">关于我们</a></p>
            <p><a href="articles.html">文章大全</a></p>
        </div>
        <div class="para">
            <h3>其他</h3>
            <p><a href="article.html?s=user-agreement">用户条款</a></p>
            <p><a href="article.html?s=declaration-of-the-use-of-content">内容使用声明</a></p>
            <p><a href="article.html?s=copyright">版权所有</a></p>
        </div>
    </div>
</body>
</html>
```

```js
const articleSearches = new URLSearchParams(window.location.search);
const articleId = articleSearches.get("s");

fetch("articles/articles.json").then(res => res.json()).then(articles => {
    var j = articles[articleId];
    document.getElementById("center-title").innerHTML =
    document.getElementById("title").innerHTML = j.title;
    document.getElementById("author").innerHTML = j.author;
    document.getElementById("date").innerHTML = j.date;
    document.getElementById("description").innerHTML = j.description;
    var contentUrl = "articles/" + j.content;
    fetch(contentUrl).then(res => res.text()).then(content => {
        document.getElementById("text").innerHTML = marked.parse(content);
    });
});

var canMakeCenterTitle = true;

const centerTitle = () => {
    if (window.innerWidth > window.innerHeight) {
        document.addEventListener("scroll", () => {
            if (canMakeCenterTitle) {
                // #title opacity Y=25:1 Y=80:0
                var title = document.getElementById("title");
                var titleOpacity = 1 - (window.scrollY - 25) / 55;
                if (titleOpacity < 0) titleOpacity = 0;
                title.style.opacity = titleOpacity;
                // #center-title opacity: 65 = 0 90 = 1
                var centerTitle = document.getElementById("center-title");
                var centerTitleOpacity = (window.scrollY - 65) / 25;
                if (centerTitleOpacity < 0) centerTitleOpacity = 0;
                if (centerTitleOpacity > 1) centerTitleOpacity = 1;
                centerTitle.style.opacity = centerTitleOpacity;
            }
        });
        canMakeCenterTitle = true;
    } else {
        document.getElementById("title").style.opacity = 1;
        document.getElementById("center-title").style.opacity = 0;
        canMakeCenterTitle = false;
    }
}

centerTitle();

window.addEventListener("resize", () => centerTitle());
```

---

**bold text**

***bold & italicized text***

*italicized text*

~deleted text~

~~deleted text~~

`small code block`

[Link](https://alphabrate.github.io)

![Image](https://web-dev.imgix.net/image/VbAJIREinuYvovrBzzvEyZOpw5w1/B9KWrQo39fXbKSVYjz1e.svg)

1. One
2. Two
3. Three
4. Four
126. One-Two-Six / Auto > Five

- A
- B
- C
- D
- E
- G

| Table Col A | Table Col B |
| --- | --- |
| Row 1 | Row One |
| Row Two | Row 2 |
| `Code` | :joy: | [Link](https://alphabrate.github.io) |
| ![Image](https://web-dev.imgix.net/image/VbAJIREinuYvovrBzzvEyZOpw5w1/B9KWrQo39fXbKSVYjz1e.svg) | ***bold & italicized text*** |

- [x] Edit the markdown test module
- [ ] Update the website
- [ ] Contact AlphaBrate A1 Manager

- A
    * A1
        + A11
    * A2
        + A21
        + A22
- B
    * B1
        + B11
 
4 is 2^2