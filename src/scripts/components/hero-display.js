class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <main>
      <section class="hero">
        <h1 tabindex="0">My Resto</h1>
        <h2 tabindex="0">Find Your Favorite Restaurant Here !</h2>
        <button class="btn-try" tabindex="0" onclick="document.location='#mainContent'">Try It</button>
      </section>
    </main>
    `;
  }
}

customElements.define('hero-display', Hero);
