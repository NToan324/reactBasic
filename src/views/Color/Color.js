import React, { useState, useEffect } from 'react';

const ChangeColor = () => {
    let letters = '0123456789ABCDEF';
    let flags = '#';
    for (let i = 0; i < 6; i++) {
        flags += letters[Math.floor(Math.random() * 16)];
    }
    return flags;
}

const Color = (WrapperComponent) => {
    const ColorWrapper = (props) => {
        const [color, setColor] = useState(ChangeColor());

        useEffect(() => {
            const interval = setInterval(() => {
                setColor(ChangeColor());
            }, 1000); // change color every second

            return () => clearInterval(interval); // cleanup interval on unmount
        }, []);

        return (
            <div style={{ color: color }}>
                <WrapperComponent {...props} />
            </div>
        );
    }

    return ColorWrapper;
}

export default Color;
