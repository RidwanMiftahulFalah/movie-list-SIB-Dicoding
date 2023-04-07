class ContentCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  set movie(movie) {
    this._movie = movie;
  }

  set genreList(genreList) {
    this._genreList = genreList;
  }

  render() {
    const {
      poster_path,
      title,
      release_date,
      popularity,
      vote_average,
      vote_count,
    } = this._movie;

    this.innerHTML = `
      <h1>${title}</h1>

      <section class="content-body">
        <img
          src="${
            poster_path ? 'https://image.tmdb.org/t/p/w500' + poster_path : ''
          }"
          alt="${title}'s Poster"
          class="movie-image"
        />

        <div class="movie-detail">
          <div class="movie-property">
            <p><span>Release Date:</span></p>
            <p>${release_date}</p>
          </div>

          <div class="movie-property">
            <p><span>Genre:</span></p>
            <p>${this._genreList.map((genre) => ' ' + genre)}</p>
          </div>

          <div class="movie-property">
            <p><span>Popularity:</span></p>
            <p>${popularity}</p>
          </div>

          <div class="movie-property">
            <p><span>Rating:</span></p>
            <p>${vote_average}</p>
          </div>

          <div class="movie-property">
            <p><span>Votes:</span></p>
            <p>${vote_count}</p>
          </div>
          
        </div>        
      </section>`;
  }
}

customElements.define('content-card', ContentCard);
