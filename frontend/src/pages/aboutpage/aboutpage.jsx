import React from 'react';
import './aboutpage.css'; // Import the CSS file

// Import your GIFs
import RuGif from '../../assets/Ru.gif';
import BriannaGif from '../../assets/Brianna.gif';
import AdditiGif from '../../assets/Additi.gif';
import DenielleGif from '../../assets/Denielle.gif';

const AboutPage = () => {
    // Array of GIFs with their respective links and captions
    const gifs = [
        {
            src: RuGif, // Use the imported GIF
            link: 'https://www.linkedin.com/in/ruqayah-rahman/',
            caption: 'Ruqayah Rahman\n2nd Year High School Student'
        },
        {
            src: BriannaGif, // Use the imported GIF
            link: 'https://www.linkedin.com/in/brianna-azan-b71104307/',
            caption: 'Brianna Azan\n3rd Year High School Student'
        },
        {
            src: AdditiGif, // Use the imported GIF
            link: 'https://www.linkedin.com/in/additi-mehta-49b393194/',
            caption: 'Additi Mehta\n2A Computer Science @ University of Waterloo'
        },
        {
            src: DenielleGif, // Use the imported GIF
            link: 'https://www.linkedin.com/in/denielle-camacho-38b8b6305/',
            caption: 'Denielle Camacho\n2A Computer Science @ University of Waterloo'
        }
    ];

    return (
        <div className="gif-container">
            {gifs.map((gif, index) => (
                <div key={index} className="gif-item">
                    <a href={gif.link} target="_blank" rel="noopener noreferrer">
                        <img src={gif.src} alt={`GIF ${index + 1}`} />
                    </a>
                    <p style={{ whiteSpace: 'pre-line' }}>{gif.caption}</p>
                </div>
            ))}
        </div>
    );
};

export default AboutPage;