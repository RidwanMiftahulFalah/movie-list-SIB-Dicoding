import '../styles/app.css';
import './components/content-card.js';

const baseURL = 'https://trefle.io';
const token = 'token=01y6NOZ1ykOjWWb2qHfzrDZYwYw8pDx93FqQQzcWOjE';

const searchForm = document.querySelector('.search-form');
const contentContainer = document.querySelector('.content-container');

const allData = `${baseURL}/api/v1/plants?${token}&filter[family_name]=Orchidaceae`;

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

fetch('http://www.themealdb.com/api/json/v1/1/search.php?f=a')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.log(error));
