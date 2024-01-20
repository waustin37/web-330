class Header extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="banner">
                <h1>William John Austin's Personal Portfolio</h1>
            </div>
            <div id="nav-container">
                <ul id="nav-list">
                    <li class="nav">
                        <a href="index.html">Home</a>
                    </li>
                    <li class="nav">
                        <a href="about.html">About</a>
                    </li>
                    <li class="nav">
                        <a href="resume.html">Resume</a>
                    </li>
                    <li class="nav">
                        <a href="projects.html">Projects</a>
                    </li>
                </ul>
            </div>
        `;
    }
}

customElements.define("header-component", Header);