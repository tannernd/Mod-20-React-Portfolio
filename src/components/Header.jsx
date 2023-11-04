import { Link } from 'react-router-dom';
import Navigation from './components/Navigation';

export default function Header() {
    return (
        <header>
            <Navigation
                links={[
                    <Link key={1} className="nav-link text-light" to="/about">
                    About Me
                    </Link>,
                    <Link key={2} className="nav-link text-light" to="/portfolio">
                    Portfolio
                    </Link>,
                    <Link key={2} className="nav-link text-light" to="/contact">
                    Contact Me
                    </Link>,
                    <Link key={2} className="nav-link text-light" to="/resume">
                    Resume
                    </Link>,
                ]}
            />
        </header>
    )
}