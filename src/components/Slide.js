import React from 'react';

const Slide = ({ slide, animationClass }) => {
    return (
        <div className={`slide ${animationClass}`}>
            <h2>{slide.title}</h2>
            <div className="slide-content">{slide.content}</div>
            {slide.image && <img src={slide.image} alt={slide.title} />}
        </div>
    );
};

export default Slide;
