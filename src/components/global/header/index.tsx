import { useState } from 'react';
import { useUserContext } from '../../../context/useUserContext';
import './header.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSongContext } from '../../../context/useSongContext';
import Search from '@/components/layout/search';

type Props = {};

export function Header({}: Props) {
  const user = useUserContext();
  const { setCurrentSong } = useSongContext();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  function handleClick() {
    setIsChecked(!isChecked);
  }

  function handleClickLogOut() {
    localStorage.removeItem('user');
    navigate('/');
    setCurrentSong({});
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <img
            className="avatar"
            src={user.user?.profilePicture}
            alt="avatar"
          />
          <p>Hello, {user.user?.name}!</p>
        </div>
        <label className="menu">
          <img src="/images/menu-mobile.svg" alt="menu" />
          <input type="checkbox" onClick={handleClick} />
        </label>
        <nav className={`nav ${isChecked ? 'show' : 'hide'}`}>
          <ul>
            <li>
              <Link to="/welcome">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <button onClick={handleClickLogOut}>Log Out</button>
            </li>
          </ul>
        </nav>
      </header>

      {/*HEADER LAPTOP*/}
      <header className="header-laptop">
        <div className="container-laptop">
          <p>Hello, {user.user?.name}!</p>
          <div className="container-icon">
            <NavLink to="/welcome">
              <img className="icon" src="/images/home.svg" alt="home icon" />
            </NavLink>
            <NavLink to="/favourites">
              <img
                className="icon"
                src="/images/favs.svg"
                alt="fav music icon"
              />
            </NavLink>
            <NavLink to="/profile">
              <img
                className="avatar"
                src={user.user?.profilePicture}
                alt="avatar"
              />
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
}
