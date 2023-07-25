var articlesList = [];

const makeArticleCard = () => {
    articlesList.forEach(article => {
        var card = document.createElement("a");
        card.className = "card";
        card.href = "article.html?s=" + article.id;
        var img = document.createElement("img");
        img.src = "assets/" + article.id + ".jpg";
        var title = document.createElement("div");
        title.className = "title";
        title.innerHTML = article.title;
        var description = document.createElement("div");
        description.className = "description";
        description.innerHTML = article.description;
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(description);
        document.getElementById("content").appendChild(card);
    });
}

fetch("articles/articles.json").then(res => res.json()).then(articles => {
    var keys = Object.keys(articles);
    keys.forEach(key => {
        if (Number.isInteger(parseInt(key))) {
            articles[key].id = key;
            articlesList.push(articles[key]);
        }
    });
}).then(() => makeArticleCard());