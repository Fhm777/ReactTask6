import './style.css';

export function Nav () {
    return (
        <nav className="navbar navbar-expand-lg p-3 sticky-top">
            <div className="navbar-brand text-light">Portfolio</div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon navbar-dark"></span>
            </button>
            <div className="navbar-collapse collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav text-center nav-underline">
                    <li className="nav-item mx-3">
                        <a href="#Home" className="nav-link text-light">Home</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a href="#About" className="nav-link text-light">About</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a href="#Contacts" className="nav-link text-light">Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}