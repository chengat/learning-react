export default function Header() {
  return (
    <header className="header">
      <img src="src/assets/react.svg" className="nav-logo" alt="React Logo" />
      <nav>
        <ul className="nav-list">
          <li className="nav-list-items">Pricing</li>
          <li className="nav-list-items">About</li>
          <li className="nav-list-items">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
