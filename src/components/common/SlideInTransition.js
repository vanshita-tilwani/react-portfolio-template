import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../main.css';

function SlideInTransition({ children }) {
    const [isVisible, setIsVisible] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 1 } // Trigger the whole target is visible
        );

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={targetRef}>
            <CSSTransition
                in={isVisible}
                timeout={2000}
                classNames="transition"
                unmountOnExit>
                {children}
            </CSSTransition>
        </div>
    );
}

export default SlideInTransition;