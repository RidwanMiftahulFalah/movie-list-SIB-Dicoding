class ContentCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  set orchid(orchid) {
    this._orchid = orchid;
  }

  set moreData(moreData) {
    this._moreData = moreData;
  }

  render() {
    const distribution = this._orchid.distribution.native || [];
    
    this.innerHTML = `
      <h1>${this._orchid.scientific_name}</h1>

      <section class="article-body">
        <img
          src="${this._orchid.image_url}"
          alt="${this._orchid.scientific_name} Image"
          class="article-image"
        />

        <div class="detail-container">
          <p><span>Common Name:</span> ${this._orchid.common_name || '-'}</p>
          <p><span>Scientific Name:</span> ${this._orchid.scientific_name}</p>
          <p><span>Genus:</span> ${this._orchid.genus}</p>
          <p><span>Family:</span> ${this._orchid.family}</p>
          <p><span>Distribution:</span> ${distribution.map(item => ` ${item}`)}</p>
        </div>        
      </section>`;
  }
}

customElements.define('content-card', ContentCard);
