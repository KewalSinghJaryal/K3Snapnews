<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>News App</title>
</head>
<body>

  <input type="text" id="searchInput" placeholder="Enter search query">
  <button onclick="searchNews()">Search</button>

  <div id="newsResults"></div>

  <script>
    // Replace 'YOUR_API_KEY' with the actual API key from the news API.
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = 'https://newsapi.org/v2/everything';

    function searchNews() {
      const searchInput = document.getElementById('searchInput').value;

      if (!searchInput) {
        alert('Please enter a search query');
        return;
      }

      const url = `${apiUrl}?q=${searchInput}&apiKey=${apiKey}`;

      fetch(url)
        .then(response => response.json())
        .then(data => displayNews(data.articles))
        .catch(error => console.error('Error fetching news:', error));
    }

    function displayNews(articles) {
      const newsResultsDiv = document.getElementById('newsResults');
      newsResultsDiv.innerHTML = '';

      if (articles.length === 0) {
        newsResultsDiv.innerHTML = 'No results found.';
        return;
      }

      articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.innerHTML = `
          <h2>${article.title}</h2>
          <p>${article.description}</p>
          <a href="${article.url}" target="_blank">Read more</a>
          <hr>
        `;
        newsResultsDiv.appendChild(articleDiv);
      });
    }
  </script>

</body>
</html>
