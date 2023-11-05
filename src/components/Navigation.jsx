export default function Navigation({ links }) {
    return (
      <ul className="navbar-nav ms-auto">
          {links.map((link) => link)}
      </ul>
    );
  }