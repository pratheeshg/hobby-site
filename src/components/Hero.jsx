import React from 'react';

const Hero = () => {
    return (
        <section style={styles.hero}>
            <div className="container" style={styles.container}>
                <div style={styles.content}>
                    <h1 style={styles.title} className="animate-fade-in">
                        Next Generation <br /> Passions
                    </h1>
                    <p style={styles.description} className="animate-fade-in">
                        Experience the future of creativity. A curated collection of hobbies designed for the modern world.
                    </p>
                    <div style={styles.buttonGroup} className="animate-fade-in">
                        <button style={styles.primaryButton}>Order Now</button>
                        <button style={styles.secondaryButton}>Demo Drive</button>
                    </div>
                </div>
            </div>
            <div style={styles.backgroundBlur}></div>
        </section>
    );
};

const styles = {
    hero: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
    },
    container: {
        position: 'relative',
        zIndex: 2,
        width: '100%',
    },
    content: {
        maxWidth: '600px',
        textAlign: 'left', // Stark left alignment
    },
    title: {
        fontSize: '3.5rem',
        fontWeight: '500',
        lineHeight: '1.2',
        color: 'var(--text-primary)',
        marginBottom: '20px',
        letterSpacing: '-0.5px',
    },
    description: {
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        marginBottom: '40px',
        lineHeight: '1.6',
    },
    buttonGroup: {
        display: 'flex',
        gap: '20px',
    },
    primaryButton: {
        padding: '12px 40px',
        fontSize: '0.9rem',
        fontWeight: '500',
        background: 'transparent',
        border: '3px solid var(--text-primary)',
        color: 'var(--text-primary)',
        borderRadius: '4px', // Slight radius, almost square
        transition: 'all 0.3s ease',
    },
    secondaryButton: {
        padding: '12px 40px',
        fontSize: '0.9rem',
        fontWeight: '500',
        background: 'var(--bg-secondary)',
        color: 'var(--text-primary)',
        borderRadius: '4px',
        transition: 'all 0.3s ease',
    },
    // Subtle decorative element
    backgroundBlur: {
        position: 'absolute',
        right: '-10%',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(74, 222, 128, 0.1) 0%, rgba(5, 46, 22, 0) 70%)',
        borderRadius: '50%',
        zIndex: 1,
    }
};

export default Hero;
