class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="app-bar">
        <div class="app-bar__menu">
          <button id="hamburgerButton" aria-label="navigation menu">☰</button>
        </div>
        <div class="app-bar__brand">
          <h1>Lesgo Restaurant Finder</h1>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
          <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li><a href="https://github.com/ArielSulton" target="_blank" rel="noopener">About Us</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('app-bar', AppBar);