const articleSearches = new URLSearchParams(window.location.search);
const articleId = articleSearches.get("s");

if (articleId == null) {
    console.log('null');
    const articleJson = {
        "title": articleSearches.get("title"),
        "author": articleSearches.get("author"),
        "date": articleSearches.get("date"),
        "description": articleSearches.get("description") || articleSearches.get("des"),
        "content": articleSearches.get("content")
    };
    console.log(articleJson.description);
    document.getElementById("center-title").innerHTML =
    document.getElementById("title").innerHTML = articleJson.title;
    document.getElementById("author").innerHTML = articleJson.author;
    document.getElementById("date").innerHTML = articleJson.date;
    document.getElementById("description").innerHTML = articleJson.description;
    var contentUrl = articleJson.content;
    fetch(contentUrl).then(res => res.text()).then(content => {
        document.getElementById("text").innerHTML = marked.parse(content);
    });
} else 
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
        var pre = document.getElementsByTagName("pre");
        for (var i = 0; i < pre.length; i++) {
            pre[i].classList.add("prettyprint");
        }
        var script = document.createElement("script");
        script.src = "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js";
        document.body.appendChild(script);
    });
}).catch(() => {
    document.getElementById("text").innerHTML = "Error Occured: Cannot load article, ID: " + articleId;
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