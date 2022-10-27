class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
        <p tabindex="0" class="p-footer">
        Copyright © 2021 - MyResto
        </p>
    </footer>
    `;
  }
}

customElements.define('footer-display', FooterBar);
