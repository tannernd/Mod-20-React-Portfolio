import { Link } from 'react-router-dom';
import Navigation from './Navigation';


export default function Header() {
    return (

        <nav className="navbar navbar-expand-lg bg-secondary">
            <div className="container-fluid">
            <Link key={1} className="navbar-brand" to="/">
                    Nate Tanner
                    </Link>
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <Navigation
                    links={[                    
                        <li className="nav-link" key={2}><Link key={2} className="nav-link" to="/about">
                        About Me
                        </Link></li>,
                        <li className="nav-link" key={3}><Link key={3} className="nav-link" to="/portfolio">
                        Portfolio
                        </Link></li>,
                        <li className="nav-link" key={4}><Link key={4} className="nav-link" to="/contact">
                        Contact Me
                        </Link></li>,
                        <li className="nav-link" key={5}><Link key={5} className="nav-link" to="/resume">
                        Resume
                        </Link></li>,
                    ]}
                />
                </div>
            </div>
        </nav>
    )
}