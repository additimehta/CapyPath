import React, { useEffect, useState } from 'react';
import './CardInfo.css'; // Add CSS for typing animation

function CardInfo() {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hardcoded data for University of Waterloo - Computer Science
  const university = "University of Waterloo";
  const degree = "Computer Science";
  const futureCareers = "Software Developer, Data Scientist, Machine Learning Engineer, Cybersecurity Analyst";
  const aboutDegree = `
    The Computer Science program at the University of Waterloo is one of the best in Canada. 
    It focuses on algorithms, software development, artificial intelligence, and data structures. 
    Students gain hands-on experience through co-op programs, working with top tech companies like Google, Shopify, and Amazon.
  `;

  const textToType = `
    University: ${university}
    Degree: ${degree}
    Future Careers: ${futureCareers}
    About the Degree: ${aboutDegree}
  `;

  useEffect(() => {
    if (currentIndex < textToType.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + textToType[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50); // Adjust typing speed (50ms per character)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, textToType]);

  return (
    <div className="card-info">
      <h1>Card Information</h1>
      <pre className="typing-effect">{typedText}</pre>
    </div>
  );
}

export default CardInfo;
