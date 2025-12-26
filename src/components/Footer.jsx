import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div className="container" style={styles.container}>
                <div style={styles.brandColumn}>
                    <div style={styles.logo}>Pratheesh.</div>
                    <p style={styles.location}>Kochi, Kerala</p>
                </div>

                <div style={styles.linksColumn}>
                    <div style={styles.column}>
                        <h4 style={styles.columnTitle}>Contact</h4>
                        <a href="tel:9036756002" style={styles.link}>9036756002</a>
                        <a href="mailto:hello@pratheesh.com" style={styles.link}>Email</a>
                    </div>
                    <div style={styles.column}>
                        <h4 style={styles.columnTitle}>Social</h4>
                        <a href="https://linkedin.com/in/pratheeshg" style={styles.link}>LinkedIn</a>
                        <a href="#" style={styles.link}>GitHub</a>
                    </div>
                </div>
            </div>
            <div className="container">
                <div style={styles.copyright}>
                    &copy; {new Date().getFullYear()} Pratheesh Gopi. Nature-inspired Design.
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        borderTop: '1px solid var(--border-light)',
        padding: '60px 0 30px',
        background: 'var(--bg-primary)',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '40px',
        marginBottom: '40px',
    },
    brandColumn: {
        flex: '1 1 300px',
    },
    logo: {
        fontSize: '1.2rem',
        fontWeight: '600',
        color: 'var(--text-primary)',
        marginBottom: '10px',
    },
    location: {
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
    },
    linksColumn: {
        display: 'flex',
        gap: '60px',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    columnTitle: {
        fontSize: '0.8rem',
        textTransform: 'uppercase',
        color: 'var(--text-secondary)',
        marginBottom: '10px',
        letterSpacing: '1px',
    },
    link: {
        color: 'var(--text-primary)',
        fontSize: '0.9rem',
        fontWeight: '500',
    },
    copyright: {
        color: 'var(--text-secondary)',
        fontSize: '0.8rem',
        marginTop: '20px',
    }
};

export default Footer;
