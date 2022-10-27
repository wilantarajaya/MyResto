class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
      <div class="app-bar">
        <div class="app-bar__brand">
          <h1>MyResto</h1>
        </div>
        <div class="app-bar__menu">
          <button id="hamburgerButton" class="menuToggle">
              <span></span>
              <span></span>
              <span></span>
          </button>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#/like">Favorite</a></li>
            <li><a href="https://www.linkedin.com/in/unavailable/">About Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
    `;
  }
}

customElements.define('app-bar', AppBar);
