import React from 'react';
import '../styles.css';

const Slide = ({ slide, animationClass }) => {
    return (
        <div className={`slide ${animationClass}`}>
            <h2>{slide.title}</h2>
            <div className="slide-content">
                {slide.image && <img src={slide.image} alt={slide.title} className="slide-image" />}
                {slide.content && <div>{slide.content}</div>}
            </div>
        </div>
    );
};

export default Slide;
