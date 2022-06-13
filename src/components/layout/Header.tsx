import { NavLink } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div>
        <NavLink to="settings">settings</NavLink>
      </div>
    </header>
  );
};

export default Header;
