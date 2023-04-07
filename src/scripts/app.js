import '../styles/app.css';
import './components/content-card.js';

const baseURL = 'https://api.themoviedb.org/3';
const token = 'api_key=fa0e3abf788c3e22db2c06dfea234a19';

const searchForm = document.querySelector('.search-form');
const contentContainer = document.querySelector('.content-container');

const popularResult = `${baseURL}/movie/popular?${token}`;

// async function fetchData(url) {
//   try {
//     // Fetch Header Data
//     const response = await fetch(url, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//       },
//     });
//     const json = await response.json();
//     const orchidList = json.data;

// contentContainer.innerHTML = '';

// if (orchidList.length === 0) {
//   const message = document.createElement('h2');
//   message.style.margin = 'auto';
//   message.innerText = 'Data not found...';
//   contentContainer.appendChild(message);
// }

// orchidList.forEach((orchid) => {
//   // Fetch Detail Data
//   fetch(`${baseURL}${orchid.links.self}?${token}`)
//     .then((response) => response.json())
//     .then((json) => {
//       const contentCard = document.createElement('content-card');
//       contentCard._orchid = json.data;
//       contentContainer.appendChild(contentCard);
//     })
//     .catch((error) => alert(error));
// });
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchData(allData);

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchQuery = document.getElementById('search-input').value.trim();
  let searchResult = `${baseURL}/api/v1/plants/search?${token}&q=${searchQuery}&filter[family]=Orchidaceae`;

  // fetchData(searchQuery ? searchResult : allData);
});

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const movieList = json.results;

    console.log(movieList);

    movieList.forEach(movie => {
      const contentCard = document.createElement('content-card');
      contentCard.movie = movie;
      contentContainer.appendChild(contentCard);
    });

  } catch (error) {
    console.log(error);
  }
};

fetchData(popularResult);
