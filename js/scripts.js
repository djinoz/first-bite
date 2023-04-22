  const articleList = [
  { title: 'Article 1', filename: 'dont-eat-angry.md' },
  { title: 'Article 2', filename: 'eating-and-loneliness.md' },
  { title: 'Article 3', filename: 'eating-while-driving.md' },
  { title: 'Article 4', filename: 'benefits_of_stopping_eating_before_full.md' },
  { title: 'Article 5', filename: 'risks_of_eating_quickly.md' },
  { title: 'Article 6', filename: 'benefits_of_stopping_eating.md' },
  { title: 'Article 7', filename: 'spicy_food_benefits_risks.md' },
  { title: 'Article 8', filename: 'spicy_food.md' },
  { title: 'Article 9', filename: 'risks_of_eating_quickly.md' },
  { title: 'Article 10', filename: 'eating_quickly_benefits_risks.md' },
  // Add more articles here as you create them			
];

/*
function getArticles() {
  const articleDir = 'articles'; // The name of the subdirectory containing the articles
  const articleList_1 = []; // Initialize an empty array to hold the list of articles

  // Get all the filenames in the "articles" subdirectory
  const fileNames = fs.readdirSync(articleDir);

  // Loop through each filename in the directory
  for (const fileName of fileNames) {
    // Read the contents of the file
    const fileContent = fs.readFileSync(`${articleDir}/${fileName}`, 'utf8');
    // Get the title from the first line of the file
    const title = fileContent.split('\n')[0].trim();
    // Get the link to the file
    const link = `/${articleDir}/${fileName}`;

    // Add the title and link to the list of articles
    articleList_1.push({ title, link });
  }

  // Return the list of articles
  return articleList_1;
}
*/

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

          document.getElementById('content2').innerHTML =  renderMarkdown('articles/${filename}');

        });
    });
  });
});

document.getElementById('home').addEventListener('click', () => {
  document.getElementById('content').innerHTML = `<h2>Welcome to Health Articles!</h2><p>Here, you'll find informative and well-researched articles on various health topics. Browse through the list of articles below and click on any title to read the full article.</p>`;
});

