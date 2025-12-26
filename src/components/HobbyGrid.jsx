import React from 'react';

const hobbies = [
    { id: 1, title: 'AI Artistry', icon: '🎨', desc: 'Exploring the frontiers of generative creativity.' },
    { id: 2, title: 'Drone Racing', icon: '🚁', desc: 'High-speed FPV flight through neon cities.' },
    { id: 3, title: 'Retro Gaming', icon: '🕹️', desc: 'Preserving the pixelated classics of the 90s.' },
    { id: 4, title: 'Astrophotography', icon: '✨', desc: 'Capturing the silent beauty of the cosmos.' },
    { id: 5, title: 'Urban Gardening', icon: '🌿', desc: 'Growing sustainability in concrete jungles.' },
    { id: 6, title: 'Vinyl Collection', icon: '💿', desc: 'Spinning stories through analog sound.' },
];

const HobbyGrid = () => {
    return (
        <section id="hobbies" style={styles.section}>
            <div className="container">
                <h2 style={styles.heading}>Passions</h2>
                <div style={styles.grid}>
                    {hobbies.map((hobby) => (
                        <div
                            key={hobby.id}
                            style={styles.card}
                            className="clean-panel"
                        >
                            <div style={styles.icon}>{hobby.icon}</div>
                            <h3 style={styles.title}>{hobby.title}</h3>
                            <p style={styles.desc}>{hobby.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '80px 0',
        background: 'var(--bg-secondary)', // Subtle contrast for the grid section
    },
    heading: {
        fontSize: '2rem',
        textAlign: 'left', // Aligned left like Hero
        marginBottom: '40px',
        fontWeight: '500',
        color: 'var(--text-primary)',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px', // Tighter gap
    },
    card: {
        padding: '30px',
        transition: 'transform 0.3s cubic-bezier(0.5, 0, 0, 0.75)',
        cursor: 'pointer',
        position: 'relative',
        height: '100%',
    },
    icon: {
        fontSize: '2.5rem',
        marginBottom: '20px',
        // No glow, just clean icon
    },
    title: {
        fontSize: '1.2rem',
        marginBottom: '10px',
        color: 'var(--text-primary)',
        fontWeight: '500',
    },
    desc: {
        color: 'var(--text-secondary)',
        lineHeight: '1.5',
        fontSize: '0.9rem',
    }
};

export default HobbyGrid;
