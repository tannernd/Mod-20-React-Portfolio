import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return (
        <footer className="text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a className="btn btn-outline-light btn-floating m-1" href="https://linkedin.com/in/tannernd" role="button"
              ><FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/tannernd" role="button"
              > <FontAwesomeIcon icon={faGithub} /></a>

            <a className="btn btn-outline-light btn-floating m-1" href="https://stackoverflow.com/users/2117248/tannern?tab=profile" role="button"
              > <FontAwesomeIcon icon={faStackOverflow} /></a>
          </section>
        </div>

        <div className="text-center p-3">
          © 2023 Nate Tanner
        </div>
      </footer>
    )
}