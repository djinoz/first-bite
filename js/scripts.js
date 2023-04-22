document.getElementById('articles').addEventListener('click', () => {
  fetch('articles/dont-eat-angry.md')
    .then(response => response.text())
    .then(text => {
      document.getElementById('content').innerHTML = `<h2>Article 1</h2><pre>${text}</pre>`;
    });
});

document.getElementById('home').addEventListener('click', () => {
  document.getElementById('content').innerHTML = `<h2>Welcome to Mindful Eating Articles!</h2><p>Here, you'll find informative and well-researched articles on various health topics. Browse through the list of articles below and click on any title to read the full article.</p>`;

