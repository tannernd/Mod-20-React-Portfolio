import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Navigation from './Navigation';


export default function Header() {
    const [currentPage, setCurrentPage] = useState('home');
    const handlePageChange = (page) => setCurrentPage(page);
    return (

        <nav className="navbar navbar-expand-lg bg-secondary">
            <div className="container-fluid">
            <Link key={1} className={currentPage === 'home' ? 'navbar-brand active' : 'navbar-brand'}  onClick={() => handlePageChange('home')} to="/">
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
                        <Link key={2} className={currentPage === 'about' ? 'nav-link active' : 'nav-link'} to="/about" onClick={() => handlePageChange('about')}>
                        About Me
                        </Link>,
                        <Link key={3} className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'} to="/portfolio" onClick={() => handlePageChange('portfolio')}>
                        Portfolio
                        </Link>,
                        <Link key={4} className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'} to="/contact" onClick={() => handlePageChange('contact')}>
                        Contact Me
                        </Link>,
                        <Link key={5} className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'} to="/resume" onClick={() => handlePageChange('resume')}>
                        Resume
                        </Link>,
                    ]}
                />
                </div>
            </div>
        </nav>
    )
}