class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="footer">
                <ul id="footer-bar">
                    <li>&copy William John Austin, 2023</li>
                </ul>
            </div>
        `;
    }
}

customElements.define("footer-component", Footer);