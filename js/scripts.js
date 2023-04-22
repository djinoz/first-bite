const articleList = [
  { title: 'Article 1', filename: 'dont-eat-angry.md' },
  { title: 'Article 2', filename: 'eating-and-loneliness.md' },
  { title: 'Article 3', filename: 'eating-while-driving.md' },
  // Add more articles here as you create them
];

document.getElementById('articles').addEventListener('click', () => {
  const articleLinks = articleList.map((article, index) => {
    return `<li><a href="#" data-filename="${article.filename}" id="article-${index}">${article.title}</a></li>`;
  }).join('');

  document.getElementById('content').innerHTML = `
    <h2>Articles</h2>
    <ul>${articleLinks}</ul>
  `;

  articleList.forEach((article, index) => {
    document.getElementById(`article-${index}`).addEventListener('click', (e) => {
      e.preventDefault();
      const filename = e.target.dataset.filename;
      fetch(`articles/${filename}`)
        .then(response => response.text())
        .then(text => {
          document.getElementById('content').innerHTML = `<h2>${article.title}</h2><pre>${text}</pre>`;
        });
    });
  });
});

document.getElementById('home').addEventListener('click', () => {
  document.getElementById('content').innerHTML = `<h2>Welcome to Health Articles!</h2><p>Here, you'll find informative and well-researched articles on various health topics. Browse through the list of articles below and click on any title to read the full article.</p>`;
});

