
import React, { useEffect, useState } from 'react';
import './Typewriter.css';

const Typewriter = ({ text, speed = 200, eraseSpeed = 100, delay = 1000, eraseDelay = 4000, loop = true }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [isErasing, setIsErasing] = useState(false);

    useEffect(() => {
        let timer;

        if (isErasing) {
            if (displayedText.length > 0) {
                timer = setTimeout(() => {
                    setDisplayedText(displayedText.slice(0, -1));
                }, eraseSpeed);
            } else {
                setIsErasing(false);
                timer = setTimeout(() => {
                    setIndex((prev) => (prev + 1) % text.length);
                }, delay);
            }
        } else {
            if (displayedText.length < text[index].length) {
                timer = setTimeout(() => {
                    setDisplayedText(text[index].slice(0, displayedText.length + 1));
                }, speed);
            } else {
                // Add a delay before erasing
                timer = setTimeout(() => {
                    setIsErasing(true);
                }, eraseDelay);
            }
        }

        return () => clearTimeout(timer);
    }, [displayedText, isErasing, index, text, speed, eraseSpeed, delay, eraseDelay]);

    useEffect(() => {
        if (!loop) return;
        const timer = setTimeout(() => {
            setIndex((prev) => (prev + 1) % text.length);
        }, delay);

        return () => clearTimeout(timer);
    }, [index, loop, delay]);

    // Replace \n with <br/> for line breaks
    const formattedText = displayedText.split('\n').map((line, idx) => (
        <React.Fragment key={idx}>
            {line}
            <br />
        </React.Fragment>
    ));

    return <h1 className="typewriter">{formattedText}</h1>;
};

export default Typewriter;
