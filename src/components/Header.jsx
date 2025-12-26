import React from 'react';

const Header = () => {
  return (
    <header style={styles.header} className="animate-fade-in">
      <div className="container" style={styles.container}>
        <div style={styles.logo}>PRATHEESH</div>
        <nav>
          <ul style={styles.navLinks}>
            {['Home', 'Hobbies', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} style={styles.link}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    padding: '20px 0',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    background: 'rgba(5, 46, 22, 0.85)', // Dark evergreen
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid var(--border-light)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.2rem',
    fontWeight: '600',
    letterSpacing: '2px', // Tesla-like spacing
    color: 'var(--text-primary)',
    textTransform: 'uppercase',
  },
  navLinks: {
    display: 'flex',
    gap: '40px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  link: {
    fontSize: '0.9rem',
    fontWeight: '500',
    color: 'var(--text-primary)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
};

export default Header;
