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

  render() {
    const { original_title, overview, poster_path } = this._movie;

    this.innerHTML = `
      <h1>${original_title}</h1>

      <section class="article-body">
        <img
          src="https://image.tmdb.org/t/p/w500${poster_path}"
          alt="${original_title}'s Poster"
          class="article-image"
        />

        <div class="detail-container">
          <p><span>${overview}</span></p>
        </div>        
      </section>`;
  }
}

customElements.define('content-card', ContentCard);
