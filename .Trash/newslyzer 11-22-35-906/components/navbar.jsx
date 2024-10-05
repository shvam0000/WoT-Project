// components/Navbar.js
import Link from 'next/link';

const Navbar = ({ user }) => {
  return (
    <nav>
      {!user ? (
        <Link href="/api/auth/login">
          <a>Login</a>
        </Link>
      ) : (
        <Link href="/api/auth/logout">
          <a>Logout</a>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
