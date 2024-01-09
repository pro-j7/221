import React from 'react';
import DateComponent from '../헤더 날짜/today';
import { NavLink } from 'react-router-dom';
import menuIcon from './menu.svg';
import logoImg from './logo.png';
import userIcon from './user.svg';

const headerStyles = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    padding: '10px 0',
    borderBottom: '1px solid #e2e2e2',
  },
  menuIconbox: {
    maxWidth: '20px',
  },
  icon: {
    width: '100%',
    cursor: 'pointer',
    display: 'block',
  },
  logoPngBox: {
    maxWidth: '48%',
    paddingRight: '50px',
  },
  logo: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  emptyBox: {
    maxWidth: '20px',
  },
  empty: {
    width: '20px',
    height: '20px',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '15px 0px',
    paddingBottom: '15px',
    borderBottom: 'thick double #020d11',
  },
  categories: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.75rem',
    maxWidth: '48%',
    flexWrap: 'wrap',
    paddingRight: '50px',
  },
  LoginIconBox: {
    maxWidth: '20px',
  },
  LoginUserIcon: {
    width: '100%',
    cursor: 'pointer',
  },
  category: {
    margin: '0.5rem',
    color: '#000',
    cursor: 'pointer',
    border: 'none',
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
    fontWeight: 'normal',
  },
  todaysPaper: {
    margin: '0',
    fontSize: '0.75rem',
  },
  headerLeftRight: {
    width: '150px',
  },
  menuSizeWrap: {
    width: '150px',
  },
};

function Header() {
  return (
    <header>
      <div style={headerStyles.topContainer}>
        <div style={headerStyles.menuSizeWrap}>
          <div style={headerStyles.menuIconbox}>
            <img src={menuIcon} alt="메뉴" style={headerStyles.icon} />
          </div>
        </div>
        <div style={headerStyles.logoPngBox}>
          <NavLink to="/main">
            <img src={logoImg} alt="로고" style={headerStyles.logo} />
          </NavLink>
        </div>
        <div style={headerStyles.emptyBox}>
          <div style={headerStyles.empty}></div>
        </div>
      </div>
      <div style={headerStyles.container}>
        <div style={headerStyles.headerLeftRight}>
          <DateComponent />
          <p style={headerStyles.todaysPaper}>Today's Paper</p>
        </div>
        <div style={headerStyles.categories}>
          <div style={headerStyles.category}>
            <NavLink
              to="/main/us"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              style={{
                fontFamily: 'sans-serif',
                fontWeight: 'normal',
              }}
            >
              U.S.
            </NavLink>
          </div>
          <div style={headerStyles.category}>
            <NavLink
              to="/main/world"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              style={{ fontFamily: 'sans-serif', fontWeight: 'normal' }}
            >
              World
            </NavLink>
          </div>

          <div style={headerStyles.category}>
            <NavLink
              to="/main/business"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              style={{ fontFamily: 'sans-serif', fontWeight: 'normal' }}
            >
              Business
            </NavLink>
          </div>

          <div style={headerStyles.category}>
            <NavLink
              to="/main/arts"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              style={{ fontFamily: 'sans-serif', fontWeight: 'normal' }}
            >
              Arts
            </NavLink>
          </div>
        </div>
        <div style={headerStyles.LoginIconBox}>
          <NavLink to="/main/Login">
            <img
              src={userIcon}
              alt="로그인"
              style={headerStyles.LoginUserIcon}
            />
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
