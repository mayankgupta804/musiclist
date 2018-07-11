import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const { username } = props;
  return (
    <header>
     <h1>Musiclist</h1>
      <div className="user-menu">
        <h2>Welcome { username } </h2>
      </div>
      <nav>
        <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/account/profile/mayank">Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
}
