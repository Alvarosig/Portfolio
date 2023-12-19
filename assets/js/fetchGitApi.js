async function getRepo(repoName) {
    const response = await fetch(`https://api.github.com/repos/Alvarosig/${repoName}`);
    const repo = await response.json();
    return repo;
}

function updatePortfolio(repo) {
    const portfolioList = document.querySelector('.portfolio');

    const listItem = document.createElement('li');
    const title = document.createElement('span');
    title.className = 'title github';
    title.textContent = repo.name;

    const link = document.createElement('a');
    link.href = repo.html_url;
    link.target = '_blank';
    link.textContent = repo.html_url;

    listItem.appendChild(title);
    listItem.appendChild(link);

    portfolioList.appendChild(listItem);
}

const repos = ['Pokedex-vanilla-js', 'netflix-copy-layout', 'advancedJavaTrier'];

repos.forEach(repoName => {
    getRepo(repoName)
    .then(updatePortfolio)
    .catch(console.error);
});