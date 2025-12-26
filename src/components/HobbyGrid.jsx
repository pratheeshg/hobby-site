import React from 'react';

// Import images
import aiArtistryImg from '../assets/images/ai_artistry.png';
import droneRacingImg from '../assets/images/drone_racing.png';
import retroGamingImg from '../assets/images/retro_gaming.png';
import astrophotographyImg from '../assets/images/astrophotography.png';
import urbanGardeningImg from '../assets/images/urban_gardening.png';
import vinylCollectionImg from '../assets/images/vinyl_collection.png';

const hobbies = [
    { id: 1, title: 'AI Artistry', image: aiArtistryImg, desc: 'Exploring the frontiers of generative creativity.' },
    { id: 2, title: 'Drone Racing', image: droneRacingImg, desc: 'High-speed FPV flight through neon cities.' },
    { id: 3, title: 'Retro Gaming', image: retroGamingImg, desc: 'Preserving the pixelated classics of the 90s.' },
    { id: 4, title: 'Astrophotography', image: astrophotographyImg, desc: 'Capturing the silent beauty of the cosmos.' },
    { id: 5, title: 'Urban Gardening', image: urbanGardeningImg, desc: 'Growing sustainability in concrete jungles.' },
    { id: 6, title: 'Vinyl Collection', image: vinylCollectionImg, desc: 'Spinning stories through analog sound.' },
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
                            className="clean-panel group"
                        >
                            <div style={styles.imageContainer}>
                                <img src={hobby.image} alt={hobby.title} style={styles.image} />
                                <div style={styles.overlay}></div>
                            </div>
                            <div style={styles.content}>
                                <h3 style={styles.title}>{hobby.title}</h3>
                                <p style={styles.desc}>{hobby.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .group:hover img {
          transform: scale(1.1);
        }
        .group:hover h3 {
          color: var(--accent-primary);
        }
      `}</style>
        </section>
    );
};

const styles = {
    section: {
        padding: '80px 0',
        // Background handled by global theme or parent
    },
    heading: {
        fontSize: '2rem',
        textAlign: 'left',
        marginBottom: '40px',
        fontWeight: '600',
        color: 'var(--text-primary)',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '30px',
    },
    card: {
        background: 'var(--glass-bg)', // Rely on variable
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid var(--glass-border)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--shadow-soft)',
    },
    imageContainer: {
        height: '250px',
        overflow: 'hidden',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to top, rgba(5,46,22,0.9) 0%, transparent 100%)', // Forest fade
        pointerEvents: 'none',
    },
    content: {
        padding: '25px',
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        // We can pull the content up a bit to overlap image if we want, but clean stack is safer.
    },
    title: {
        fontSize: '1.4rem',
        marginBottom: '8px',
        color: 'var(--text-primary)',
        fontWeight: '600',
        transition: 'color 0.3s ease',
    },
    desc: {
        color: 'var(--text-secondary)',
        lineHeight: '1.5',
        fontSize: '0.95rem',
    }
};

export default HobbyGrid;
